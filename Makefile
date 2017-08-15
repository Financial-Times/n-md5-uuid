node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

unit-test:
	tap test/spec.js

unit-test-coverage:
	tap test/spec.js --coverage --coverage-report=$(if $(CIRCLECI),text-lcov,text)

test:
	make verify

ifeq ($(CIRCLECI),true)
	make unit-test-coverage
else
	make unit-test
endif
