module.exports = function () {
    const I = this;
    I.wait(4);
    I.fillField("#solsAdditionalInfo", "Additional information");
    I.click("Continue");
    I.wait(6);
    I.click("Save and continue");
    I.wait(5);
};