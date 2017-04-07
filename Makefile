include n.Makefile

unit-test:
	tap test/spec.js

unit-test-coverage:
	tap test/spec.js --coverage

test:
	make verify

ifeq ($(CIRCLECI),true)
	make unit-test-coverage && cat ./coverage/lcov.info | ./node_modules/.bin/coveralls
else
	make unit-test
endif
