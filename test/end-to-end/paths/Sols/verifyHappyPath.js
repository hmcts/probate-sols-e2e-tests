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
     I.reviewLegalStatement();
     I.signStatementOfTruth();
     I.fillFeeInformationAndSubmitApplication();
     I.see("Complete application");
});

Scenario("Verify CaseWorker print details", function*(I) {
    I.loginAsCaseWorker();
    I.markAsCasePrinted();
});
