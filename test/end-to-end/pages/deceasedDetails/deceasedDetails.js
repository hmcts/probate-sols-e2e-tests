const helper = require('test/end-to-end/helpers/Utils.js');
module.exports = function () {
    const I = this;
    I.wait(3);
    var FirstName = "TestFirstName"+helper.getRandomNumber(1,1000000);
    helper.setValue(FirstName);
    I.fillField("First name(s)",FirstName);
    I.fillField("Last name(s)", "TestLastName");
    I.fillField("deceasedDateOfDeath-day", "09");
    I.fillField("deceasedDateOfDeath-month", "09");
    I.fillField("deceasedDateOfDeath-year", "2010");
    I.fillField("deceasedDateOfBirth-day", "09");
    I.fillField("deceasedDateOfBirth-month", "09");
    I.fillField("deceasedDateOfBirth-year", "2000");
    I.click("Continue");
};