module.exports = function () {
    const I = this;
    I.wait(4);
    I.fillField("//input[@id='extraCopiesOfGrant']", "1");
    I.fillField("//input[@id='outsideUKGrantCopies']", "1");
    I.click("Continue");
    I.wait(4);
    I.selectOption('How do you want to pay?', 'Fee account');
    I.fillField("Fee account number", "Fee-abc");
    I.click("Continue");
    I.wait(4);
    I.click("Submit application");
    I.wait(8);
};