Feature('Probate Sols E2E HappyPathTests');
const testConfig = require("test/config.js");

Scenario("Verify Happy path Scenario", function*(I) {
     I.wait(7);
     I.loginAndSelectCreateCase();
     I.createApplication();
     I.fillDeceasedDetails();
     I.fillWillDetails();
     I.fillDeceasedEstateDetails();
     I.fillExecutorsDetails();
     I.fillAdditionalInformation();
     I.click("Go");
     I.wait(4);
     I.reviewLegalStatement();
     I.signStatementOfTruth();
     I.fillFeeInformationAndSubmitApplication();
     I.wait(4);
     I.see("Complete application");
});

Scenario("Verify CaseWorker Happpath Scenario", function*(I) {
    I.wait(7);
    I.loginAsCaseWorker();
    I.markAsCasePrinted();
});