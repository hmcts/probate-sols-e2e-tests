/*
:ToDo
 */
const helper = require('test/end-to-end/helpers/Utils.js');
module.exports = function() {
    const I = this;
    I.click("Search");
    I.wait(10);
    I.selectOption("Application type","Solicitor");
    I.selectOption("Registry location","Birmingham");
    I.fillField("//input[@id='deceasedForenames']",helper.getValue());
    I.fillField("//input[@id='deceasedForenames']","TestFirstName");
    I.wait(3);
    I.click("Apply");
    I.wait(7);
    I.click("//a[contains(@href,'/case/PROBATE/GrantOfRepresentation/')]");
    I.wait(5);
    I.click("Print");
    I.wait(7);
    I.click("//a[contains(.,'Print Case Details')]");
    I.wait(7);
    I.switchToNextTab();
    I.wait(10);
    I.seeCurrentUrlEquals("https://gateway-ccd.nonprod.platform.hmcts.net/print/jurisdictions/PROBATE/case-types/GrantOfRepresentation/cases/1525181309682708/probate/sol");
    I.wait(5);
    var ExpectedTitle = "Application for probate for "+helper.getValue();
    var ExpectedTitle = "Application for probate for TestFirstName";
    console.log("Current URL is "+ExpectedTitle);
    I.seeInTitle(ExpectedTitle);
    I.seeElement('p>strong');
    I.seeTextEquals("TestFirstName",'html body pre table tbody tr.rowEven td');
    console.log("Done");
};