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
        return lighthouse(url, opts, config).then(results => {
            // use results.lhr for the JS-consumeable output
            // https://github.com/GoogleChrome/lighthouse/blob/master/typings/lhr.d.ts
            // use results.report for the HTML/JSON/CSV output as a string
            // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
            return chrome.kill().then(() => results.lhr)
        });
    });
}

const opts = {
    chromeFlags: ['--show-paint-rects', '--headless', '--disable-gpu'],
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

function reportPage(url): Promise<string> {
    return launchChromeAndRunLighthouse(url, opts)
        .then((results: RootObject) => {
            const text = `
                Page: ${results.requestedUrl}
                - performance: ${results.categories.performance.score * 100}%
                - pwa: ${results.categories.pwa.score * 100}%
                - accessibility: ${results.categories.accessibility.score * 100}%
                - seo: ${results.categories.seo.score * 100}%
                - best-practice: ${results.categories['best-practices'].score * 100}%
            `;

            return text;
        });
}

function sendReport(reportText: string): void {
    telegaApi.sendMessageToChat(reportText)
        .subscribe(() => console.log('report was sent'));
}

timer(0, 60e3 * 60 * 12)
    .pipe(
        mapTo(urls),
    )
    .subscribe((urls: string[]) => urls.forEach((url: string) => {
        reportPage(url)
            .then((report: string) => sendReport(report));
        }));
