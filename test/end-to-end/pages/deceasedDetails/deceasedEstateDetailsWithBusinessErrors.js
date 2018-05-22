module.exports = function () {
    const I = this;
    I.click("#deceasedDomicileInEngWales-Yes");
    I.click("//span[text()=concat('I can',\"'\", 't enter a UK postcode')]");
    //I.wait(5);

   // I.fillField("#AddressLine1", "114 Sutton Lane");
    I.fillField("#PostTown", "Hounslow");
    I.fillField("#County", "Middlesex");
  //  I.fillField("#PostCode", "TW3 4LF");
   // I.fillField(("#Country", "UK"));
    //I.wait(2);
    I.click("#deceasedAnyOtherNames-Yes");
    I.click("Add item");
    //I.wait(2);
    I.fillField("//input[@id='solsDeceasedAliasNamesList_0_SolsAliasname']", "Deceased AliasName");
    I.selectOption('Which Inheritance Tax form was filled in?', 'IHT 205 - there was no Inheritance Tax to pay');
    //I.wait(2);
    I.fillField('Enter the gross value of the estate', "10000");
    I.fillField('Enter the net value of the estate', "20000");
    I.click('Continue');
    //I.wait(2);
};