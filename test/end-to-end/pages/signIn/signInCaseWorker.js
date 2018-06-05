const testConfig = require("test/config.js");

module.exports = function () {
    const I = this;
    I.amOnPage(testConfig.TestFrontendUrl);
    I.wait(5);
    I.fillField("username", testConfig.TestCaseWorkerUserName);
    I.fillField("password", testConfig.TestCaseWorkerPassword);
    I.click("Sign in");
    I.wait(8);
};