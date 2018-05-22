const helper = require('test/end-to-end/helpers/Utils.js');
module.exports = function () {
    const I = this;
    //I.click("//a[contains(@href,'/case/PROBATE/GrantOfRepresentation/')]");
    I.wait(5);
    I.click("Search");
    I.wait(5);
    I.selectOption("Application type","Solicitor");
    I.selectOption("Registry location","Birmingham");
    I.fillField("//input[@id='deceasedForenames']",helper.getValue());
    I.wait(3);
    I.click("Apply");
    I.wait(5);
    I.click("//a[contains(@href,'/case/PROBATE/GrantOfRepresentation/')]");
    I.wait(5);
    I.click("Go");
    I.wait(5);
    I.selectOption("Case has been printed and entered into ProbateMan","Yes");
    I.click("Continue");
    I.click("Submit");

};

