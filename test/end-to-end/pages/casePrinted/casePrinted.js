const helper = require('test/end-to-end/helpers/Utils.js');
module.exports = function () {
    const I = this;
    I.wait(6);
    I.click("Search");
    I.wait(8);
    I.selectOption('jurisdiction','Manage probate applications');
    I.wait(7);
    I.selectOption('Case type', 'Grant of representation');
    I.wait(7);
    I.fillField("//input[@id='deceasedForenames']",helper.getValue());
   // I.fillField("//input[@id='deceasedForenames']","TestUserFirstName4July1705");
    I.click("Apply");
    I.wait(5);
    I.click("//a[contains(@href,'/case/PROBATE/GrantOfRepresentation/')]");
    I.wait(4);
    I.click("Go");
    I.wait(5);
    I.selectOption("Case has been printed and entered into ProbateMan","Yes");
    I.click("Continue");
    I.wait(4);
    I.click("Submit");
    I.wait(4);
    I.see("Awaiting documentation");
    //End State : Awaiting documentation

};

