const randomstring = require("randomstring");
const request = require('request');
const testConfig = require("test/config.js");


class TestConfigurator {

    constructor(scenarioName) {
        // this.testBaseUrl = testConfig.TestIdamBaseUrl;
        // this.useIdam = testConfig.TestUseIdam;
        // this.setTestCitizenName();
        // this.testCitizenDomain = testConfig.TestCitizenDomain;
        // this.testCitizenPassword = randomstring.generate(9);
        // this.testAddUserUrl = testConfig.TestIdamAddUserUrl;
        // this.testDeleteUserUrl = this.testAddUserUrl + '/';
        // this.role = testConfig.TestIdamRole;
        // this.scenarioName = scenarioName;
        // this.paymentEnvironments = testConfig.paymentEnvironments;
        this.TestFrontendUrl = testConfig.TestFrontendUrl;
    }

    // getBefore() {
    //     if (this.useIdam === "true") {
    //         this.setEnvVars();
    //
    //         const userDetails =
    //             {
    //                 "email": this.getTestCitizenEmail(),
    //                 "forename": this.getTestCitizenName(),
    //                 "surname": this.getTestCitizenName(),
    //                 "user_group_name": this.getTestRole(),
    //                 "password": this.getTestCitizenPassword()
    //             };
    //
    //         request({
    //                 url: this.getTestAddUserURL(),
    //                 method: "POST",
    //                 json: true,   // <--Very important!!!
    //                 body: userDetails
    //             }
    //         );
    //     }
    // }
    //
    // getAfter() {
    //     if (this.useIdam === "true") {
    //         request({
    //
    //                 url: this.getTestDeleteUserURL() + process.env.testCitizenEmail,
    //                 method: "DELETE"
    //             }
    //         );
    //
    //         this.resetEnvVars()
    //     }
    // }
    //
    //
    //
    // getScenarioName() {
    //     return (this.useIdam === "true") ? this.scenarioName + " - With Idam" : this.scenarioName + " - Without Idam";
    // }



}

module.exports = TestConfigurator;
