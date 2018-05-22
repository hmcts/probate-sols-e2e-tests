Feature('Probate Sols E2E HappyPathTests');
const testConfig = require("test/config.js");

Scenario("Verify Happy path Scenario", function*(I) {
    I.loginAndSelectCreateCase();
    I.createApplication();
    I.fillDeceasedDetails();
    I.fillWillDetails();
    I.fillDeceasedEstateDetails();
    I.fillExecutorsDetails();
    I.fillAdditionalInformation();
    I.click("Go");
    I.wait(15);
    //I.click("Continue");
    //I.wait(2);
    I.reviewLegalStatement();
    I.signStatementOfTruth();
    I.fillFeeInformationAndSubmitApplication();
});


Scenario("Verify CaseWorker Happpath Scenario", function*(I) {
    I.loginAsCaseWorker();
    I.markAsCasePrinted();
});