Feature('Probate Sols E2E VerifyHardStop');

Scenario("Verify No Will Hard Stop Scenario", function*(I) {
    I.loginAndSelectCreateCase();
    I.createApplication();
    I.fillDeceasedDetails();
    I.fillWillDetailsWithHardStop();
    I.fillDeceasedEstateDetails();
    I.fillExecutorsDetails();
    I.fillAdditionalInformation();
    I.see("You can't currently use this service if the person who died did not leave a will");
});