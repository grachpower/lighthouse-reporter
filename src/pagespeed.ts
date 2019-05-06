import { from, Observable, throwError } from 'rxjs';
import { catchError, concatAll } from "rxjs/operators";

import { PagespeedData } from './models/pagespeed.model';
import { Http } from './request/request';

const apiKey = 'AIzaSyDF_UIy1E5V6QLptYQPgPWPyRlzlMDErHs';

const pages = [
    'https://www.clouty.ru',
    'https://www.clouty.ru/catalog/women',
    'https://www.clouty.ru/shop-trends/women-mini-skirts-atlasnye',
    'https://www.clouty.ru/sales',
    'https://www.clouty.ru/looks',

    'https://justbutik.ru/',
    'https://justbutik.ru/catalog/women',
    'https://justbutik.ru/catalog-sale',
    'https://justbutik.ru/looks',

    'https://lookbuck.com',
    'https://lookbuck.com/verhnya-odezhda',
    'https://lookbuck.com/sale',
    'https://lookbuck.com/looks',

    'https://www.shopstyle.com', //main
    'https://www.shopstyle.com/browse/womens-clothes', //catalog
    'https://www.shopstyle.com/whos-trending', //looks
];

function fetchPagespeedData(pageUrl: string): Observable<PagespeedData> {
    return Http.get<PagespeedData>(generatePagespeedReqUrl(pageUrl))
        .pipe(
            catchError((err) => {
                console.log(err);

                return throwError(err)
            }),
        )
}

function generatePagespeedReqUrl(pageUrl: string): string {
    return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?key=${apiKey}&url=${pageUrl}`
}

function getParsedString(str: string): string {
    return encodeURIComponent(str).replace('%C2%A0', ' ');
}

function reportPagespeed(pagespeedData: PagespeedData): void {
    const lighthouse = pagespeedData.lighthouseResult;
    const lighthouseMetrics = {
        firstContentfulPaint: getParsedString(lighthouse.audits['first-contentful-paint'].displayValue),
        speedIndex: getParsedString(lighthouse.audits['speed-index'].displayValue),
        timeToInteractive: getParsedString(lighthouse.audits['interactive'].displayValue),
        timeToFirstByte: getParsedString(lighthouse.audits['time-to-first-byte'].displayValue.split(' ')[3]),
        firstMeaningfulPaint: getParsedString(lighthouse.audits['first-meaningful-paint'].displayValue),
        firstCPUIdle: getParsedString(lighthouse.audits['first-cpu-idle'].displayValue),
        estimatedInputLatency: getParsedString(lighthouse.audits['estimated-input-latency'].displayValue),
        speedIndexScore: getParsedString(lighthouse.audits['speed-index'].score),
    };
    const data = {
        url: pagespeedData.lighthouseResult.finalUrl,
        ...lighthouseMetrics,
        logSource: 'pagespeed-report',

        // loadingExperience: pagespeedData.loadingExperience,
        // categories: pagespeedData.lighthouseResult.categories,
        // audits: pagespeedData.lighthouseResult.audits,
    };

    console.log(JSON.stringify(data));
}


function initApp(): void {
    const pageList = [...pages].slice(0, 1);

    const requestStreams: Observable<PagespeedData>[] = pageList.map((page: string) => fetchPagespeedData(page));

    from(requestStreams)
        .pipe(
            concatAll(),
        )
        .subscribe((res: PagespeedData) => {
            reportPagespeed(res)
        });

    setInterval(() => {
        from(requestStreams)
            .pipe(
                concatAll(),
            )
            .subscribe((res: PagespeedData) => {
                reportPagespeed(res)
            });
    }, 1000 * 60 * 60); // every 1 hour
}

initApp();