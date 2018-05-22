module.exports = function () {
    const I = this;
    I.click("#willExists-Yes");
    I.click("#willAccessOriginal-Yes");
    I.click("#willHasCodicils-Yes");
    I.wait(3);
    I.fillField("//input[@id='willNumberOfCodicils']", "2");
    I.click("Continue");
};