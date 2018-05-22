module.exports = function () {
    const I = this;
    I.seeElement("//a[text()='legal_statement.pdf']");
    I.click("#solsSOTNeedToUpdate-No");
    I.click("Continue");
    I.click("Continue");
};