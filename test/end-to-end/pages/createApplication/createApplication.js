module.exports = function () {
    const I = this;

    I.fillField("Name of your firm", "TestFirmName");
    I.fillField("Postcode of your firm", "TW3 4LF");
    I.fillField("Your reference for this application", "TestReference");
    I.fillField("Email address", "firm email");
    I.fillField("Phone number (Optional)", "09083480");
    I.click("Continue");
    I.click("Save and continue");
    I.wait(3);
    I.click("Go");
    I.wait(3);
    I.click("Continue");
    I.wait(5);
};