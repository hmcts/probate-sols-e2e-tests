const testConfig = require("test/config.js");

exports.config = {
    'tests': './paths/**/*.js',
    'output': './output',
    'helpers': {
        'Puppeteer': {
            'url': testConfig.TestFrontendUrl || 'https://www-ccd.nonprod.platform.hmcts.net/',
           // 'waitForTimeout': 5000,
           // 'waitForAction': 500,
            'show': false,
            ignoreHTTPSErrors:true,
            'headless':true,
            //'HTTP_PROXY': 'proxyout.reform.hmcts.net:8080',
            chrome: {
                ignoreHTTPSErrors: true,
               // headless: true,
                args: [
                    '--no-sandbox',
                    '--proxy-server=proxyout.reform.hmcts.net:8080'
                    //`--proxy-bypass-list=${process.env.E2E_PROXY_BYPASS}`
                ]
            }
            // 'switches': {
            //     'proxy-server': 'proxyout.reform.hmcts.net:8080',
            //     'ignore-certificate-errors': true
            // }

            // "proxy": {
            //     "proxyType": "manual",
            //     //"proxyAutoconfigUrl": "http://proxyout.reform.hmcts.net:8080",
            //     "httpProxy": "proxyout.reform.hmcts.net:8080",
            //     "noProxy": "127.0.0.1,localhost"
            // }
        }
    },
    'include': {
        'I': './pages/steps.js'
    },
    'mocha': {
        'reporterOptions': {
            'reportDir': process.env.E2E_OUTPUT_DIR || './output',
            'reportName' : 'index',
            'inlineAssets': true
        }
    },
    'name': 'Codecept Tests'
};

