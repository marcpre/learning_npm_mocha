# learning_mocha

## Mocha

### Getting Started

```
$ npm install mocha
$ mkdir test
$ $EDITOR test/test.js # or open with your favorite editor
```

[MochaJS - Getting Started](https://mochajs.org/#getting-started)

### Run multiple test files:

Run all tests in a file recursive:

    mocha --recursive
    
[Multiple Tests with Mocha](https://stackoverflow.com/questions/24153261/joining-tests-from-multiple-files-with-mocha-js)


## Code Coverage

Install `istanbul`:

    npm install istanbul -g

Get code coverage report

    istanbul cover _mocha -- -R spec




## Sources
[https://github.com/ideaq/learn-mocha](https://github.com/ideaq/learn-mocha)
