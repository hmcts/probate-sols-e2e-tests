module.exports = function () {
    const I = this;
    I.click("#willExists-No");
    I.click("#willAccessOriginal-Yes");
    I.click("#willHasCodicils-Yes");
    I.fillField("How many were added to the will?", "2");
    I.click("Continue");
};