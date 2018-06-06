const helper = require('test/end-to-end/helpers/Utils.js');
module.exports = function () {
    const I = this;
    I.wait(6);
    I.click("Search");
    I.wait(8);
    I.selectOption("Application type","Solicitor");
    I.selectOption("Registry location","Birmingham");
    I.fillField("//input[@id='deceasedForenames']",helper.getValue());
    I.click("Apply");
    I.wait(5);
    I.click("//a[contains(@href,'/case/PROBATE/GrantOfRepresentation/')]");
    I.wait(6);
    I.click("Go");
    I.wait(4);
    I.selectOption("Case has been printed and entered into ProbateMan","Yes");
    I.click("Continue");
    I.wait(4);
    I.click("Submit");
    I.wait(4);
    I.see("Mark the case as printed");
    I.dontSee("Go");
    I.wait(6);
};

