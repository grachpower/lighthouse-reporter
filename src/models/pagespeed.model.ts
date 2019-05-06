export interface PagespeedRootObject {
    pagespeedData: PagespeedData;
}

export interface PagespeedData {
    captchaResult: string;
    kind: string;
    id: string;
    loadingExperience: LoadingExperience;
    originLoadingExperience: LoadingExperience;
    lighthouseResult: LighthouseResult;
    analysisUTCTimestamp: string;
}

export interface LighthouseResult {
    requestedUrl: string;
    finalUrl: string;
    lighthouseVersion: string;
    userAgent: string;
    fetchTime: string;
    environment: Environment;
    runWarnings: any[];
    configSettings: ConfigSettings;
    audits: Audits;
    categories: Categories;
    categoryGroups: CategoryGroups;
    i18n: I18n;
}

export interface I18n {
    rendererFormattedStrings: RendererFormattedStrings;
}

export interface RendererFormattedStrings {
    varianceDisclaimer: string;
    opportunityResourceColumnLabel: string;
    opportunitySavingsColumnLabel: string;
    errorMissingAuditInfo: string;
    errorLabel: string;
    warningHeader: string;
    auditGroupExpandTooltip: string;
    passedAuditsGroupTitle: string;
    notApplicableAuditsGroupTitle: string;
    manualAuditsGroupTitle: string;
    toplevelWarningsMessage: string;
    scorescaleLabel: string;
    crcLongestDurationLabel: string;
    crcInitialNavigation: string;
    lsPerformanceCategoryDescription: string;
    labDataTitle: string;
}

export interface CategoryGroups {
    'a11y-element-names': A11yelementnames;
    'a11y-language': A11yelementnames;
}

export interface A11yelementnames {
    title: string;
    description: string;
}

export interface Categories {
    performance: Performance;
}

export interface Performance {
    id: string;
    title: string;
    score: number;
    auditRefs: AuditRef[];
}

export interface AuditRef {
    id: string;
    weight: number;
    group: string;
}

export interface Audits {
    'estimated-input-latency': Estimatedinputlatency;
    'uses-rel-preconnect': Usesrelpreconnect;
}

export interface Usesrelpreconnect {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    details: Details;
}

export interface Details {
    headings: any[];
    type: string;
    items: any[];
    overallSavingsMs: number;
}

export interface Estimatedinputlatency {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    displayValue: string;
}

export interface ConfigSettings {
    emulatedFormFactor: string;
    locale: string;
    onlyCategories: string[];
}

export interface Environment {
    networkUserAgent: string;
    hostUserAgent: string;
    benchmarkIndex: number;
}

export interface LoadingExperience {
    id: string;
    metrics: Metrics;
    overall_category: string;
    initial_url: string;
}

export interface Metrics {
    FIRST_CONTENTFUL_PAINT_MS: FIRSTCONTENTFULPAINTMS;
    FIRST_INPUT_DELAY_MS: FIRSTCONTENTFULPAINTMS;
}

export interface FIRSTCONTENTFULPAINTMS {
    percentile: number;
    distributions: Distribution[];
    category: string;
}

export interface Distribution {
    min: number;
    max?: number;
    proportion: number;
}