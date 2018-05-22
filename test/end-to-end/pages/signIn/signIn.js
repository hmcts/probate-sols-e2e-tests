const testConfig = require("test/config.js");

module.exports = function () {
    const I = this;
    I.amOnPage(testConfig.TestFrontendUrl);
    I.wait(5)

    I.fillField("username", testConfig.TestSolicitorUserName);
    I.fillField("password", testConfig.TestSolicitorPassword);

    I.click("Sign in");
    I.wait(10);
    I.click("Create new case");
    I.selectOption('Case type', 'Grant of representation');
    I.selectOption('Event', 'Apply for probate');
    I.click("Start");
    I.wait(8);
};