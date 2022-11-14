/**
 * PollifyJS JavaScript v 0.1.0
 *  Latest update:
 *      @see GitHub https://github.com/PollifyJS
 *      @see npm https://www.npmjs.com/package/PollifyJS
 *      @license ISC
 *  Date: 2022
 * 
 *  Description:
 *  PollifyJS have pollifyll in JavaScript
 * @see https://github.com/PollifyJS
 * 
 * The above copyright notice shall be included in all copies or substantial portions of the Software.
 * 
 * Copyright (c) 2022
 */
(function (global, factory) {
    "use strict";

    /* Checking if the module is an object and if the module.exports is an object. If it is, then it is
    checking if the global.document is true. If it is, then it is returning the factory(global,
    true). If it is not, then it is returning a function that checks if the document is not true. If
    it is not, then it is throwing an error. If it is, then it is returning the factory(a). If it is
    not, then it is returning the factory(global). */
    // CommonJS implementation
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ? factory(global, true) :
            function (a) {
                if (!a.document) {
                    throw new Error('PollifyJS requires a window with a document');
                }

                return factory(a);
            };

    } else {
        factory(global);
    }

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    "use strict";

    var document = window.document;

    function checkDocument() {
        if (!document) {
            throw new Error('PollifyJS requires a window with a document');
        }

        if (!document.createElement) {
            throw new Error('PollifyJS requires a window with a document.createElement');
        }

        if (!document.createDocumentFragment) {
            throw new Error('PollifyJS requires a window with a document.createDocumentFragment');
        }

        if (!document.createEvent) {
            throw new Error('PollifyJS requires a window with a document.createEvent');
        }

        if (!document.createTextNode) {
            throw new Error('PollifyJS requires a window with a document.createTextNode');
        }

        if (!document.createElementNS) {
            throw new Error('PollifyJS requires a window with a document.createElementNS');
        }

        if (!document.createEventNS) {
            throw new Error('PollifyJS requires a window with a document.createEventNS');
        }

        if (!document.createTextNodeNS) {
            throw new Error('PollifyJS requires a window with a document.createTextNodeNS');
        }

        if (!document.createNSResolver) {
            throw new Error('PollifyJS requires a window with a document.createNSResolver');
        }

        if (!document.resolveNode) {
            throw new Error('PollifyJS requires a window with a document.resolveNode');
        }

        if (!document.addEventListener) {
            throw new Error('PollifyJS requires a window with a document.addEventListener');
        }

        if (!document.removeEventListener) {
            throw new Error('PollifyJS requires a window with a document.removeEventListener');
        }

        if (!document.dispatchEvent) {
            throw new Error('PollifyJS requires a window with a document.dispatchEvent');
        }

        if (!document.cancelAnimationFrame) {
            throw new Error('PollifyJS requires a window with a document.cancelAnimationFrame');
        }

        if (!document.requestAnimationFrame) {
            throw new Error('PollifyJS requires a window with a document.requestAnimationFrame');
        }

        if (!document.cancelRequestAnimationFrame) {
            throw new Error('PollifyJS requires a window with a document.cancelRequestAnimationFrame');
        }

        if (!document.getComputedStyle) {
            throw new Error('PollifyJS requires a window with a document.getComputedStyle');
        }

        if (!document.documentElement) {
            throw new Error('PollifyJS requires a window with a document.documentElement');
        }
    }

    if (noGlobal) {
        checkDocument();
    }

    let PollifyJS = {
        document: document,
        checkDocument: checkDocument,
        requestAnimationFrame: window.requestAnimationFrame,
        cancelAnimationFrame: window.cancelAnimationFrame,
        requestAnimationFrame: window.requestAnimationFrame,
        cancelRequestAnimationFrame: window.cancelRequestAnimationFrame,
        getComputedStyle: window.getComputedStyle,
        documentElement: document.documentElement,
        createElement: document.createElement,
        createDocumentFragment: document.createDocumentFragment,
        createEvent: document.createEvent,
        createEventNS: document.createEventNS,
        createNSResolver: document.createNSResolver,
        createElementNS: document.createElementNS,
        createTextNode: document.createTextNode,
        createDocumentFragment: document.createDocumentFragment,
        createAttribute: document.createAttribute,
        createElementNS: document.createElementNS,
        createEventNS: document.createEventNS,
        createTextNodeNS: document.createTextNodeNS,
        resolveNode: document.resolveNode,
        addEventListener: document.addEventListener,
        removeEventListener: document.removeEventListener,
        dispatchEvent: document.dispatchEvent
    };

    Object.defineProperty(PollifyJS, 'window', {
        value: window,
        configurable: true,
        enumerable: true,
        writable: true,
    });

    Object.defineProperty(PollifyJS, 'document', {
        value: document,
        configurable: true,
        enumerable: true,
        writable: true,
    });

    Object.defineProperty(PollifyJS, 'checkDocument', {
        value: checkDocument,
        configurable: true,
        enumerable: true,
        writable: true,
    });

    Object.defineProperty(PollifyJS, 'requestAnimationFrame', {
        value: window.requestAnimationFrame,
        configurable: true,
        enumerable: true,
        writable: true,
    });

    Object.defineProperty(PollifyJS, 'cancelAnimationFrame', {
        value: window.cancelAnimationFrame,
        configurable: true,
        enumerable: true,
        writable: true,
    });

    let PollifyJSEngine = {

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        version: "0.1.0",

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        ...window.PollifyJS,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        document: document,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        documentElement: document.documentElement,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        window: window,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        windowElement: window.document.documentElement,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        navigator: window.navigator,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        location: window.location,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        history: window.history,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        historyEvent: window.history.Event,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        historyPopState: window.history.PopState,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        historyState: window.history.State,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performance: window.performance,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceMark: window.performance.mark,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceMeasure: window.performance.measure,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceNow: window.performance.now,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceNavigation: window.performance.navigation,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceResourceTiming: window.performance.timing,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceResourceTimingMark: window.performance.timing.mark,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceResourceTimingMeasure: window.performance.timing.measure,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceTiming: window.performance.timing,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceNow: window.performance.now,

        /**
         * PollifyJS JavaScript v 0.1.0
         *  Latest update:
         *      @see GitHub https://github.com/PollifyJS
         *      @see npm https://www.npmjs.com/
         */
        performanceNavigation: window.performance.navigationTiming,
    }

    /**
     * @param {string} name
     */
    function get(name) {
        if (typeof window[name] === 'function') {
            return window[name].bind(window);
        }
        return window[name];
    }

    /**
     * @param {string} name
     */
    function set(name, value) {
        if (typeof window[name] === 'function') {
            window[name] = value;
        }
    }

    /**
     * @param {string} name
     */
    function remove(name) {
        if (typeof window[name] === 'function') {
            delete window[name];
        }
    }

    /**
     * @param {string} name
     */
    function clear(name) {
        if (typeof window[name] === 'function') {
            delete window[name];
        }
    }

    /**
     * @param {string} name
     */
    function has(name) {
        if (typeof window[name] === 'function') {
            return true;
        }
        return false;
    }

    /**
     * @param {string} name
     */
    function toggle(name) {
        if (typeof window[name] === 'function') {
            if (get(name)) {
                remove(name);
            } else {
                set(name, true);
            }
        }
    }

    /**
     * @param {string} name
     */
    function getBoolean(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getNumber(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getString(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getObject(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getBooleanObject(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getNumberObject(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getStringObject(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getObjectObject(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getArrayObject(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getBooleanArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getNumberArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getStringArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getObjectArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getBooleanObjectArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getNumberObjectArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getStringObjectArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    /**
     * @param {string} name
     */
    function getObjectObjectArray(name) {
        if (typeof window[name] === 'function') {
            return window[name]();
        }
        return get(name);
    }

    class WebInspector {
        constructor() {
            this.window = window;
            this.document = window.document;
            this.noGlobal = noGlobal;
            this.document.addEventListener("DOMContentLoaded", () => {
                this.init();
            });
        }

        init() {
            if (this.noGlobal) {
                return;
            }

            if (this.window.PollifyJS) {
                this.initPollifyJS();
                return;
            }
        }

        initPollifyJS() {
            if (this.noGlobal) {
                return;
            }
        }

        static init() {
            if (this.noGlobal) {
                return;
            }
        }
    }

    window.PollifyJS = WebInspector;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = WebInspector;
        module.exports.noGlobal = true;
        module.exports.window = window;
        module.exports.document = document;
        module.exports.navigator = navigator;
        module.exports.setTimeout = setTimeout;
        module.exports.clearTimeout = clearTimeout;
        module.exports.setInterval = setInterval;
        module.exports.clearInterval = clearInterval;
        module.exports.setImmediate = setImmediate;
        module.exports.clearImmediate = clearImmediate;
        module.exports.requestAnimationFrame = requestAnimationFrame;
        module.exports.cancelAnimationFrame = cancelAnimationFrame;
        module.exports.requestIdleCallback = requestIdleCallback;
        module.exports.cancelIdleCallback = cancelIdleCallback;
    }

    if (typeof define === 'function' && define.amd) {
        define([], () => {
            return WebInspector;
        });

        return;
    }

    if (typeof window !== 'undefined') {
        window.PollifyJS = WebInspector;
        return;
    }

    if (typeof global !== 'undefined') {
        global.PollifyJS = WebInspector;
    }

    if (typeof self !== 'undefined') {
        self.PollifyJS = WebInspector;
    }

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        document.addEventListener("DOMContentLoaded", () => {
            global.PollifyJS = WebInspector;
        });

        return;
    }

    function noGlobal() {
        return true;
    }

    global.PollifyJS = WebInspector;
    global.noGlobal = noGlobal;
    global.window = window;
    global.document = document;
    global.navigator = navigator;
    global.setTimeout = setTimeout;
    global.clearTimeout = clearTimeout;
    global.setInterval = setInterval;
    global.clearInterval = clearInterval;
    global.setImmediate = setImmediate;
    global.clearImmediate = clearImmediate;
    global.requestAnimationFrame = requestAnimationFrame;
    global.cancelAnimationFrame = cancelAnimationFrame;
    global.requestIdleCallback = requestIdleCallback;
    global.cancelIdleCallback = cancelIdleCallback;

    function fetch(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(null, xhr.responseText);
                } else {
                    callback(new Error(xhr.statusText));
                }
            }

            if (xhr.readyState === 4) {
                xhr.onreadystatechange = null;
                xhr.abort();
                xhr = null;
                callback(new Error('Aborted'));
                return;
            }
        }
    }

    class Promise {
        constructor(executor) {
            this.state = 'pending';
            this.value = null;
            this.error = null;
            this.oncancel = null;
            this.oncomplete = null;
            this.onprogress = null;
            this.ontimeout = null;
            this.executor = executor;
            this.resolve = null;
            this.reject = null;
            this.progress = null;
            this.timeout = null;
            this.then = null;
            this.catch = null;
            this.finally = null;
            this.cancel = null;
            this.chain = null;

            if (typeof executor === 'function') {
                executor(this.resolve, this.reject, this.progress, this.timeout, this.then, this.catch, this.finally, this.cancel);
                return;
            }

            if (typeof executor === 'object') {
                if (typeof executor.then === 'function') {
                    this.then = executor.then;
                }
            }

            if (typeof executor === 'function') {
                this.then = executor;
                this.catch = executor;
                this.finally = executor;
                this.cancel = executor;
            }

            if (typeof executor === 'object' && typeof executor.then === 'function') {
                this.then = executor.then;
                this.catch = executor.catch;
            }
        }

        then(onfulfilled, onrejected) {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = onfulfilled;
                this.error = null;
                this.oncancel = null;
                this.oncomplete = null;
                this.onprogress = null;
                this.ontimeout = null;
                this.resolve = null;

                if (this.then) {
                    this.then(onfulfilled, onrejected);
                    return this;
                }
            }
        }

        catch(onrejected) {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = onrejected;
                this.error = null;
                this.oncancel = null;
                this.oncomplete = null;
                this.onprogress = null;
                this.ontimeout = null;

                if (this.reject) {
                    this.reject(onrejected);
                }

                return;
            }
        }

        finally(onfinally) {
            if (this.state === 'pending') {
                this.state = 'finally';
                this.value = onfinally;
                this.error = null;
                this.oncancel = null;
                this.oncomplete = null;
                this.onprogress = null;

                if (this.finally) {
                    this.finally(onfinally);
                }

                return;
            } else if (this.state === 'fulfilled') {
                this.state = 'finally';
                this.value = onfinally;

                if (this.finally) {
                    this.finally(onfinally);
                }

                return;
            }

            if (this.onfinally) {
                this.onfinally(onfinally);
                return;
            }

        }

        cancel() {
            if (this.state === 'pending') {
                this.state = 'canceled';
                this.value = null;
                this.error = null;
                this.oncancel = null;
                this.oncomplete = null;
                this.onprogress = null;
            }
        }

        progress(onprogress) {
            if (this.state === 'pending') {
                this.state, this.value, this.error, this.oncancel, this.oncomplete, this.onprogress, this.oncomplete;
            }
        }

        timeout(ontimeout) {
            if (this.state === 'pending') {
                this.state = 'timeout';
                this.value = null;
                this.error = null;
                this.oncancel = null;
                this.oncomplete = null;
                this.onprogress = null;

                if (this.timeout) {
                    this.timeout(ontimeout);
                }
            }

        }
    }

    Promise.prototype.cancelAnimationFrame = function () {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
        return this;
    };


    function createElement(element, images) {
        if (typeof element === 'string') {
            element = document.createElement(element);
        }

        if (typeof element === 'function') {
            element = element();
        }

        if (typeof element === 'object' && element.nodeType === 1) {
            element = element.cloneNode(false);
        } else if (typeof element === 'object' && element.nodeType === 9) {
            element = element.cloneNode(false);
        }

        if (typeof element.style === 'object') {
            element.style.position = 'absolute';
            element.style.left = '-9999px';
            element.style.top = '-9999px';
            element.style.overflow = 'hidden';
            element.style.width = '1px';
            element.style.height = '1px';
        }

        if (images && images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                let image = images[i];

                if (typeof image === 'string') {
                    image = document.createElement('img');
                    image.src = image;
                }
            }

            return element;
        }

        return element;
    }

    function createElementNS(namespace, element, images) {
        if (typeof element === 'string') {
            element = document.createElementNS(namespace, element);
        }

        if (typeof element === 'function') {
            element = element();
        }

        if (typeof element === 'object' && element.nodeType === 1) {
            element = element.cloneNode(false);
        }

        if (typeof element.style === 'object') {
            element.style.position = 'absolute';
            element.style.left = '-9999px';
            element.style.top = '-9999px';
            element.style.overflow = 'hidden';
            element.style.width = '1px';
        }

        if (images && images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                let image = images[i];

                if (typeof image === 'string') {
                    image = document.createElementNS(namespace, image);
                }
            }

            return element;
        }

        return element;
    }

    function createElementNS(element, images) {
        if (typeof element === 'string') {
            element = document.createElementNS(element);
        }

        if (typeof element === 'function') {
            element = element();
        }

        if (typeof element === 'object' && element.nodeType === 1) {

            element = element.cloneNode(false);
        }

        return element;
    }

    class Element {
        constructor(element) {
            this.element = element;
            this.style = window.getComputedStyle(this.element);
        }

        get tagName() {
            return this.element.tagName;
        }

        get id() {
            return this.element.id;
        }

        get className() {
            return this.element.className;
        }

        get style() {
            return this.element.style;
        }

        get innerHTML() {
            return this.element.innerHTML;
        }

        get innerText() {
            return this.element.innerText;
        }

        get outerHTML() {
            return this.element.outerHTML;
        }

        get outerText() {
            return this.element.outerText;
        }

        set innerText(text) {
            this.element.innerText = text;
        }

        set outerText(text) {
            this.element.outerText = text;
        }

        set innerHTML(html) {
            this.element.innerHTML = html;
        }

        set outerHTML(html) {
            this.element.outerHTML = html;
        }

        set id(id) {
            this.element.id = id;
        }
    }

    class Node {
        constructor(element) {
            this.element = element;
        }

        get tagName() {
            return this.element.tagName;
        }

        get id() {
            return this.element.id;
        }

        get className() {
            return this.element.className;
        }

        get style() {
            return this.element.style;
        }

        get innerHTML() {
            return this.element.innerHTML;
        }

        get innerText() {
            return this.element.innerText;
        }

        get outerHTML() {
            return this.element.outerHTML;
        }

        get outerText() {
            return this.element.outerText;
        }

        set innerText(text) {
            this.element.innerText = text;
        }

        set outerText(text) {
            this.element.outerText = text;
        }

        set innerHTML(html) {
            this.element.innerHTML = html;
        }

        set outerHTML(html) {
            this.element.outerHTML = html;
        }

        set id(id) {
            this.element.id = id;
        }

        appendChild(child) {
            this.element.appendChild(child.element);
        }

        removeChild(child) {
            this.element.removeChild(child.element);
        }

        insertBefore(child, ref) {
            this.element.insertBefore(child.element, ref.element);
        }

        remove() {
            this.element.remove();
        }

        replaceChild(newChild, oldChild) {
            this.element.replaceChild(newChild.element, oldChild.element);
        }

        cloneNode(deep) {
            return this.element.cloneNode(deep);
        }

        setAttribute(name, value) {
            this.element.setAttribute(name, value);
        }

        getAttribute(name) {
            return this.element.getAttribute(name);
        }

        setStyle(name, value) {
            this.element.style[name] = value;
        }

        getStyle(name) {
            return this.element.style[name];
        }

        removeAttribute(name) {
            this.element.removeAttribute(name);
        }

        removeStyle(name) {
            this.element.style[name] = '';
        }

        hasAttribute(name) {
            return this.element.hasAttribute(name);
        }

        hasStyle(name) {
            return this.element.style[name] !== undefined;
        }
    }

    {
        Element.prototype = {
            get tagName() {
                return this.element.tagName;
            },

            get id() {
                return this.element.id;
            },

            get style() {
                return this.element.style;
            },

            set style(value) {
                this.element.style.cssText = value;
                return this;
            },

            setAttribute(name, value) {
                this.element.setAttribute(name, value);
            }
        }

        function createElement(element, images) {
            return new Element(element);
        }

        Element.prototype.appendChild = createElement;
        Element.prototype.removeChild = createElement;
        Element.prototype.insertBefore = createElement;
        Element.prototype.replaceChild = createElement;

        Node.prototype.appendChild(child, child.nodeType);
        Node.prototype.removeChild(child, child.nodeType);
        Node.prototype.replaceChild(newChild, oldChild);

        Node.prototype.cloneNode = function (deep) {
            return this.element.cloneNode(deep);
        }

        Element.prototype.cloneNode = function (deep) {
            return this.element.cloneNode(deep);
        }

        Element.prototype.setAttribute = function (name, value) {
            this.element.setAttribute(name, value);
        }

        Element.prototype.getAttribute = function (name) {
            return this.element.getAttribute(name);
        }

        Element.prototype.removeAttribute = function (name) {
            this.element.removeAttribute(name);
        }

        Element.prototype.remove = function () {
            this.element.remove();
        }

        Element.prototype.setStyle = function (name, value) {
            this.element.style[name] = value;
        }

        Element.prototype.getStyle = function (name) {
            return this.element.style[name];
        }

        Element.prototype.removeStyle = function (name) {
            this.element.style[name] = '';
        }

        Element.prototype.hasStyle = function (name) {
            return this.element.style[name] !== undefined;
        }

        Element.prototype.hasAttribute = function (name) {
            return this.element.hasAttribute(name);
        }

        Element.prototype.id = function () {
            return this.element.id;
        }

        Element.prototype.className = function () {
            return this.element.className;
        }

        Element.prototype.tagName = function () {
            return this.element.tagName;
        }

        Element.prototype.innerHTML = function () {
            return this.element.innerHTML;
        }

        Element.prototype.innerText = function () {
            return this.element.innerText;
        }

        Element.prototype.outerHTML = function () {
            return this.element.outerHTML;
        }

        Element.prototype.outerText = function () {
            return this.element.outerText;
        }

        Element.prototype.textContent = function () {
            return this.element.textContent;
        }

        Element.prototype.addEventListener = function (name, handler) {
            let event = new Event(name, handler);
            this.element.dispatchEvent(event);
            return event;
        }

        Element.prototype.removeEventListener = function (name, handler) {
            let event = new Event(name, handler);
            this.element.removeEventListener(name, handler);
            return event;
        }

        {
            Element.prototype.addEventListener = function (name, handler) {
                let event = new Event(name, handler);
                this.element.addEventListener(name, handler);
                return event;
            }
        }

        createElement.polyfill = true;
        createElementNS.polyfill = true;
        createElement.DOMException = undefined;
        createElementNS.DOMException = undefined;
        createElement.DOMException.NOT_SUPPORTED_ERR = 9;
        createElementNS.DOMException.NOT_SUPPORTED_ERR = 9;
        createElement.DOMException.SECURITY_ERR = 13;
        createElementNS.DOMException.SECURITY_ERR = 13;
        createElement.DOMException.ABORT_ERR = 15;
        createElementNS.DOMException.ABORT_ERR = 15;
        createElement.DOMException.INDEX_SIZE_ERR = 16;
        createElementNS.DOMException.INDEX_SIZE_ERR = 16;
        createElement.DOMException.DOMSTRING_SIZE_ERR = 17;
        createElementNS.DOMException.DOMSTRING_SIZE_ERR = 17;
        createElement.DOMException.HIERARCHY_REQUEST_ERR = 19;
        createElementNS.DOMException.HIERARCHY_REQUEST_ERR = 19;
        createElement.DOMException.WRONG_DOCUMENT_ERR = 21;
        createElementNS.DOMException.WRONG_DOCUMENT_ERR = 21;
        createElement.DOMException.INVALID_CHARACTER_ERR = 25;
        createElementNS.DOMException.INVALID_CHARACTER_ERR = 25;
        createElement.DOMException.NO_DATA_ALLOWED_ERR = 27;
        createElementNS.DOMException.NO_DATA_ALLOWED_ERR = 27;
        createElement.DOMException.NO_MODIFICATION_ALLOWED_ERR = 101;
        createElementNS.DOMException.NO_MODIFICATION_ALLOWED_ERR = 101;
        createElement.DOMException.NOT_SUPPORTED_ERR = 203;
        createElementNS.DOMException.NOT_SUPPORTED_ERR = 203;
        createElement.DOMException.INUSE_ATTRIBUTE_ERR = 208;
        createElementNS.DOMException.INUSE_ATTRIBUTE_ERR = 208;
        createElement.DOMException.INUSE_ATTRIBUTE_ERR = 208;
        createElement.DOMException.INVALID_STATE_ERR = 209;
        createElementNS.DOMException.INVALID_STATE_ERR = 209;
        createElement.DOMException.SYNTAX_ERR = 214;
        createElementNS.DOMException.SYNTAX_ERR = 214;
        createElement.DOMException.INVALID_MODIFICATION_ERR = 218;
        createElementNS.DOMException.INVALID_MODIFICATION_ERR = 218;
        createElement.DOMException.NAMESPACE_ERR = 219;
        createElementNS.DOMException.NAMESPACE_ERR = 219;
        createElement.DOMException.INVALID_ACCESS_ERR = 220;
        createElementNS.DOMException.INVALID_ACCESS_ERR = 220;
        createElement.DOMException.VALIDATION_ERR = 221;
        createElementNS.DOMException.VALIDATION_ERR = 221;
        createElement.DOMException.ASYNC_ERR = 225;
        createElementNS.DOMException.ASYNC_ERR = 225;
        createElement.DOMException.NOT_SUPPORTED_ERR = 'DOMException is not supported';
        createElementNS.DOMException.NOT_SUPPORTED_ERR_ERR = 'DOMException is not, then it is returning a function that checks if the document is not true.';
        createElementNS.DOMException.NO_MODIFICATION_ALLOWED_ERR = 'DOMException is not supported by the browser and is not supported by the browser.';
        createElementNS.DOMException.NO_MODIFICATION_ALLOWED_ERR_ERR = 'DOMException is not supported by the browser and is not supported by the browser.';
        createElementNS.DOMException.QUOTA_EXCEEDED_ERR = 'DOMException is not supported by the browser and is not supported by the browser.';
        createElementNS.DOMException.QUOTA_EXCEEDED_ERR_ERR = 'DOMException is not supported by the browser and is not supported by the browser.';

    }

    window.addEventListener("load", () => {
        window.PollifyJS.init();
        window.PollifyJS.initPollifyJS();

        if (window.PollifyJS.noGlobal) {
            window.PollifyJS.noGlobal = noGlobal;
        }

        if (window.PollifyJS.window) {
            window.PollifyJS.window = window;
        }

        if (window.PollifyJS.document) {
            window.PollifyJS.document = window.document;
        }
    });

    window.addEventListener("unload", () => {
        window.PollifyJS.noGlobal = true;
        window.PollifyJS.initPollifyJS();
    });

    window.addEventListener("beforeunload", () => {
        window.PollifyJS.noGlobal = true;
        window.PollifyJS.initPollifyJS();
        window.PollifyJS.window = window;
        window.PollifyJS.document = window.document;
        window.PollifyJS.navigator = window.navigator;
        window.PollifyJS.setTimeout = window.setTimeout;
        window.PollifyJS.clearTimeout = window.clearTimeout;
        window.PollifyJS.setInterval = window.setInterval;
        window.PollifyJS.clearInterval = window.clearInterval;
        window.PollifyJS.requestAnimationFrame = window.requestAnimationFrame;
        window.PollifyJS.cancelAnimationFrame = window.cancelAnimationFrame;
        window.PollifyJS.requestIdleCallback = window.requestIdleCallback;
        window.PollifyJS.cancelIdleCallback = window.cancelIdleCallback;
        window.PollifyJS.setImmediate = window.setImmediate;
        window.PollifyJS.clearImmediate = window.clearImmediate;
        window.PollifyJS.requestAnimationFrame = window.PollifyJS.requestAnimationFrame;
        window.PollifyJS.cancelAnimationFrame = window.PollifyJS.cancelAnimationFrame;
    });

    window.addEventListener("focus", () => {
        window.PollifyJS.noGlobal = true;
        window.PollifyJS.initPollifyJS();
        window.PollifyJS.init();
        window.PollifyJS.window = window;
        window.PollifyJS.document = window.document;
        window.PollifyJS.navigator = window.navigator;
        window.PollifyJS.setTimeout = window.setTimeout;
        window.PollifyJS.clearTimeout = window.clearTimeout;
        window.PollifyJS.setInterval = window.setInterval;
        window.PollifyJS.clearInterval = window.clearInterval;
        window.PollifyJS.setImmediate = window.setImmediate;
        window.PollifyJS.clearImmediate = window.clearImmediate;
        window.PollifyJS.requestAnimationFrame = window.requestAnimationFrame;
        window.PollifyJS.cancelAnimationFrame = window.cancelAnimationFrame;
        window.PollifyJS.requestIdleCallback = window.requestIdleCallback;
        window.PollifyJS.cancelIdleCallback = window.cancelIdleCallback;
    });

    window.addEventListener("blur", () => {
        window.PollifyJS.noGlobal = true;
        window.PollifyJS.initPollifyJS();
        window.PollifyJS.init();
        window.PollifyJS.window = window;
        window.PollifyJS.document = window.document;
        window.PollifyJS.noGlobal = false;
    });

    window.addEventListener("resize", () => {
        window.PollifyJS.noGlobal = true;
        window.PollifyJS.initPollifyJS();
        window.PollifyJS.init();
    });

    window.addEventListener("orientationchange", () => {
        window.PollifyJS.noGlobal = true;
        window.PollifyJS.initPollifyJS();
        window.PollifyJS.init();
        window.PollifyJS.window = window;
        window.PollifyJS.document = window.document;
    });


    window.addEventListener("contextmenu", () => {
        window.PollifyJS.noGlobal = true;
        window.PollifyJS.initPollifyJS();
        window.PollifyJS.init();
        return false;
    });


    window.addEventListener("mousemove", () => {
        window.PollifyJS.noGlobal = true;
        window.PollifyJS.initPollifyJS();
        window.PollifyJS.init();
        window.PollifyJS.window = window;
        window.PollifyJS.document = window.document;
        window.PollifyJS.navigator = window.navigator;
        window.PollifyJS.setTimeout = window.setTimeout;
        window.PollifyJS.clearTimeout = window.clearTimeout;
        window.PollifyJS.setInterval = window.setInterval;
        window.PollifyJS.clearInterval = window.clearInterval;
        window.PollifyJS.setImmediate = window.setImmediate;
        window.PollifyJS.clearImmediate = window.clearImmediate;
    });
});