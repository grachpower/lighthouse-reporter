import { timer } from "rxjs";
import { mapTo } from "rxjs/operators";
import * as lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher'; 

import { TelegaApi } from "./telegram-api/telegram-api";
import { RootObject } from './page-data.interface';

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

if (!botToken) {
    throw new Error('Bot token is not defined');
}

if (!chatId) {
    throw new Error('Chat id is not defined');
}

const telegaApi = new TelegaApi(chatId, botToken);

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
    // pages
];

function reportPage(url): Promise<string> {
    return launchChromeAndRunLighthouse(url, opts)
        .then((results: RootObject) => {
            const text = `
Page: \`${results.requestedUrl}\`
- performance: ${Math.round(results.categories.performance.score * 100)}%
- pwa: ${Math.round(results.categories.pwa.score * 100)}%
- accessibility: ${Math.round(results.categories.accessibility.score * 100)}%
- seo: ${Math.round(results.categories.seo.score * 100)}%
- best-practice: ${Math.round(results.categories['best-practices'].score * 100)}%
            `;

            return text;
        });
}

function sendReport(reportText: string): void {
    telegaApi.sendMessageToChat(reportText)
        .subscribe(() => console.log('report was sent'));
}

function createReports(urls: string[], index: number = 0, reports: string[] = []): Promise<string> {
    if (!urls.length) {
        return;
    }

    if (urls.length === index) {
        return Promise.resolve(reports.join(`\r\n`));
    }

    return reportPage(urls[index])
        .then((report: string) => {
            return createReports(urls, index + 1, [...reports, report]);
        })
}

timer(0, 60e3 * 60 * 12)
    .pipe(
        mapTo(urls),
    )
    .subscribe((urls: string[]) => {
        createReports(urls)
            .then((report: string) => sendReport(report));
    });
