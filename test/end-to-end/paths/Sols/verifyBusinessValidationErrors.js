Feature('Probate Sols E2E ErrorScenarioTests');

Scenario("Verify Business Validations Scenario", function*(I) {
    I.loginAndSelectCreateCase();
    I.createApplication();
    I.fillDeceasedDetailsWithErrors();
    I.fillWillDetails();
    I.fillDeceasedEstateDetailsWithErrors();
    I.fillExecutorDetailsWithErrors();
    I.fillAdditionalInformation();
    I.see("Date of death cannot be before date of birth");
    I.see("Net IHT value cannot be greater than the Gross value");
    I.see("The executor postcode cannot be empty");
    I.see("The executor address line 1 cannot be empty");
    I.see("The deceased postcode cannot be empty");
    I.see("The deceased address line 1 cannot be empty");
});