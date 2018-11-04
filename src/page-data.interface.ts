export interface Environment {
    networkUserAgent: string;
    hostUserAgent: string;
    benchmarkIndex: number;
}

export interface Details {
    type: string;
    headings: any[];
    items: any[];
}

export interface IsOnHttps {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: string;
    details: Details;
}

export interface RedirectsHttp {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface ServiceWorker {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface WorksOffline {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    warnings: any[];
}

export interface Viewport {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    warnings: any[];
}

export interface WithoutJavascript {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    explanation: string;
}

export interface FirstContentfulPaint {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
}

export interface FirstMeaningfulPaint {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
}

export interface LoadFastEnoughForPwa {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: any[];
    explanation: string;
}

export interface SpeedIndex {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
}

export interface Item {
    timing: number;
    timestamp: any;
    data: string;
}

export interface Details2 {
    type: string;
    scale: number;
    items: Item[];
}

export interface ScreenshotThumbnails {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details2;
}

export interface Details3 {
    type: string;
    timestamp: number;
    data: string;
}

export interface FinalScreenshot {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details3;
}

export interface EstimatedInputLatency {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
}

export interface Details4 {
    type: string;
    headings: any[];
    items: any[];
}

export interface ErrorsInConsole {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    details: Details4;
}

export interface Details5 {
    type: string;
    overallSavingsMs: number;
    headings: any[];
    items: any[];
}

export interface TimeToFirstByte {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details5;
}

export interface FirstCpuIdle {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
}

export interface Interactive {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
}

export interface Heading {
    key: string;
    itemType: string;
    text: string;
    granularity?: number;
}

export interface Item2 {
    name: string;
    startTime: number;
    duration: number;
    timingType: string;
}

export interface Details6 {
    type: string;
    headings: Heading[];
    items: Item2[];
}

export interface UserTimings {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: string;
    details: Details6;
}

export interface Request {
    url: string;
    startTime: number;
    endTime: number;
    responseReceivedTime: number;
    transferSize: number;
}

export interface LongestChain {
    duration: number;
    length: number;
    transferSize: number;
}

export interface CriticalRequestChains {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: string;
    details: Details;
}

export interface Details8 {
    type: string;
    headings: any[];
    items: any[];
    overallSavingsMs: number;
}

export interface Redirects {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details8;
}

export interface Item3 {
    failures: any[];
    isParseFailure: boolean;
    hasStartUrl: boolean;
    hasIconsAtLeast192px: boolean;
    hasIconsAtLeast512px: boolean;
    hasPWADisplayValue: boolean;
    hasBackgroundColor: boolean;
    hasThemeColor: boolean;
    hasShortName: boolean;
    shortNameLength: boolean;
    hasName: boolean;
}

export interface Details9 {
    items: Item3[];
}

export interface WebappInstallBanner {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    warnings: any[];
    details: Details9;
}

export interface Item4 {
    failures: any[];
    isParseFailure: boolean;
    hasStartUrl: boolean;
    hasIconsAtLeast192px: boolean;
    hasIconsAtLeast512px: boolean;
    hasPWADisplayValue: boolean;
    hasBackgroundColor: boolean;
    hasThemeColor: boolean;
    hasShortName: boolean;
    shortNameLength: boolean;
    hasName: boolean;
}

export interface Details10 {
    items: Item4[];
}

export interface SplashScreen {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details10;
}

export interface Item5 {
    failures: any[];
    themeColor: string;
    isParseFailure: boolean;
    hasStartUrl: boolean;
    hasIconsAtLeast192px: boolean;
    hasIconsAtLeast512px: boolean;
    hasPWADisplayValue: boolean;
    hasBackgroundColor: boolean;
    hasThemeColor: boolean;
    hasShortName: boolean;
    shortNameLength: boolean;
    hasName: boolean;
}

export interface Details11 {
    items: Item5[];
}

export interface ThemedOmnibox {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details11;
}

export interface ManifestShortNameLength {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface ContentWidth {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    explanation: string;
}

export interface Details12 {
    type: string;
    headings: any[];
    items: any[];
}

export interface ImageAspectRatio {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    warnings: any[];
    details: Details12;
}

export interface Details13 {
    type: string;
    headings: any[];
    items: any[];
}

export interface Deprecations {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: string;
    details: Details13;
}

export interface Heading2 {
    key: string;
    itemType: string;
    text: string;
    granularity?: number;
}

export interface Item6 {
    group: string;
    groupLabel: string;
    duration: number;
}

export interface Details14 {
    type: string;
    headings: Heading2[];
    items: Item6[];
}

export interface MainthreadWorkBreakdown {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details14;
}

export interface Heading3 {
    key: string;
    itemType: string;
    text: string;
    granularity?: number;
}

export interface Item7 {
    url: string;
    total: number;
    scripting: number;
    scriptParseCompile: number;
}

export interface Summary {
    wastedMs: number;
}

export interface Details15 {
    type: string;
    headings: Heading3[];
    items: Item7[];
    summary: Summary;
}

export interface BootupTime {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details15;
}

export interface Details16 {
    type: string;
    headings: any[];
    items: any[];
    overallSavingsMs: number;
}

export interface UsesRelPreload {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details16;
}

export interface Heading4 {
    key: string;
    valueType: string;
    label: string;
}

export interface Item8 {
    url: string;
    wastedMs: number;
}

export interface Details17 {
    type: string;
    headings: Heading4[];
    items: Item8[];
    overallSavingsMs: number;
}

export interface UsesRelPreconnect {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details17;
}

export interface Heading5 {
    key: string;
    itemType: string;
    text: string;
}

export interface Item9 {
    url: string;
    wastedMs: number;
}

export interface Details18 {
    type: string;
    headings: Heading5[];
    items: Item9[];
}

export interface FontDisplay {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details18;
}

export interface Heading6 {
    key: string;
    itemType: string;
    text: string;
    granularity?: number;
    displayUnit: string;
}

export interface Item10 {
    url: string;
    startTime: number;
    endTime: number;
    transferSize: number;
    statusCode: number;
    mimeType: string;
    resourceType: string;
}

export interface Details19 {
    type: string;
    headings: Heading6[];
    items: Item10[];
}

export interface NetworkRequests {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: number;
    details: Details19;
}

export interface Item11 {
    firstContentfulPaint: number;
    firstMeaningfulPaint: number;
    firstCPUIdle: number;
    interactive: number;
    speedIndex: number;
    estimatedInputLatency: number;
    observedNavigationStart: number;
    observedNavigationStartTs: number;
    observedFirstPaint: number;
    observedFirstPaintTs: number;
    observedFirstContentfulPaint: number;
    observedFirstContentfulPaintTs: number;
    observedFirstMeaningfulPaint: number;
    observedFirstMeaningfulPaintTs: number;
    observedTraceEnd: number;
    observedTraceEndTs: number;
    observedLoad: number;
    observedLoadTs: number;
    observedDomContentLoaded: number;
    observedDomContentLoadedTs: number;
    observedFirstVisualChange: number;
    observedFirstVisualChangeTs: number;
    observedLastVisualChange: number;
    observedLastVisualChangeTs: number;
    observedSpeedIndex: number;
    observedSpeedIndexTs: number;
}

export interface Details20 {
    items: Item11[];
}

export interface Metrics {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: number;
    details: Details20;
}

export interface PwaCrossBrowser {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface PwaPageTransitions {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface PwaEachPageHasUrl {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Accesskeys {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface AriaAllowedAttr {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Details21 {
    type: string;
    headings: any[];
    items: any[];
}

export interface AriaRequiredAttr {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details21;
}

export interface Details22 {
    type: string;
    headings: any[];
    items: any[];
}

export interface AriaRequiredChildren {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details22;
}

export interface Details23 {
    type: string;
    headings: any[];
    items: any[];
}

export interface AriaRequiredParent {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details23;
}

export interface Details24 {
    type: string;
    headings: any[];
    items: any[];
}

export interface AriaRoles {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details24;
}

export interface AriaValidAttrValue {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface AriaValidAttr {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface AudioCaption {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Heading7 {
    key: string;
    itemType: string;
    text: string;
}

export interface Node {
    type: string;
    selector: string;
    path: string;
    snippet: string;
    explanation: string;
}

export interface Item12 {
    node: Node;
}

export interface Details25 {
    type: string;
    headings: Heading7[];
    items: Item12[];
    impact: string;
    tags: string[];
}

export interface ButtonName {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details25;
}

export interface Details26 {
    type: string;
    headings: any[];
    items: any[];
}

export interface Bypass {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details26;
}

export interface Heading8 {
    key: string;
    itemType: string;
    text: string;
}

export interface Node2 {
    type: string;
    selector: string;
    path: string;
    snippet: string;
    explanation: string;
}

export interface Item13 {
    node: Node2;
}

export interface Details27 {
    type: string;
    headings: Heading8[];
    items: Item13[];
    impact: string;
    tags: string[];
}

export interface ColorContrast {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details27;
}

export interface DefinitionList {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Dlitem {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Details28 {
    type: string;
    headings: any[];
    items: any[];
}

export interface DocumentTitle {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details28;
}

export interface Details29 {
    type: string;
    headings: any[];
    items: any[];
}

export interface DuplicateId {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details29;
}

export interface FrameTitle {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Details30 {
    type: string;
    headings: any[];
    items: any[];
}

export interface HtmlHasLang {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details30;
}

export interface Details31 {
    type: string;
    headings: any[];
    items: any[];
}

export interface HtmlLangValid {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details31;
}

export interface Heading9 {
    key: string;
    itemType: string;
    text: string;
}

export interface Node3 {
    type: string;
    selector: string;
    path: string;
    snippet: string;
    explanation: string;
}

export interface Item14 {
    node: Node3;
}

export interface Details32 {
    type: string;
    headings: Heading9[];
    items: Item14[];
    impact: string;
    tags: string[];
}

export interface ImageAlt {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details32;
}

export interface InputImageAlt {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Heading10 {
    key: string;
    itemType: string;
    text: string;
}

export interface Node4 {
    type: string;
    selector: string;
    path: string;
    snippet: string;
    explanation: string;
}

export interface Item15 {
    node: Node4;
}

export interface Details33 {
    type: string;
    headings: Heading10[];
    items: Item15[];
    impact: string;
    tags: string[];
}

export interface Label {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details33;
}

export interface LayoutTable {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Heading11 {
    key: string;
    itemType: string;
    text: string;
}

export interface Node5 {
    type: string;
    selector: string;
    path: string;
    snippet: string;
    explanation: string;
}

export interface Item16 {
    node: Node5;
}

export interface Details34 {
    type: string;
    headings: Heading11[];
    items: Item16[];
    impact: string;
    tags: string[];
}

export interface LinkName {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details34;
}

export interface Details35 {
    type: string;
    headings: any[];
    items: any[];
}

export interface List {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details35;
}

export interface Details36 {
    type: string;
    headings: any[];
    items: any[];
}

export interface Listitem {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details36;
}

export interface MetaRefresh {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Heading12 {
    key: string;
    itemType: string;
    text: string;
}

export interface Node6 {
    type: string;
    selector: string;
    path: string;
    snippet: string;
    explanation: string;
}

export interface Item17 {
    node: Node6;
}

export interface Details37 {
    type: string;
    headings: Heading12[];
    items: Item17[];
    impact: string;
    tags: string[];
}

export interface MetaViewport {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details37;
}

export interface ObjectAlt {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Tabindex {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface TdHeadersAttr {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface ThHasDataCells {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface ValidLang {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface VideoCaption {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface VideoDescription {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface CustomControlsLabels {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface CustomControlsRoles {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface FocusTraps {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface FocusableControls {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface HeadingLevels {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface InteractiveElementAffordance {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface LogicalTabOrder {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface ManagedFocus {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface OffscreenContentHidden {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface UseLandmarks {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface VisualOrderFollowsDom {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Heading13 {
    key: string;
    itemType: string;
    text: string;
    displayUnit: string;
    granularity?: number;
}

export interface CacheControl {
    private: boolean;
    'max-age': number;
    public?: boolean;
}

export interface Item18 {
    url: string;
    cacheControl: CacheControl;
    cacheLifetimeMs: number;
    cacheHitProbability: number;
    totalBytes: number;
    wastedBytes: number;
}

export interface Summary2 {
    wastedBytes: number;
}

export interface Details38 {
    type: string;
    headings: Heading13[];
    items: Item18[];
    summary: Summary2;
}

export interface UsesLongCacheTtl {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details38;
}

export interface Heading14 {
    key: string;
    itemType: string;
    text: string;
}

export interface Item19 {
    url: string;
    totalBytes: number;
    totalMs: number;
}

export interface Details39 {
    type: string;
    headings: Heading14[];
    items: Item19[];
}

export interface TotalByteWeight {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details39;
}

export interface Heading15 {
    key: string;
    valueType: string;
    label: string;
}

export interface Item20 {
    url: string;
    requestStartTime: number;
    totalBytes: number;
    wastedBytes: number;
    wastedPercent: number;
}

export interface Details40 {
    type: string;
    headings: Heading15[];
    items: Item20[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface OffscreenImages {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    warnings: any[];
    details: Details40;
}

export interface Heading16 {
    key: string;
    valueType: string;
    label: string;
}

export interface Item21 {
    url: string;
    totalBytes: number;
    wastedMs: number;
}

export interface Details41 {
    type: string;
    headings: Heading16[];
    items: Item21[];
    overallSavingsMs: number;
}

export interface RenderBlockingResources {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details41;
}

export interface Details42 {
    type: string;
    headings: any[];
    items: any[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface UnminifiedCss {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details42;
}

export interface Details43 {
    type: string;
    headings: any[];
    items: any[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface UnminifiedJavascript {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    warnings: any[];
    details: Details43;
}

export interface Heading17 {
    key: string;
    valueType: string;
    label: string;
}

export interface Item22 {
    url: string;
    wastedBytes: number;
    wastedPercent: number;
    totalBytes: number;
}

export interface Details44 {
    type: string;
    headings: Heading17[];
    items: Item22[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface UnusedCssRules {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details44;
}

export interface Heading18 {
    key: string;
    valueType: string;
    label: string;
}

export interface Item23 {
    url: string;
    fromProtocol: boolean;
    isCrossOrigin: boolean;
    totalBytes: number;
    wastedBytes: number;
}

export interface Details45 {
    type: string;
    headings: Heading18[];
    items: Item23[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface UsesWebpImages {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    warnings: any[];
    details: Details45;
}

export interface Heading19 {
    key: string;
    valueType: string;
    label: string;
}

export interface Item24 {
    url: string;
    fromProtocol: boolean;
    isCrossOrigin: boolean;
    totalBytes: number;
    wastedBytes: number;
}

export interface Details46 {
    type: string;
    headings: Heading19[];
    items: Item24[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface UsesOptimizedImages {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    warnings: any[];
    details: Details46;
}

export interface Details47 {
    type: string;
    headings: any[];
    items: any[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface UsesTextCompression {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details47;
}

export interface Heading20 {
    key: string;
    valueType: string;
    label: string;
}

export interface Item25 {
    url: string;
    totalBytes: number;
    wastedBytes: number;
    wastedPercent: number;
}

export interface Details48 {
    type: string;
    headings: Heading20[];
    items: Item25[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface UsesResponsiveImages {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    warnings: any[];
    details: Details48;
}

export interface Heading21 {
    key: string;
    valueType: string;
    label: string;
}

export interface Item26 {
    url: string;
    totalBytes: number;
    wastedBytes: number;
}

export interface Details49 {
    type: string;
    headings: Heading21[];
    items: Item26[];
    overallSavingsMs: number;
    overallSavingsBytes: number;
}

export interface EfficientAnimatedContent {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details49;
}

export interface AppcacheManifest {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: string;
}

export interface Doctype {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Heading22 {
    key: string;
    itemType: string;
    text: string;
}

export interface Item27 {
    totalNodes: string;
    depth: any;
    width: any;
}

export interface Details50 {
    type: string;
    headings: Heading22[];
    items: Item27[];
}

export interface DomSize {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: number;
    displayValue: string;
    details: Details50;
}

export interface Details51 {
    type: string;
    headings: any[];
    items: any[];
}

export interface ExternalAnchorsUseRelNoopener {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    warnings: any[];
    details: Details51;
}

export interface Details52 {
    type: string;
    headings: any[];
    items: any[];
}

export interface GeolocationOnStart {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details52;
}

export interface Details53 {
    type: string;
    headings: any[];
    items: any[];
}

export interface NoDocumentWrite {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details53;
}

export interface Heading23 {
    key: string;
    itemType: string;
    text: string;
}

export interface DetectedLib {
    text: string;
    url: string;
    type: string;
}

export interface Item28 {
    highestSeverity: string;
    vulnCount: number;
    detectedLib: DetectedLib;
}

export interface Summary3 {
}

export interface Details54 {
    type: string;
    headings: Heading23[];
    items: Item28[];
    summary: Summary3;
}

export interface NoVulnerableLibraries {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: string;
    details: Details54;
}

export interface NoWebsql {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: string;
}

export interface Details55 {
    type: string;
    headings: any[];
    items: any[];
}

export interface NotificationOnStart {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details55;
}

export interface Details56 {
    type: string;
    headings: any[];
    items: any[];
}

export interface PasswordInputsCanBePastedInto {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details56;
}

export interface Details57 {
    type: string;
    headings: any[];
    items: any[];
}

export interface UsesHttp2 {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: string;
    details: Details57;
}

export interface Heading24 {
    key: string;
    itemType: string;
    text: string;
}

export interface Item29 {
    label: string;
    url: string;
}

export interface Details58 {
    type: string;
    headings: Heading24[];
    items: Item29[];
}

export interface UsesPassiveEventListeners {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details58;
}

export interface MetaDescription {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface HttpStatusCode {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Heading25 {
    key: string;
    itemType: string;
    text: string;
}

export interface Item30 {
    source: string;
    selector: string;
    coverage: string;
    fontSize: string;
}

export interface Details59 {
    type: string;
    headings: Heading25[];
    items: Item30[];
}

export interface FontSize {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    displayValue: any[];
    details: Details59;
}

export interface Summary4 {
}

export interface Details60 {
    type: string;
    headings: any[];
    items: any[];
    summary: Summary4;
}

export interface LinkText {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details60;
}

export interface Details61 {
    type: string;
    headings: any[];
    items: any[];
}

export interface IsCrawlable {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details61;
}

export interface Summary5 {
}

export interface Details62 {
    type: string;
    headings: any[];
    items: any[];
    summary: Summary5;
}

export interface RobotsTxt {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details62;
}

export interface Details63 {
    type: string;
    headings: any[];
    items: any[];
}

export interface Hreflang {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details63;
}

export interface Details64 {
    type: string;
    headings: any[];
    items: any[];
}

export interface Plugins {
    id: string;
    title: string;
    description: string;
    score: number;
    scoreDisplayMode: string;
    rawValue: boolean;
    details: Details64;
}

export interface Canonical {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface MobileFriendly {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface StructuredData {
    id: string;
    title: string;
    description: string;
    score?: any;
    scoreDisplayMode: string;
    rawValue: boolean;
}

export interface Audits {
    'is-on-https': IsOnHttps;
    'redirects-http': RedirectsHttp;
    'service-worker': ServiceWorker;
    'works-offline': WorksOffline;
    'viewport': Viewport;
    'without-javascript': WithoutJavascript;
    'first-contentful-paint': FirstContentfulPaint;
    'first-meaningful-paint': FirstMeaningfulPaint;
    'load-fast-enough-for-pwa': LoadFastEnoughForPwa;
    'speed-index': SpeedIndex;
    'screenshot-thumbnails': ScreenshotThumbnails;
    'final-screenshot': FinalScreenshot;
    'estimated-input-latency': EstimatedInputLatency;
    'errors-in-console': ErrorsInConsole;
    'time-to-first-byte': TimeToFirstByte;
    'first-cpu-idle': FirstCpuIdle;
    interactive: Interactive;
    'user-timings': UserTimings;
    'critical-request-chains': CriticalRequestChains;
    redirects: Redirects;
    'webapp-install-banner': WebappInstallBanner;
    'splash-screen': SplashScreen;
    'themed-omnibox': ThemedOmnibox;
    'manifest-short-name-length': ManifestShortNameLength;
    'content-width': ContentWidth;
    'image-aspect-ratio': ImageAspectRatio;
    deprecations: Deprecations;
    'mainthread-work-breakdown': MainthreadWorkBreakdown;
    'bootup-time': BootupTime;
    'uses-rel-preload': UsesRelPreload;
    'uses-rel-preconnect': UsesRelPreconnect;
    'font-display': FontDisplay;
    'network-requests': NetworkRequests;
    metrics: Metrics;
    'pwa-cross-browser': PwaCrossBrowser;
    'pwa-page-transitions': PwaPageTransitions;
    'pwa-each-page-has-url': PwaEachPageHasUrl;
    accesskeys: Accesskeys;
    'aria-allowed-attr': AriaAllowedAttr;
    'aria-required-attr': AriaRequiredAttr;
    'aria-required-children': AriaRequiredChildren;
    'aria-required-parent': AriaRequiredParent;
    'aria-roles': AriaRoles;
    'aria-valid-attr-value': AriaValidAttrValue;
    'aria-valid-attr': AriaValidAttr;
    'audio-caption': AudioCaption;
    'button-name': ButtonName;
    bypass: Bypass;
    'color-contrast': ColorContrast;
    'definition-list': DefinitionList;
    dlitem: Dlitem;
    'document-title': DocumentTitle;
    'duplicate-id': DuplicateId;
    'frame-title': FrameTitle;
    'html-has-lang': HtmlHasLang;
    'html-lang-valid': HtmlLangValid;
    'image-alt': ImageAlt;
    'input-image-alt': InputImageAlt;
    label: Label;
    'layout-table': LayoutTable;
    'link-name': LinkName;
    list: List;
    listitem: Listitem;
    'meta-refresh': MetaRefresh;
    'meta-viewport': MetaViewport;
    'object-alt': ObjectAlt;
    tabindex: Tabindex;
    'td-headers-attr': TdHeadersAttr;
    'th-has-data-cells': ThHasDataCells;
    'valid-lang': ValidLang;
    'video-caption': VideoCaption;
    'video-description': VideoDescription;
    'custom-controls-labels': CustomControlsLabels;
    'custom-controls-roles': CustomControlsRoles;
    'focus-traps': FocusTraps;
    'focusable-controls': FocusableControls;
    'heading-levels': HeadingLevels;
    'interactive-element-affordance': InteractiveElementAffordance;
    'logical-tab-order': LogicalTabOrder;
    'managed-focus': ManagedFocus;
    'offscreen-content-hidden': OffscreenContentHidden;
    'use-landmarks': UseLandmarks;
    'visual-order-follows-dom': VisualOrderFollowsDom;
    'uses-long-cache-ttl': UsesLongCacheTtl;
    'total-byte-weight': TotalByteWeight;
    'offscreen-images': OffscreenImages;
    'render-blocking-resources': RenderBlockingResources;
    'unminified-css': UnminifiedCss;
    'unminified-javascript': UnminifiedJavascript;
    'unused-css-rules': UnusedCssRules;
    'uses-webp-images': UsesWebpImages;
    'uses-optimized-images': UsesOptimizedImages;
    'uses-text-compression': UsesTextCompression;
    'uses-responsive-images': UsesResponsiveImages;
    'efficient-animated-content': EfficientAnimatedContent;
    'appcache-manifest': AppcacheManifest;
    doctype: Doctype;
    'dom-size': DomSize;
    'external-anchors-use-rel-noopener': ExternalAnchorsUseRelNoopener;
    'geolocation-on-start': GeolocationOnStart;
    'no-document-write': NoDocumentWrite;
    'no-vulnerable-libraries': NoVulnerableLibraries;
    'no-websql': NoWebsql;
    'notification-on-start': NotificationOnStart;
    'password-inputs-can-be-pasted-into': PasswordInputsCanBePastedInto;
    'uses-http2': UsesHttp2;
    'uses-passive-event-listeners': UsesPassiveEventListeners;
    'meta-description': MetaDescription;
    'http-status-code': HttpStatusCode;
    'font-size': FontSize;
    'link-text': LinkText;
    'is-crawlable': IsCrawlable;
    'robots-txt': RobotsTxt;
    hreflang: Hreflang;
    plugins: Plugins;
    canonical: Canonical;
    'mobile-friendly': MobileFriendly;
    'structured-data': StructuredData;
}

export interface Throttling {
    rttMs: number;
    throughputKbps: number;
    requestLatencyMs: number;
    downloadThroughputKbps: number;
    uploadThroughputKbps: number;
    cpuSlowdownMultiplier: number;
}

export interface ConfigSettings {
    output: string;
    maxWaitForLoad: number;
    throttlingMethod: string;
    throttling: Throttling;
    auditMode: boolean;
    gatherMode: boolean;
    disableStorageReset: boolean;
    disableDeviceEmulation: boolean;
    locale: string;
    blockedUrlPatterns?: any;
    additionalTraceCategories?: any;
    extraHeaders?: any;
    onlyAudits?: any;
    onlyCategories?: any;
    skipAudits?: any;
}

export interface AuditRef {
    id: string;
    weight: number;
    group: string;
}

export interface Performance {
    title: string;
    auditRefs: AuditRef[];
    id: string;
    score: number;
}

export interface AuditRef2 {
    id: string;
    weight: number;
}

export interface Pwa {
    title: string;
    description: string;
    manualDescription: string;
    auditRefs: AuditRef2[];
    id: string;
    score: number;
}

export interface AuditRef3 {
    id: string;
    weight: number;
    group: string;
}

export interface Accessibility {
    title: string;
    description: string;
    manualDescription: string;
    auditRefs: AuditRef3[];
    id: string;
    score: number;
}

export interface AuditRef4 {
    id: string;
    weight: number;
}

export interface BestPractices {
    title: string;
    auditRefs: AuditRef4[];
    id: string;
    score: number;
}

export interface AuditRef5 {
    id: string;
    weight: number;
    group: string;
}

export interface Seo {
    title: string;
    description: string;
    manualDescription: string;
    auditRefs: AuditRef5[];
    id: string;
    score: number;
}

export interface Categories {
    performance: Performance;
    pwa: Pwa;
    accessibility: Accessibility;
    'best-practices': BestPractices;
    seo: Seo;
}

export interface Metrics2 {
    title: string;
}

export interface LoadOpportunities {
    title: string;
    description: string;
}

export interface Diagnostics {
    title: string;
    description: string;
}

export interface A11yColorContrast {
    title: string;
    description: string;
}

export interface A11yDescribeContents {
    title: string;
    description: string;
}

export interface A11yWellStructured {
    title: string;
    description: string;
}

export interface A11yAria {
    title: string;
    description: string;
}

export interface A11yCorrectAttributes {
    title: string;
    description: string;
}

export interface A11yElementNames {
    title: string;
    description: string;
}

export interface A11yLanguage {
    title: string;
    description: string;
}

export interface A11yMeta {
    title: string;
    description: string;
}

export interface SeoMobile {
    title: string;
    description: string;
}

export interface SeoContent {
    title: string;
    description: string;
}

export interface SeoCrawl {
    title: string;
    description: string;
}

export interface CategoryGroups {
    metrics: Metrics2;
    'load-opportunities': LoadOpportunities;
    diagnostics: Diagnostics;
    'a11y-color-contrast': A11yColorContrast;
    'a11y-describe-contents': A11yDescribeContents;
    'a11y-well-structured': A11yWellStructured;
    'a11y-aria': A11yAria;
    'a11y-correct-attributes': A11yCorrectAttributes;
    'a11y-element-names': A11yElementNames;
    'a11y-language': A11yLanguage;
    'a11y-meta': A11yMeta;
    'seo-mobile': SeoMobile;
    'seo-content': SeoContent;
    'seo-crawl': SeoCrawl;
}

export interface Timing {
    total: number;
}

export interface RendererFormattedStrings {
    auditGroupExpandTooltip: string;
    crcInitialNavigation: string;
    crcLongestDurationLabel: string;
    errorLabel: string;
    errorMissingAuditInfo: string;
    labDataTitle: string;
    lsPerformanceCategoryDescription: string;
    manualAuditsGroupTitle: string;
    notApplicableAuditsGroupTitle: string;
    opportunityResourceColumnLabel: string;
    opportunitySavingsColumnLabel: string;
    passedAuditsGroupTitle: string;
    scorescaleLabel: string;
    toplevelWarningsMessage: string;
    varianceDisclaimer: string;
    warningHeader: string;
}

export interface Values {
    timeInMs: number;
}

export interface LighthouseCoreLibI18nJsSeconds {
    values: Values;
    path: string;
}

export interface Values2 {
    timeInMs: number;
}

export interface LighthouseCoreLibI18nJsMs {
    values: Values2;
    path: string;
}

export interface Values3 {
    timeInMs: number;
}

export interface LighthouseCoreAuditsTimeToFirstByteJsDisplayValue {
    values: Values3;
    path: string;
}

export interface Values4 {
    itemCount: number;
}

export interface LighthouseCoreAuditsUserTimingsJsDisplayValue {
    values: Values4;
    path: string;
}

export interface Values5 {
    itemCount: number;
}

export interface LighthouseCoreAuditsCriticalRequestChainsJsDisplayValue {
    values: Values5;
    path: string;
}

export interface Values6 {
    wastedMs: number;
}

export interface LighthouseCoreLibI18nJsDisplayValueMsSavings {
    values: Values6;
    path: string;
}

export interface Values7 {
    itemCount: number;
}

export interface LighthouseCoreAuditsByteEfficiencyUsesLongCacheTtlJsDisplayValue {
    values: Values7;
    path: string;
}

export interface Values8 {
    totalBytes: number;
}

export interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJsDisplayValue {
    values: Values8;
    path: string;
}

export interface Values9 {
    wastedBytes: number;
}

export interface LighthouseCoreLibI18nJsDisplayValueByteSavings {
    values: Values9;
    path: string;
}

export interface Values10 {
    itemCount: number;
}

export interface LighthouseCoreAuditsDobetterwebDomSizeJsDisplayValue {
    values: Values10;
    path: string;
}

export interface I18n {
    rendererFormattedStrings: RendererFormattedStrings;
    icuMessagePaths: any;
}

export interface RootObject {
    userAgent: string;
    environment: Environment;
    lighthouseVersion: string;
    fetchTime: Date;
    requestedUrl: string;
    finalUrl: string;
    runWarnings: any[];
    audits: Audits;
    configSettings: ConfigSettings;
    categories: Categories;
    categoryGroups: CategoryGroups;
    timing: Timing;
    i18n: I18n;
}
