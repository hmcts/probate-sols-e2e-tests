module.exports = function () {
    const I = this;
    I.click("Go");
    I.wait(4);
    I.seeElement("//a[text()='legalStatement.pdf']");
    I.click("#solsSOTNeedToUpdate-No");
    I.click("Continue");
    I.wait(4);
    I.click("Continue");
    I.wait(8);
};