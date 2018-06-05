module.exports = function () {
    const I = this;
    I.wait(4);
    I.click("#willExists-Yes");
    I.click("#willAccessOriginal-Yes");
    I.click("#willHasCodicils-Yes");
    I.wait(2);
    I.fillField("//input[@id='willNumberOfCodicils']", "2");
    I.click("Continue");
};