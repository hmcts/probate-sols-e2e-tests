module.exports = function () {
    const I = this;
    I.wait(2);
    I.seeElement("//a[text()='legal_statement.pdf']");
    I.click("#solsSOTNeedToUpdate-No");
    I.click("Continue");
    I.wait(4);
    I.click("Continue");
    I.wait(5);
};