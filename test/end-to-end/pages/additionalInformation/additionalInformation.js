module.exports = function () {
    const I = this;

    I.fillField("#solsAdditionalInfo", "Additional information");
    I.click("Continue");
    I.click("Save and continue");
    I.wait(10);
   // I. wait(2);
};