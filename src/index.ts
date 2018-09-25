import { TelegaApi } from "./telegram-api/telegram-api";
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

const botToken = process.env.BOT_TOKEN || '677568548:AAGeMPyjKQoR7b2rNWW89tXMecUD7CNlMDg';
const chatId = process.env.CHAT_ID || '160294069';

if (!botToken) {
    throw new Error('Bot token is not defined');
}

if (!chatId) {
    throw new Error('Chat id is not defined');
}

const telegaApi = new TelegaApi(chatId, botToken);


function launchChromeAndRunLighthouse(url, opts, config = null) {
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
    chromeFlags: ['--show-paint-rects'],
    output: 'html',

};

const url = 'https://www.clouty.ru';
// Usage:
launchChromeAndRunLighthouse(url, opts).then(results => {
    // Use results!
    // console.log(results);
    const filename = url
        .replace(/\//gi, '')
        .replace(/\:/gi, '')
        .replace(/\./gi, '');

    fs.writeFile(path.join(__dirname, `../reports/${filename}.html`), JSON.stringify(results), 'utf8', (err) => {
        if (err) {
            console.log('An error accured: ', err);
        }
        console.log('file ready');

        fs.readFile(path.join(__dirname, `../reports/${filename}.html`), (err, data) => {
            if (err) {
                console.log('An error accured: ', err);
            }

            telegaApi.sendFielToChat(data)
                .subscribe(() => console.log('message sent'));
        });
    });
});