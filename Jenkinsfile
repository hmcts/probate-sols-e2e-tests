#!groovy
@Library('Reform')
import uk.gov.hmcts.Ansible
import uk.gov.hmcts.Packager
import uk.gov.hmcts.Versioner

def triggers = []
if (env.BRANCH_NAME == "master") {
    triggers << cron('H H(0-1) * * *') //build to trigger sometime between midnight and 2am every day
}

properties(
        [
                [$class: 'GithubProjectProperty', projectUrlStr: 'https://github.com/hmcts/probate-sols-e2e-tests.git'],
                pipelineTriggers(triggers),
                parameters([
                        string(description: 'CCD_URL', defaultValue: 'https://www-ccd.nonprod.platform.hmcts.net', name: 'TEST_E2E_URL'),
                        string(description: 'CCD_Sols_Username', defaultValue: 'probatesolicitorpreprod@gmail.com', name: 'TEST_SOLS_USER_NAME'),
                        string(description: 'CCD_Sols_Password', defaultValue: 'Monday01', name: 'TEST_SOLS_PASSWORD'),
                        string(description: 'CCD_CW_Username', defaultValue: 'probatecaseworker@gmail.com', name: 'TEST_CASEWORKER_USER_NAME'),
                        string(description: 'CCD_CW_Password', defaultValue: 'Monday01', name: 'TEST_CASEWORKER_PASSWORD')
                ])
        ]
)

node {
   ws('workspace/probate-sols-e2e-test') {
    stage('Checkout') {
               deleteDir()
               checkout scm
    }

    stage('End to end test') {
     env.TEST_E2E_FRONTEND_URL = params.TEST_E2E_URL
     env.TEST_USER_NAME = params.TEST_SOLS_USER_NAME
     env.TEST_PASSWORD = params.TEST_SOLS_PASSWORD
     env.TEST_USER_NAME = params.TEST_CASEWORKER_USER_NAME
     env.TEST_PASSWORD = params.TEST_CASEWORKER_PASSWORD



          try {
                   sh 'yarn install'
                   wrap([$class: 'Xvfb']) {
                       sh "printenv"
                       sh 'yarn run test-e2e'

                   }
           } catch (Exception err) {
               currentBuild.result = 'UNSTABLE'
               echo "RESULT: ${currentBuild.result}"
           } finally {
                sh 'ls -lart'
                sh 'ls -lrt ./output'
               archiveArtifacts  'output/mochawesome.html'

           }

    }

    stage('After run') {
        echo "finished"
    }

   }
   deleteDir()
}
