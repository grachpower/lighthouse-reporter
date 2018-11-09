import {timer} from "rxjs";
import {mapTo} from "rxjs/operators";
import * as lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

import {RootObject} from './page-data.interface';

function launchChromeAndRunLighthouse(url, opts, config = null): Promise<RootObject> {
    return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
        opts.port = chrome.port;
        return lighthouse(url, opts, config)
            .then(results => {
                // use results.lhr for the JS-consumeable output
                // https://github.com/GoogleChrome/lighthouse/blob/master/typings/lhr.d.ts
                // use results.report for the HTML/JSON/CSV output as a string
                // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
                return chrome.kill().then(() => results.lhr)
            });
    });
}

const opts = {
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox'],
};

const urls = [
    'https://www.clouty.ru/',
    'https://www.clouty.ru/trends',
    'https://www.clouty.ru/shop/women',
    'https://www.clouty.ru/product-collections',
    'https://www.clouty.ru/sales',
    'https://www.clouty.ru/looks',
    'https://www.clouty.ru/partners',
    'https://www.clouty.ru/community',
];

function reportPage(url): Promise<Object> {
    return launchChromeAndRunLighthouse(url, opts)
        .then((results: RootObject) => {
            const result = {
                page: results.requestedUrl,
                performance: Math.round(results.categories.performance.score * 100),
                pwa: Math.round(results.categories.pwa.score * 100),
                accessibility: Math.round(results.categories.accessibility.score * 100),
                seo: Math.round(results.categories.seo.score * 100),
                bestPractice: Math.round(results.categories['best-practices'].score * 100),
                firstContentfulPaint: Math.round(results.audits['first-contentful-paint'].score * 100),
                timeToFirstByte: Math.round(results.audits['time-to-first-byte'].score * 100),
                firstMeaningfulPaint: Math.round(results.audits['first-meaningful-paint'].score * 100),
            };

            return result;
        });
}

function sendReport(pagesReports: []): void {
    const log = {
        logSource: 'lighthouse-report',
        pages: pagesReports
    };

    console.log(JSON.stringify(log));
}

function createReports(urls: string[], index: number = 0, reports: [] = []): Promise<[]> {
    if (!urls.length) {
        return;
    }

    if (urls.length === index) {
        return Promise.resolve(reports);
    }

    return reportPage(urls[index])
        .then((report) => {
            return createReports(urls, index + 1, [...reports, report] as any);
        })
}

timer(0, 60e3 * 60) // 60 minutes
    .pipe(
        mapTo(urls),
    )
    .subscribe((urls: string[]) => {
        createReports(urls)
            .then((pageReports: []) => sendReport(pageReports));
    });
