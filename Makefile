include n.Makefile

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
