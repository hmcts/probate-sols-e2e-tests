'use strict';
const requireDirectory = require('require-directory'),
    steps = requireDirectory(module);
module.exports = function () {

    return actor({

        loginAndSelectCreateCase: steps.signIn.signIn,
        createApplication: steps.createApplication.createApplication,
        fillDeceasedDetails: steps.deceasedDetails.deceasedDetails,
        fillWillDetails: steps.willDetails.willDetails,
        fillDeceasedEstateDetails: steps.deceasedDetails.deceasedEstateDetails,
        fillExecutorsDetails: steps.executorsDetails.executorsDetails,
        fillAdditionalInformation: steps.additionalInformation.additionalInformation,
        reviewLegalStatement: steps.reviewLegalStatement.reviewLegalStatement,
        signStatementOfTruth: steps.signStatementOfTruth.signStatementOfTruth,
        fillFeeInformationAndSubmitApplication: steps.feeInformation.feeInformation,
        fillDeceasedDetailsWithErrors: steps.deceasedDetails.deceasedDetailsWithBusinessErrors,
        fillDeceasedEstateDetailsWithErrors: steps.deceasedDetails.deceasedEstateDetailsWithBusinessErrors,
        fillExecutorDetailsWithErrors: steps.executorsDetails.executorsDetailsWithBusinessErrors,
        fillWillDetailsWithHardStop: steps.willDetails.willDetailsWithHardStop,
        loginAsCaseWorker: steps.signIn.signInCaseWorker,
        markAsCasePrinted: steps.casePrinted.casePrinted,
        grantIssue: steps.grantDetails.issueAGrant
    });
};
