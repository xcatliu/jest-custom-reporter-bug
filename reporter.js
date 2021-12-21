const { DefaultReporter } = require('@jest/reporters');

class CustomReporter extends DefaultReporter {
  /** 单个测试结束 */
  onTestResult(contexts, testResult, ...args) {
    console.log(testResult.console);

    return super.onTestResult(contexts, testResult, ...args);
  }
}

module.exports = CustomReporter;
