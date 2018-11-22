module.exports = {
    TestFrontendUrl: process.env.TEST_E2E_URL || 'https://www-ccd.nonprod.platform.hmcts.net/',
    TestSolicitorUserName: process.env.TEST_SOLS_USER_NAME || 'probatesolicitorpreprod@gmail.com',
    TestSolicitorPassword: process.env.TEST_SOLS_PASSWORD || 'Monday01',
    TestCaseWorkerUserName: process.env.TEST_CASEWORKER_USER_NAME || 'probatebackoffice@gmail.com',
    TestCaseWorkerPassword: process.env.TEST_CASEWORKER_PASSWORD || 'Monday01',
    links: {
        cookies: "https://www.gov.uk/help/cookies",
        terms: "/terms-conditions",
        survey: "http://www.smartsurvey.co.uk/s/CFZF7/",
        surveyEndOfApplication: "http://www.smartsurvey.co.uk/s/A2LY8/"
    },


};
