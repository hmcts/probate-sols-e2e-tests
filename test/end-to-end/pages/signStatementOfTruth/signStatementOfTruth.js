module.exports = function () {
    const I = this;
    I.fillField("Your name", "Solicitor Name");
    I.fillField("Your job title", "Solicitor Job Title");
    I.click("Continue");
    //I.wait(2);
};