# Jest custom reporter bug

> Custom report behaved different in one test / multiple tests

Run `npm test`, the result would be:

```
> jesttest@1.0.0 test
> jest

 PASS  ./sum2.test.jses to run...
  ● Console

    console.log
      world2

      at Object.<anonymous> (sum2.test.js:4:11)

[
  {
    message: 'world2',
    origin: '    at Object.<anonymous> (/Users/xcatliu/work/github/jesttest/sum2.test.js:4:11)\n' +
      '    at Promise.then.completed (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/utils.js:391:28)\n' +
      '    at new Promise (<anonymous>)\n' +
      '    at callAsyncCircusFn (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/utils.js:316:10)\n' +
      '    at _callCircusTest (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/run.js:218:40)\n' +
      '    at processTicksAndRejections (internal/process/task_queues.js:95:5)\n' +
      '    at _runTest (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/run.js:155:3)\n' +
      '    at _runTestsForDescribeBlock (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/run.js:66:9)',
    type: 'log'
  }
]
 PASS  ./sum.test.js
  ● Console

    console.log
      hello1

      at Object.<anonymous> (sum.test.js:4:11)

[
  {
    message: 'hello1',
    origin: '    at Object.<anonymous> (/Users/xcatliu/work/github/jesttest/sum.test.js:4:11)\n' +
      '    at Promise.then.completed (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/utils.js:391:28)\n' +
      '    at new Promise (<anonymous>)\n' +
      '    at callAsyncCircusFn (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/utils.js:316:10)\n' +
      '    at _callCircusTest (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/run.js:218:40)\n' +
      '    at _runTest (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/run.js:155:3)\n' +
      '    at _runTestsForDescribeBlock (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/run.js:66:9)\n' +
      '    at run (/Users/xcatliu/work/github/jesttest/node_modules/jest-circus/build/run.js:25:3)',
    type: 'log'
  }
]
```

This is correct, because we log the `testResult.console` in the custom `reporter.js`.

However, when we run only one test, the `testResult.console` turned to `undefined`:

```bash
npm run testOne
```

```
> jesttest@1.0.0 testOne
> jest sum.test.js

 PASS  ./sum.test.jstes to run...
  console.log
    hello1

      at Object.<anonymous> (sum.test.js:4:11)

undefined
```

Why `testResult.console` is `undefined`? This should be a bug.
