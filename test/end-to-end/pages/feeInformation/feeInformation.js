module.exports = function () {
    const I = this;

    I.fillField("//input[@id='extraCopiesOfGrant']", "1");
    I.fillField("//input[@id='outsideUKGrantCopies']", "1");
    I.click("Continue");
    I.selectOption('How do you want to pay?', 'Fee account');
   // I.wait(2);
    I.fillField("Fee account number", "Fee-abc");
    I.click("Continue");
    I.click("Submit application");
    //I.wait(2);
};