module.exports = function () {
    const I = this;

    I.fillField("First name(s)", "TestFirstName");
    I.fillField("Last name(s)", "TestLastName");
    I.fillField("deceasedDateOfDeath-day", "09");
    I.fillField("deceasedDateOfDeath-month", "09");
    I.fillField("deceasedDateOfDeath-year", "2001");
    I.fillField("deceasedDateOfBirth-day", "09");
    I.fillField("deceasedDateOfBirth-month", "09");
    I.fillField("deceasedDateOfBirth-year", "2010");
    I.click("Continue");
    //I.wait(2);

};