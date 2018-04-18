// Server Rendered
export const isServer = () => {
    return typeof(window) === 'undefined';
}

// Mobile Browsers
export const isMobile = () => {
    if (isServer) return false;
    const ua = (navigator || {}).userAgent;
    if (ua) {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
    }
    return false;
}

// Opera 8.0+
export const isOpera = () => {
    if (isServer()) return false;
    let opr = window.opr || {};
    return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
}

// Firefox 1.0+
export const isFirefox = () => !isServer() && typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
export const isSafari = () => {
    if (isServer()) return false;
    let safari = window.safari || {};
    return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
}

// Internet Explorer 6-11
export const isIE = () => !isServer() && (/*@cc_on!@*/false || !!document.documentMode);

// Edge 20+
export const isEdge = () => !isServer() && !isIE() && !!window.StyleMedia;

// Chrome 1+
export const isChrome = () => !isServer() && !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
export const isBlink = () => !isServer() && (isChrome() || isOpera()) && !!window.CSS;

export const allBrowsers = ['chrome', 'firefox', 'safari', 'opera', 'ie', 'edge', 'blink', 'mobile'];

export default {
    isServer,
    isOpera,
    isFirefox,
    isSafari,
    isIE,
    isEdge,
    isChrome,
    isBlink,
    isMobile,
    allBrowsers
}