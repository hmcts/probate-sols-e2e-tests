const testConfig = require("test/config.js");

module.exports = function () {
    const I = this;
    I.amOnPage(testConfig.TestFrontendUrl);
    I.wait(7);
    I.waitForText("Email address");
    I.fillField("username", testConfig.TestSolicitorUserName);
    I.fillField("password", testConfig.TestSolicitorPassword);
    I.click("Sign in");
    I.wait(7);
    I.click("Create new case");
    I.wait(10);
    I.selectOption('jurisdiction','Manage probate applications');
    I.wait(5);
    I.selectOption('Case type', 'Grant of representation');
    I.waitForText("Event");
    I.selectOption('event', 'Apply for probate');
    I.click("Start");
    I.wait(8);
};