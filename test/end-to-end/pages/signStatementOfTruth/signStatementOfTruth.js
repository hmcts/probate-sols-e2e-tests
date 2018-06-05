module.exports = function () {
    const I = this;
    I.waitForText("Your name");
    I.fillField("Your name", "Solicitor Name");
    I.fillField("Your job title", "Solicitor Job Title");
    I.click("Continue");
};