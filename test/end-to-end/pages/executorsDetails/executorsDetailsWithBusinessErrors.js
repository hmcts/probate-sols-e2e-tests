module.exports = function () {
    const I = this;
    I.fillField("First name(s)", "exec1");
    I.fillField("Last name(s)", "exec1");
    I.click("#primaryApplicantHasAlias-Yes");
    I.fillField("Enter their full name as it appears on the will", "Exec1WillName");
    I.click("#primaryApplicantIsApplying-Yes");
    I.click("//span[text()=concat('I can',\"'\", 't enter a UK postcode')]");
   // I.fillField("#AddressLine1", "100 Sutton Lane");
    I.fillField("#PostTown", "Hounslow");
    I.fillField("#County", "Middlesex");
   // I.fillField("#PostCode", "TW3 4LF");
   // I.fillField(("#Country", "UK"));
    //I.wait(2);
    I.click("#otherExecutorExists-Yes");
    I.click("Add item");
    I.fillField("//input[@id='solsAdditionalExecutorList_0_additionalExecForenames']","exec2");
    I.fillField("//input[@id='solsAdditionalExecutorList_0_additionalExecLastname']","exec2");
    //I.wait(2);
    I.click("//input[@id='solsAdditionalExecutorList_0_additionalExecNameOnWill-No']");
    //I.wait(2);
    I.click("//input[@id='solsAdditionalExecutorList_0_additionalApplying-Yes']");
    //I.wait(2);
    I.click("//div[@id='solsAdditionalExecutorList_0_additionalExecAddress_additionalExecAddress']/span[text()=concat('I can',\"'\", 't enter a UK postcode')]");
    I.fillField("//div[@id='solsAdditionalExecutorList_0_additionalExecAddress_additionalExecAddress']//div[@id='additionalExecAddress']//input[@id='AddressLine1']", "120 Sutton Lane");
    I.fillField("//div[@id='solsAdditionalExecutorList_0_additionalExecAddress_additionalExecAddress']//div[@id='additionalExecAddress']//input[@id='PostCode']", "TW3 3DB");
    I.click("Continue");
    //I.wait(2);
};