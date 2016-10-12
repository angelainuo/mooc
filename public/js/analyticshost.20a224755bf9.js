(function outer(modules, cache, entries) {

    /**
     * Global
     */

    var global = (function() {
        return this;
    })();

    /**
     * Require `name`.
     *
     * @param {String} name
     * @param {Boolean} jumped
     * @api public
     */

    function require(name, jumped) {
        if (cache[name]) return cache[name].exports;
        if (modules[name]) return call(name, require);
        throw new Error('cannot find module "' + name + '"');
    }

    /**
     * Call module `id` and cache it.
     *
     * @param {Number} id
     * @param {Function} require
     * @return {Function}
     * @api private
     */

    function call(id, require) {
        var m = {
            exports: {}
        };
        var mod = modules[id];
        var name = mod[2];
        var fn = mod[0];

        fn.call(m.exports, function(req) {
            var dep = modules[id][1][req];
            return require(dep || req);
        }, m, m.exports, outer, modules, cache, entries);

        // store to cache after successful resolve
        cache[id] = m;

        // expose as `name`.
        if (name) cache[name] = cache[id];

        return cache[id].exports;
    }

    /**
     * Require all entries exposing them on global if needed.
     */

    for (var id in entries) {
        if (entries[id]) {
            global[entries[id]] = require(id);
        } else {
            require(id);
        }
    }

    /**
     * Duo flag.
     */

    require.duo = true;

    /**
     * Expose cache.
     */

    require.cache = cache;

    /**
     * Expose modules
     */

    require.modules = modules;

    /**
     * Return newest require.
     */

    return require;
})({
    1: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var analyticsq = window.analytics || [];
        var analytics = require('./');

        /**
         * Snippet version.
         */

        var snippet = analyticsq && analyticsq.SNIPPET_VERSION ? parseFloat(analyticsq.SNIPPET_VERSION, 10) : 0;

        /**
         * Initialize.
         */

        analytics.initialize({
            "Segment.io": {
                "apiKey": ""
            }
        }, {
            initialPageview: snippet === 0,
            plan: {
                "track": {}
            }
        });

        /**
         * Before swapping the global, replay an existing global `analytics` queue.
         */

        while (analyticsq && analyticsq.length > 0) {
            var args = analyticsq.shift();
            var method = args.shift();
            if (analytics[method]) analytics[method].apply(analytics, args);
        }

        /**
         * Finally, replace the global queue with the real `analytics` singleton.
         */

        window.analytics = analytics;

    }, {
        "./": 2
    }],
    2: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var Integrations = require('./integrations');
        var analytics = require('analytics.js-core');
        var each = require('each');

        /**
         * Define private integrations.
         */

        each(Integrations, function(name, Integration) {
            analytics.use(Integration);
        });

        /**
         * Expose `analytics`.
         */

        module.exports = analytics;

    }, {
        "./integrations": 3,
        "analytics.js-core": 4,
        "each": 5
    }],
    3: [function(require, module, exports) {
        /* eslint quote-props: 0 */
        'use strict';

        module.exports = {
            // Public
            'adroll': require('analytics.js-integration-adroll'),
            'adwords': require('analytics.js-integration-adwords'),
            'alexa': require('analytics.js-integration-alexa'),
            'amplitude': require('analytics.js-integration-amplitude'),
            'appcues': require('analytics.js-integration-appcues'),
            'atatus': require('analytics.js-integration-atatus'),
            'autosend': require('analytics.js-integration-autosend'),
            'awesm': require('analytics.js-integration-awesm'),
            'bing-ads': require('analytics.js-integration-bing-ads'),
            'blueshift': require('analytics.js-integration-blueshift'),
            'bronto': require('analytics.js-integration-bronto'),
            'bugherd': require('analytics.js-integration-bugherd'),
            'bugsnag': require('analytics.js-integration-bugsnag'),
            'chameleon': require('analytics.js-integration-chameleon'),
            'chartbeat': require('analytics.js-integration-chartbeat'),
            'clicktale': require('analytics.js-integration-clicktale'),
            'clicky': require('analytics.js-integration-clicky'),
            'comscore': require('analytics.js-integration-comscore'),
            'crazy-egg': require('analytics.js-integration-crazy-egg'),
            'curebit': require('analytics.js-integration-curebit'),
            'customerio': require('analytics.js-integration-customerio'),
            'drip': require('analytics.js-integration-drip'),
            'elevio': require('analytics.js-integration-elevio'),
            'errorception': require('analytics.js-integration-errorception'),
            'evergage': require('analytics.js-integration-evergage'),
            'extole': require('analytics.js-integration-extole'),
            'facebook-conversion-tracking': require('analytics.js-integration-facebook-conversion-tracking'),
            'foxmetrics': require('analytics.js-integration-foxmetrics'),
            'frontleaf': require('analytics.js-integration-frontleaf'),
            'fullstory': require('analytics.js-integration-fullstory'),
            'gauges': require('analytics.js-integration-gauges'),
            'get-satisfaction': require('analytics.js-integration-get-satisfaction'),
            'google-analytics': require('analytics.js-integration-google-analytics'),
            'google-tag-manager': require('analytics.js-integration-google-tag-manager'),
            'gosquared': require('analytics.js-integration-gosquared'),
            'heap': require('analytics.js-integration-heap'),
            'hellobar': require('analytics.js-integration-hellobar'),
            'hittail': require('analytics.js-integration-hittail'),
            'hubspot': require('analytics.js-integration-hubspot'),
            'improvely': require('analytics.js-integration-improvely'),
            'insidevault': require('analytics.js-integration-insidevault'),
            'inspectlet': require('analytics.js-integration-inspectlet'),
            'intercom': require('analytics.js-integration-intercom'),
            'keen-io': require('analytics.js-integration-keen-io'),
            'kenshoo': require('analytics.js-integration-kenshoo'),
            'kissmetrics': require('analytics.js-integration-kissmetrics'),
            'klaviyo': require('analytics.js-integration-klaviyo'),
            'livechat': require('analytics.js-integration-livechat'),
            'lucky-orange': require('analytics.js-integration-lucky-orange'),
            'lytics': require('analytics.js-integration-lytics'),
            'mixpanel': require('analytics.js-integration-mixpanel'),
            'mojn': require('analytics.js-integration-mojn'),
            'mouseflow': require('analytics.js-integration-mouseflow'),
            'mousestats': require('analytics.js-integration-mousestats'),
            'navilytics': require('analytics.js-integration-navilytics'),
            'nudgespot': require('analytics.js-integration-nudgespot'),
            'olark': require('analytics.js-integration-olark'),
            'optimizely': require('analytics.js-integration-optimizely'),
            'outbound': require('analytics.js-integration-outbound'),
            'perfect-audience': require('analytics.js-integration-perfect-audience'),
            'pingdom': require('analytics.js-integration-pingdom'),
            'piwik': require('analytics.js-integration-piwik'),
            'preact': require('analytics.js-integration-preact'),
            'qualaroo': require('analytics.js-integration-qualaroo'),
            'quantcast': require('analytics.js-integration-quantcast'),
            'rollbar': require('analytics.js-integration-rollbar'),
            'route': require('analytics.js-integration-route'),
            'saasquatch': require('analytics.js-integration-saasquatch'),
            'satismeter': require('analytics.js-integration-satismeter'),
            'segmentio': require('analytics.js-integration-segmentio'),
            'sentry': require('analytics.js-integration-sentry'),
            'snapengage': require('analytics.js-integration-snapengage'),
            'spinnakr': require('analytics.js-integration-spinnakr'),
            'supporthero': require('analytics.js-integration-supporthero'),
            'taplytics': require('analytics.js-integration-taplytics'),
            'tapstream': require('analytics.js-integration-tapstream'),
            'trakio': require('analytics.js-integration-trakio'),
            'twitter-ads': require('analytics.js-integration-twitter-ads'),
            'userlike': require('analytics.js-integration-userlike'),
            'uservoice': require('analytics.js-integration-uservoice'),
            'vero': require('analytics.js-integration-vero'),
            'visual-website-optimizer': require('analytics.js-integration-visual-website-optimizer'),
            'webengage': require('analytics.js-integration-webengage'),
            'woopra': require('analytics.js-integration-woopra'),
            'wootric': require('analytics.js-integration-wootric'),
            'yandex-metrica': require('analytics.js-integration-yandex-metrica'),

            // Private
            'adlearn-open-platform': require('segment-integrations/analytics.js-integration-adlearn-open-platform'),
            'adometry': require('segment-integrations/analytics.js-integration-adometry'),
            'appnexus': require('segment-integrations/analytics.js-integration-appnexus'),
            'convertro': require('segment-integrations/analytics.js-integration-convertro'),
            'eloqua': require('segment-integrations/analytics.js-integration-eloqua'),
            'email-aptitude': require('segment-integrations/analytics.js-integration-email-aptitude'),
            'facebook-custom-audiences': require('segment-integrations/analytics.js-integration-facebook-custom-audiences'),
            'localytics': require('segment-integrations/analytics.js-integration-localytics'),
            'marketo': require('segment-integrations/analytics.js-integration-marketo'),
            'mediamath': require('segment-integrations/analytics.js-integration-mediamath'),
            'monetate': require('segment-integrations/analytics.js-integration-monetate'),
            'nanigans': require('segment-integrations/analytics.js-integration-nanigans'),
            'omniture': require('segment-integrations/analytics.js-integration-omniture'),
            'onespot': require('segment-integrations/analytics.js-integration-onespot'),
            'pardot': require('segment-integrations/analytics.js-integration-pardot'),
            'rockerbox': require('segment-integrations/analytics.js-integration-rockerbox'),
            'rocket-fuel': require('segment-integrations/analytics.js-integration-rocket-fuel'),
            'shareasale': require('segment-integrations/analytics.js-integration-shareasale'),
            'simplifi': require('segment-integrations/analytics.js-integration-simplifi'),
            'steelhouse': require('segment-integrations/analytics.js-integration-steelhouse'),
            'tell-apart': require('segment-integrations/analytics.js-integration-tell-apart'),
            'totango': require('segment-integrations/analytics.js-integration-totango'),
            'trackjs': require('segment-integrations/analytics.js-integration-trackjs'),
            'tvsquared': require('segment-integrations/analytics.js-integration-tvsquared'),
            'yellowhammer': require('segment-integrations/analytics.js-integration-yellowhammer'),
            'zopim': require('segment-integrations/analytics.js-integration-zopim')
        };

    }, {
        "analytics.js-integration-adroll": 6,
        "analytics.js-integration-adwords": 7,
        "analytics.js-integration-alexa": 8,
        "analytics.js-integration-amplitude": 9,
        "analytics.js-integration-appcues": 10,
        "analytics.js-integration-atatus": 11,
        "analytics.js-integration-autosend": 12,
        "analytics.js-integration-awesm": 13,
        "analytics.js-integration-bing-ads": 14,
        "analytics.js-integration-blueshift": 15,
        "analytics.js-integration-bronto": 16,
        "analytics.js-integration-bugherd": 17,
        "analytics.js-integration-bugsnag": 18,
        "analytics.js-integration-chameleon": 19,
        "analytics.js-integration-chartbeat": 20,
        "analytics.js-integration-clicktale": 21,
        "analytics.js-integration-clicky": 22,
        "analytics.js-integration-comscore": 23,
        "analytics.js-integration-crazy-egg": 24,
        "analytics.js-integration-curebit": 25,
        "analytics.js-integration-customerio": 26,
        "analytics.js-integration-drip": 27,
        "analytics.js-integration-elevio": 28,
        "analytics.js-integration-errorception": 29,
        "analytics.js-integration-evergage": 30,
        "analytics.js-integration-extole": 31,
        "analytics.js-integration-facebook-conversion-tracking": 32,
        "analytics.js-integration-foxmetrics": 33,
        "analytics.js-integration-frontleaf": 34,
        "analytics.js-integration-fullstory": 35,
        "analytics.js-integration-gauges": 36,
        "analytics.js-integration-get-satisfaction": 37,
        "analytics.js-integration-google-analytics": 38,
        "analytics.js-integration-google-tag-manager": 39,
        "analytics.js-integration-gosquared": 40,
        "analytics.js-integration-heap": 41,
        "analytics.js-integration-hellobar": 42,
        "analytics.js-integration-hittail": 43,
        "analytics.js-integration-hubspot": 44,
        "analytics.js-integration-improvely": 45,
        "analytics.js-integration-insidevault": 46,
        "analytics.js-integration-inspectlet": 47,
        "analytics.js-integration-intercom": 48,
        "analytics.js-integration-keen-io": 49,
        "analytics.js-integration-kenshoo": 50,
        "analytics.js-integration-kissmetrics": 51,
        "analytics.js-integration-klaviyo": 52,
        "analytics.js-integration-livechat": 53,
        "analytics.js-integration-lucky-orange": 54,
        "analytics.js-integration-lytics": 55,
        "analytics.js-integration-mixpanel": 56,
        "analytics.js-integration-mojn": 57,
        "analytics.js-integration-mouseflow": 58,
        "analytics.js-integration-mousestats": 59,
        "analytics.js-integration-navilytics": 60,
        "analytics.js-integration-nudgespot": 61,
        "analytics.js-integration-olark": 62,
        "analytics.js-integration-optimizely": 63,
        "analytics.js-integration-outbound": 64,
        "analytics.js-integration-perfect-audience": 65,
        "analytics.js-integration-pingdom": 66,
        "analytics.js-integration-piwik": 67,
        "analytics.js-integration-preact": 68,
        "analytics.js-integration-qualaroo": 69,
        "analytics.js-integration-quantcast": 70,
        "analytics.js-integration-rollbar": 71,
        "analytics.js-integration-route": 72,
        "analytics.js-integration-saasquatch": 73,
        "analytics.js-integration-satismeter": 74,
        "analytics.js-integration-segmentio": 75,
        "analytics.js-integration-sentry": 76,
        "analytics.js-integration-snapengage": 77,
        "analytics.js-integration-spinnakr": 78,
        "analytics.js-integration-supporthero": 79,
        "analytics.js-integration-taplytics": 80,
        "analytics.js-integration-tapstream": 81,
        "analytics.js-integration-trakio": 82,
        "analytics.js-integration-twitter-ads": 83,
        "analytics.js-integration-userlike": 84,
        "analytics.js-integration-uservoice": 85,
        "analytics.js-integration-vero": 86,
        "analytics.js-integration-visual-website-optimizer": 87,
        "analytics.js-integration-webengage": 88,
        "analytics.js-integration-woopra": 89,
        "analytics.js-integration-wootric": 90,
        "analytics.js-integration-yandex-metrica": 91,
        "segment-integrations/analytics.js-integration-adlearn-open-platform": 92,
        "segment-integrations/analytics.js-integration-adometry": 93,
        "segment-integrations/analytics.js-integration-appnexus": 94,
        "segment-integrations/analytics.js-integration-convertro": 95,
        "segment-integrations/analytics.js-integration-eloqua": 96,
        "segment-integrations/analytics.js-integration-email-aptitude": 97,
        "segment-integrations/analytics.js-integration-facebook-custom-audiences": 98,
        "segment-integrations/analytics.js-integration-localytics": 99,
        "segment-integrations/analytics.js-integration-marketo": 100,
        "segment-integrations/analytics.js-integration-mediamath": 101,
        "segment-integrations/analytics.js-integration-monetate": 102,
        "segment-integrations/analytics.js-integration-nanigans": 103,
        "segment-integrations/analytics.js-integration-omniture": 104,
        "segment-integrations/analytics.js-integration-onespot": 105,
        "segment-integrations/analytics.js-integration-pardot": 106,
        "segment-integrations/analytics.js-integration-rockerbox": 107,
        "segment-integrations/analytics.js-integration-rocket-fuel": 108,
        "segment-integrations/analytics.js-integration-shareasale": 109,
        "segment-integrations/analytics.js-integration-simplifi": 110,
        "segment-integrations/analytics.js-integration-steelhouse": 111,
        "segment-integrations/analytics.js-integration-tell-apart": 112,
        "segment-integrations/analytics.js-integration-totango": 113,
        "segment-integrations/analytics.js-integration-trackjs": 114,
        "segment-integrations/analytics.js-integration-tvsquared": 115,
        "segment-integrations/analytics.js-integration-yellowhammer": 116,
        "segment-integrations/analytics.js-integration-zopim": 117
    }],
    6: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "to-snake-case": 119,
        "use-https": 120,
        "each": 121,
        "is": 122,
        "obj-case": 123
    }],
    118: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var bind = require('bind');
        var clone = require('clone');
        var debug = require('debug');
        var defaults = require('defaults');
        var extend = require('extend');
        var slug = require('slug');
        var protos = require('./protos');
        var statics = require('./statics');

        /**
         * Create a new `Integration` constructor.
         *
         * @constructs Integration
         * @param {string} name
         * @return {Function} Integration
         */

        function createIntegration(name) {
            /**
             * Initialize a new `Integration`.
             *
             * @class
             * @param {Object} options
             */

            function Integration(options) {
                if (options && options.addIntegration) {
                    // plugin
                    return options.addIntegration(Integration);
                }
                this.debug = debug('analytics:integration:' + slug(name));
                this.options = defaults(clone(options) || {}, this.defaults);
                this._queue = [];
                this.once('ready', bind(this, this.flush));

                Integration.emit('construct', this);
                this.ready = bind(this, this.ready);
                this._wrapInitialize();
                this._wrapPage();
                this._wrapTrack();
            }

            Integration.prototype.defaults = {};
            Integration.prototype.globals = [];
            Integration.prototype.templates = {};
            Integration.prototype.name = name;
            extend(Integration, statics);
            extend(Integration.prototype, protos);

            return Integration;
        }

        /**
         * Exports.
         */

        module.exports = createIntegration;

    }, {
        "bind": 124,
        "clone": 125,
        "debug": 126,
        "defaults": 127,
        "extend": 128,
        "slug": 129,
        "./protos": 130,
        "./statics": 131
    }],
    124: [function(require, module, exports) {

        var bind = require('bind'),
            bindAll = require('bind-all');


        /**
         * Expose `bind`.
         */

        module.exports = exports = bind;


        /**
         * Expose `bindAll`.
         */

        exports.all = bindAll;


        /**
         * Expose `bindMethods`.
         */

        exports.methods = bindMethods;


        /**
         * Bind `methods` on `obj` to always be called with the `obj` as context.
         *
         * @param {Object} obj
         * @param {String} methods...
         */

        function bindMethods(obj, methods) {
            methods = [].slice.call(arguments, 1);
            for (var i = 0, method; method = methods[i]; i++) {
                obj[method] = bind(obj, obj[method]);
            }
            return obj;
        }
    }, {
        "bind": 132,
        "bind-all": 133
    }],
    132: [function(require, module, exports) {
        /**
         * Slice reference.
         */

        var slice = [].slice;

        /**
         * Bind `obj` to `fn`.
         *
         * @param {Object} obj
         * @param {Function|String} fn or string
         * @return {Function}
         * @api public
         */

        module.exports = function(obj, fn) {
            if ('string' == typeof fn) fn = obj[fn];
            if ('function' != typeof fn) throw new Error('bind() requires a function');
            var args = slice.call(arguments, 2);
            return function() {
                return fn.apply(obj, args.concat(slice.call(arguments)));
            }
        };

    }, {}],
    133: [function(require, module, exports) {

        try {
            var bind = require('bind');
            var type = require('type');
        } catch (e) {
            var bind = require('bind-component');
            var type = require('type-component');
        }

        module.exports = function(obj) {
            for (var key in obj) {
                var val = obj[key];
                if (type(val) === 'function') obj[key] = bind(obj, obj[key]);
            }
            return obj;
        };
    }, {
        "bind": 132,
        "type": 134
    }],
    134: [function(require, module, exports) {
        /**
         * toString ref.
         */

        var toString = Object.prototype.toString;

        /**
         * Return the type of `val`.
         *
         * @param {Mixed} val
         * @return {String}
         * @api public
         */

        module.exports = function(val) {
            switch (toString.call(val)) {
                case '[object Date]':
                    return 'date';
                case '[object RegExp]':
                    return 'regexp';
                case '[object Arguments]':
                    return 'arguments';
                case '[object Array]':
                    return 'array';
                case '[object Error]':
                    return 'error';
            }

            if (val === null) return 'null';
            if (val === undefined) return 'undefined';
            if (val !== val) return 'nan';
            if (val && val.nodeType === 1) return 'element';

            val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val)

            return typeof val;
        };

    }, {}],
    125: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var type;

        try {
            type = require('type');
        } catch (e) {
            type = require('type-component');
        }

        /**
         * Module exports.
         */

        module.exports = clone;

        /**
         * Clones objects.
         *
         * @param {Mixed} any object
         * @api public
         */

        function clone(obj) {
            switch (type(obj)) {
                case 'object':
                    var copy = {};
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            copy[key] = clone(obj[key]);
                        }
                    }
                    return copy;

                case 'array':
                    var copy = new Array(obj.length);
                    for (var i = 0, l = obj.length; i < l; i++) {
                        copy[i] = clone(obj[i]);
                    }
                    return copy;

                case 'regexp':
                    // from millermedeiros/amd-utils - MIT
                    var flags = '';
                    flags += obj.multiline ? 'm' : '';
                    flags += obj.global ? 'g' : '';
                    flags += obj.ignoreCase ? 'i' : '';
                    return new RegExp(obj.source, flags);

                case 'date':
                    return new Date(obj.getTime());

                default: // string, number, boolean, 鈥�
                    return obj;
            }
        }

    }, {
        "type": 134
    }],
    126: [function(require, module, exports) {
        if ('undefined' == typeof window) {
            module.exports = require('./lib/debug');
        } else {
            module.exports = require('./debug');
        }

    }, {
        "./lib/debug": 135,
        "./debug": 136
    }],
    135: [function(require, module, exports) {
        /**
         * Module dependencies.
         */

        var tty = require('tty');

        /**
         * Expose `debug()` as the module.
         */

        module.exports = debug;

        /**
         * Enabled debuggers.
         */

        var names = [],
            skips = [];

        (process.env.DEBUG || '')
        .split(/[\s,]+/)
            .forEach(function(name) {
                name = name.replace('*', '.*?');
                if (name[0] === '-') {
                    skips.push(new RegExp('^' + name.substr(1) + '$'));
                } else {
                    names.push(new RegExp('^' + name + '$'));
                }
            });

        /**
         * Colors.
         */

        var colors = [6, 2, 3, 4, 5, 1];

        /**
         * Previous debug() call.
         */

        var prev = {};

        /**
         * Previously assigned color.
         */

        var prevColor = 0;

        /**
         * Is stdout a TTY? Colored output is disabled when `true`.
         */

        var isatty = tty.isatty(2);

        /**
         * Select a color.
         *
         * @return {Number}
         * @api private
         */

        function color() {
            return colors[prevColor++ % colors.length];
        }

        /**
         * Humanize the given `ms`.
         *
         * @param {Number} m
         * @return {String}
         * @api private
         */

        function humanize(ms) {
            var sec = 1000,
                min = 60 * 1000,
                hour = 60 * min;

            if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
            if (ms >= min) return (ms / min).toFixed(1) + 'm';
            if (ms >= sec) return (ms / sec | 0) + 's';
            return ms + 'ms';
        }

        /**
         * Create a debugger with the given `name`.
         *
         * @param {String} name
         * @return {Type}
         * @api public
         */

        function debug(name) {
            function disabled() {}

            disabled.enabled = false;

            var match = skips.some(function(re) {
                return re.test(name);
            });

            if (match) return disabled;

            match = names.some(function(re) {
                return re.test(name);
            });

            if (!match) return disabled;
            var c = color();

            function colored(fmt) {
                fmt = coerce(fmt);

                var curr = new Date;
                var ms = curr - (prev[name] || curr);
                prev[name] = curr;

                fmt = '  \u001b[9' + c + 'm' + name + ' ' + '\u001b[3' + c + 'm\u001b[90m' + fmt + '\u001b[3' + c + 'm' + ' +' + humanize(ms) + '\u001b[0m';

                console.error.apply(this, arguments);
            }

            function plain(fmt) {
                fmt = coerce(fmt);

                fmt = new Date().toUTCString() + ' ' + name + ' ' + fmt;
                console.error.apply(this, arguments);
            }

            colored.enabled = plain.enabled = true;

            return isatty || process.env.DEBUG_COLORS ? colored : plain;
        }

        /**
         * Coerce `val`.
         */

        function coerce(val) {
            if (val instanceof Error) return val.stack || val.message;
            return val;
        }

    }, {}],
    136: [function(require, module, exports) {

        /**
         * Expose `debug()` as the module.
         */

        module.exports = debug;

        /**
         * Create a debugger with the given `name`.
         *
         * @param {String} name
         * @return {Type}
         * @api public
         */

        function debug(name) {
            if (!debug.enabled(name)) return function() {};

            return function(fmt) {
                fmt = coerce(fmt);

                var curr = new Date;
                var ms = curr - (debug[name] || curr);
                debug[name] = curr;

                fmt = name + ' ' + fmt + ' +' + debug.humanize(ms);

                // This hackery is required for IE8
                // where `console.log` doesn't have 'apply'
                window.console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }
        }

        /**
         * The currently active debug mode names.
         */

        debug.names = [];
        debug.skips = [];

        /**
         * Enables a debug mode by name. This can include modes
         * separated by a colon and wildcards.
         *
         * @param {String} name
         * @api public
         */

        debug.enable = function(name) {
            try {
                localStorage.debug = name;
            } catch (e) {}

            var split = (name || '').split(/[\s,]+/),
                len = split.length;

            for (var i = 0; i < len; i++) {
                name = split[i].replace('*', '.*?');
                if (name[0] === '-') {
                    debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
                } else {
                    debug.names.push(new RegExp('^' + name + '$'));
                }
            }
        };

        /**
         * Disable debug output.
         *
         * @api public
         */

        debug.disable = function() {
            debug.enable('');
        };

        /**
         * Humanize the given `ms`.
         *
         * @param {Number} m
         * @return {String}
         * @api private
         */

        debug.humanize = function(ms) {
            var sec = 1000,
                min = 60 * 1000,
                hour = 60 * min;

            if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
            if (ms >= min) return (ms / min).toFixed(1) + 'm';
            if (ms >= sec) return (ms / sec | 0) + 's';
            return ms + 'ms';
        };

        /**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */

        debug.enabled = function(name) {
            for (var i = 0, len = debug.skips.length; i < len; i++) {
                if (debug.skips[i].test(name)) {
                    return false;
                }
            }
            for (var i = 0, len = debug.names.length; i < len; i++) {
                if (debug.names[i].test(name)) {
                    return true;
                }
            }
            return false;
        };

        /**
         * Coerce `val`.
         */

        function coerce(val) {
            if (val instanceof Error) return val.stack || val.message;
            return val;
        }

        // persist

        try {
            if (window.localStorage) debug.enable(localStorage.debug);
        } catch (e) {}

    }, {}],
    127: [function(require, module, exports) {
        'use strict';

        /**
         * Merge default values.
         *
         * @param {Object} dest
         * @param {Object} defaults
         * @return {Object}
         * @api public
         */
        var defaults = function(dest, src, recursive) {
            for (var prop in src) {
                if (recursive && dest[prop] instanceof Object && src[prop] instanceof Object) {
                    dest[prop] = defaults(dest[prop], src[prop], true);
                } else if (!(prop in dest)) {
                    dest[prop] = src[prop];
                }
            }

            return dest;
        };

        /**
         * Expose `defaults`.
         */
        module.exports = defaults;

    }, {}],
    128: [function(require, module, exports) {

        module.exports = function extend(object) {
            // Takes an unlimited number of extenders.
            var args = Array.prototype.slice.call(arguments, 1);

            // For each extender, copy their properties on our object.
            for (var i = 0, source; source = args[i]; i++) {
                if (!source) continue;
                for (var property in source) {
                    object[property] = source[property];
                }
            }

            return object;
        };
    }, {}],
    129: [function(require, module, exports) {

        /**
         * Generate a slug from the given `str`.
         *
         * example:
         *
         *        generate('foo bar');
         *        // > foo-bar
         *
         * @param {String} str
         * @param {Object} options
         * @config {String|RegExp} [replace] characters to replace, defaulted to `/[^a-z0-9]/g`
         * @config {String} [separator] separator to insert, defaulted to `-`
         * @return {String}
         */

        module.exports = function(str, options) {
            options || (options = {});
            return str.toLowerCase()
                .replace(options.replace || /[^a-z0-9]/g, ' ')
                .replace(/^ +| +$/g, '')
                .replace(/ +/g, options.separator || '-')
        };

    }, {}],
    130: [function(require, module, exports) {
        /* global setInterval:true setTimeout:true */

        /**
         * Module dependencies.
         */

        var Emitter = require('emitter');
        var after = require('after');
        var each = require('each');
        var events = require('analytics-events');
        var fmt = require('fmt');
        var foldl = require('foldl');
        var loadIframe = require('load-iframe');
        var loadScript = require('load-script');
        var normalize = require('to-no-case');
        var nextTick = require('next-tick');
        var type = require('type');

        /**
         * Noop.
         */

        function noop() {}

        /**
         * hasOwnProperty reference.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Window defaults.
         */

        var onerror = window.onerror;
        var onload = null;
        var setInterval = window.setInterval;
        var setTimeout = window.setTimeout;

        /**
         * Mixin emitter.
         */

        /* eslint-disable new-cap */
        Emitter(exports);
        /* eslint-enable new-cap */

        /**
         * Initialize.
         */

        exports.initialize = function() {
            var ready = this.ready;
            nextTick(ready);
        };

        /**
         * Loaded?
         *
         * @api private
         * @return {boolean}
         */

        exports.loaded = function() {
            return false;
        };

        /**
         * Page.
         *
         * @api public
         * @param {Page} page
         */

        /* eslint-disable no-unused-vars */
        exports.page = function(page) {};
        /* eslint-enable no-unused-vars */

        /**
         * Track.
         *
         * @api public
         * @param {Track} track
         */

        /* eslint-disable no-unused-vars */
        exports.track = function(track) {};
        /* eslint-enable no-unused-vars */

        /**
         * Get events that match `event`.
         *
         * @api public
         * @param {Object|Object[]} events An object or array of objects pulled from
         * settings.mapping.
         * @param {string} event The name of the event whose metdata we're looking for.
         * @return {Array} An array of settings that match the input `event` name.
         * @example
         * var events = { my_event: 'a4991b88' };
         * .map(events, 'My Event');
         * // => ["a4991b88"]
         * .map(events, 'whatever');
         * // => []
         *
         * var events = [{ key: 'my event', value: '9b5eb1fa' }];
         * .map(events, 'my_event');
         * // => ["9b5eb1fa"]
         * .map(events, 'whatever');
         * // => []
         */

        exports.map = function(events, event) {
            var normalizedEvent = normalize(event);

            return foldl(function(matchingEvents, val, key, events) {
                // If true, this is a `mixed` value, which is structured like so:
                //     { key: 'testEvent', value: { event: 'testEvent', someValue: 'xyz' } }
                // We need to extract the key, which we use to match against
                // `normalizedEvent`, and return `value` as part of `matchingEvents` if that
                // match succeds.
                if (type(events) === 'array') {
                    // If there's no key attached to this event mapping (unusual), skip this
                    // item.
                    if (!val.key) return matchingEvents;
                    // Extract the key and value from the `mixed` object.
                    key = val.key;
                    val = val.value;
                }

                if (normalize(key) === normalizedEvent) {
                    matchingEvents.push(val);
                }

                return matchingEvents;
            }, [], events);
        };

        /**
         * Invoke a `method` that may or may not exist on the prototype with `args`,
         * queueing or not depending on whether the integration is "ready". Don't
         * trust the method call, since it contains integration party code.
         *
         * @api private
         * @param {string} method
         * @param {...*} args
         */

        exports.invoke = function(method) {
            if (!this[method]) return;
            var args = Array.prototype.slice.call(arguments, 1);
            if (!this._ready) return this.queue(method, args);
            var ret;

            try {
                this.debug('%s with %o', method, args);
                ret = this[method].apply(this, args);
            } catch (e) {
                this.debug('error %o calling %s with %o', e, method, args);
            }

            return ret;
        };

        /**
         * Queue a `method` with `args`. If the integration assumes an initial
         * pageview, then let the first call to `page` pass through.
         *
         * @api private
         * @param {string} method
         * @param {Array} args
         */

        exports.queue = function(method, args) {
            if (method === 'page' && this._assumesPageview && !this._initialized) {
                return this.page.apply(this, args);
            }

            this._queue.push({
                method: method,
                args: args
            });
        };

        /**
         * Flush the internal queue.
         *
         * @api private
         */

        exports.flush = function() {
            this._ready = true;
            var self = this;

            each(this._queue, function(call) {
                self[call.method].apply(self, call.args);
            });

            // Empty the queue.
            this._queue.length = 0;
        };

        /**
         * Reset the integration, removing its global variables.
         *
         * @api private
         */

        exports.reset = function() {
            for (var i = 0; i < this.globals.length; i++) {
                window[this.globals[i]] = undefined;
            }

            window.setTimeout = setTimeout;
            window.setInterval = setInterval;
            window.onerror = onerror;
            window.onload = onload;
        };

        /**
         * Load a tag by `name`.
         *
         * @param {string} name The name of the tag.
         * @param {Object} locals Locals used to populate the tag's template variables
         * (e.g. `userId` in '<img src="https://whatever.com/{{ userId }}">').
         * @param {Function} [callback=noop] A callback, invoked when the tag finishes
         * loading.
         */

        exports.load = function(name, locals, callback) {
            // Argument shuffling
            if (typeof name === 'function') {
                callback = name;
                locals = null;
                name = null;
            }
            if (name && typeof name === 'object') {
                callback = locals;
                locals = name;
                name = null;
            }
            if (typeof locals === 'function') {
                callback = locals;
                locals = null;
            }

            // Default arguments
            name = name || 'library';
            locals = locals || {};

            locals = this.locals(locals);
            var template = this.templates[name];
            if (!template) throw new Error(fmt('template "%s" not defined.', name));
            var attrs = render(template, locals);
            callback = callback || noop;
            var self = this;
            var el;

            switch (template.type) {
                case 'img':
                    attrs.width = 1;
                    attrs.height = 1;
                    el = loadImage(attrs, callback);
                    break;
                case 'script':
                    el = loadScript(attrs, function(err) {
                        if (!err) return callback();
                        self.debug('error loading "%s" error="%s"', self.name, err);
                    });
                    // TODO: hack until refactoring load-script
                    delete attrs.src;
                    each(attrs, function(key, val) {
                        el.setAttribute(key, val);
                    });
                    break;
                case 'iframe':
                    el = loadIframe(attrs, callback);
                    break;
                default:
                    // No default case
            }

            return el;
        };

        /**
         * Locals for tag templates.
         *
         * By default it includes a cache buster and all of the options.
         *
         * @param {Object} [locals]
         * @return {Object}
         */

        exports.locals = function(locals) {
            locals = locals || {};
            var cache = Math.floor(new Date().getTime() / 3600000);
            if (!locals.hasOwnProperty('cache')) locals.cache = cache;
            each(this.options, function(key, val) {
                if (!locals.hasOwnProperty(key)) locals[key] = val;
            });
            return locals;
        };

        /**
         * Simple way to emit ready.
         *
         * @api public
         */

        exports.ready = function() {
            this.emit('ready');
        };

        /**
         * Wrap the initialize method in an exists check, so we don't have to do it for
         * every single integration.
         *
         * @api private
         */

        exports._wrapInitialize = function() {
            var initialize = this.initialize;
            this.initialize = function() {
                this.debug('initialize');
                this._initialized = true;
                var ret = initialize.apply(this, arguments);
                this.emit('initialize');
                return ret;
            };

            if (this._assumesPageview) this.initialize = after(2, this.initialize);
        };

        /**
         * Wrap the page method to call `initialize` instead if the integration assumes
         * a pageview.
         *
         * @api private
         */

        exports._wrapPage = function() {
            var page = this.page;
            this.page = function() {
                if (this._assumesPageview && !this._initialized) {
                    return this.initialize.apply(this, arguments);
                }

                return page.apply(this, arguments);
            };
        };

        /**
         * Wrap the track method to call other ecommerce methods if available depending
         * on the `track.event()`.
         *
         * @api private
         */

        exports._wrapTrack = function() {
            var t = this.track;
            this.track = function(track) {
                var event = track.event();
                var called;
                var ret;

                for (var method in events) {
                    if (has.call(events, method)) {
                        var regexp = events[method];
                        if (!this[method]) continue;
                        if (!regexp.test(event)) continue;
                        ret = this[method].apply(this, arguments);
                        called = true;
                        break;
                    }
                }

                if (!called) ret = t.apply(this, arguments);
                return ret;
            };
        };

        /**
         * TODO: Document me
         *
         * @api private
         * @param {Object} attrs
         * @param {Function} fn
         * @return {undefined}
         */

        function loadImage(attrs, fn) {
            fn = fn || function() {};
            var img = new Image();
            img.onerror = error(fn, 'failed to load pixel', img);
            img.onload = function() {
                fn();
            };
            img.src = attrs.src;
            img.width = 1;
            img.height = 1;
            return img;
        }

        /**
         * TODO: Document me
         *
         * @api private
         * @param {Function} fn
         * @param {string} message
         * @param {Element} img
         * @return {Function}
         */

        function error(fn, message, img) {
            return function(e) {
                e = e || window.event;
                var err = new Error(message);
                err.event = e;
                err.source = img;
                fn(err);
            };
        }

        /**
         * Render template + locals into an `attrs` object.
         *
         * @api private
         * @param {Object} template
         * @param {Object} locals
         * @return {Object}
         */

        function render(template, locals) {
            return foldl(function(attrs, val, key) {
                attrs[key] = val.replace(/\{\{\ *(\w+)\ *\}\}/g, function(_, $1) {
                    return locals[$1];
                });
                return attrs;
            }, {}, template.attrs);
        }

    }, {
        "emitter": 137,
        "after": 138,
        "each": 139,
        "analytics-events": 140,
        "fmt": 141,
        "foldl": 142,
        "load-iframe": 143,
        "load-script": 144,
        "to-no-case": 145,
        "next-tick": 146,
        "type": 147
    }],
    137: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var index = require('indexof');

        /**
         * Expose `Emitter`.
         */

        module.exports = Emitter;

        /**
         * Initialize a new `Emitter`.
         *
         * @api public
         */

        function Emitter(obj) {
            if (obj) return mixin(obj);
        };

        /**
         * Mixin the emitter properties.
         *
         * @param {Object} obj
         * @return {Object}
         * @api private
         */

        function mixin(obj) {
            for (var key in Emitter.prototype) {
                obj[key] = Emitter.prototype[key];
            }
            return obj;
        }

        /**
         * Listen on the given `event` with `fn`.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.on =
            Emitter.prototype.addEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks[event] = this._callbacks[event] || [])
                .push(fn);
                return this;
            };

        /**
         * Adds an `event` listener that will be invoked a single
         * time then automatically removed.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.once = function(event, fn) {
            var self = this;
            this._callbacks = this._callbacks || {};

            function on() {
                self.off(event, on);
                fn.apply(this, arguments);
            }

            fn._off = on;
            this.on(event, on);
            return this;
        };

        /**
         * Remove the given callback for `event` or all
         * registered callbacks.
         *
         * @param {String} event
         * @param {Function} fn
         * @return {Emitter}
         * @api public
         */

        Emitter.prototype.off =
            Emitter.prototype.removeListener =
            Emitter.prototype.removeAllListeners =
            Emitter.prototype.removeEventListener = function(event, fn) {
                this._callbacks = this._callbacks || {};

                // all
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this;
                }

                // specific event
                var callbacks = this._callbacks[event];
                if (!callbacks) return this;

                // remove all handlers
                if (1 == arguments.length) {
                    delete this._callbacks[event];
                    return this;
                }

                // remove specific handler
                var i = index(callbacks, fn._off || fn);
                if (~i) callbacks.splice(i, 1);
                return this;
            };

        /**
         * Emit `event` with the given args.
         *
         * @param {String} event
         * @param {Mixed} ...
         * @return {Emitter}
         */

        Emitter.prototype.emit = function(event) {
            this._callbacks = this._callbacks || {};
            var args = [].slice.call(arguments, 1),
                callbacks = this._callbacks[event];

            if (callbacks) {
                callbacks = callbacks.slice(0);
                for (var i = 0, len = callbacks.length; i < len; ++i) {
                    callbacks[i].apply(this, args);
                }
            }

            return this;
        };

        /**
         * Return array of callbacks for `event`.
         *
         * @param {String} event
         * @return {Array}
         * @api public
         */

        Emitter.prototype.listeners = function(event) {
            this._callbacks = this._callbacks || {};
            return this._callbacks[event] || [];
        };

        /**
         * Check if this emitter has `event` handlers.
         *
         * @param {String} event
         * @return {Boolean}
         * @api public
         */

        Emitter.prototype.hasListeners = function(event) {
            return !!this.listeners(event).length;
        };

    }, {
        "indexof": 148
    }],
    148: [function(require, module, exports) {
        module.exports = function(arr, obj) {
            if (arr.indexOf) return arr.indexOf(obj);
            for (var i = 0; i < arr.length; ++i) {
                if (arr[i] === obj) return i;
            }
            return -1;
        };
    }, {}],
    138: [function(require, module, exports) {

        module.exports = function after(times, func) {
            // After 0, really?
            if (times <= 0) return func();

            // That's more like it.
            return function() {
                if (--times < 1) {
                    return func.apply(this, arguments);
                }
            };
        };
    }, {}],
    139: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        try {
            var type = require('type');
        } catch (err) {
            var type = require('component-type');
        }

        var toFunction = require('to-function');

        /**
         * HOP reference.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Iterate the given `obj` and invoke `fn(val, i)`
         * in optional context `ctx`.
         *
         * @param {String|Array|Object} obj
         * @param {Function} fn
         * @param {Object} [ctx]
         * @api public
         */

        module.exports = function(obj, fn, ctx) {
            fn = toFunction(fn);
            ctx = ctx || this;
            switch (type(obj)) {
                case 'array':
                    return array(obj, fn, ctx);
                case 'object':
                    if ('number' == typeof obj.length) return array(obj, fn, ctx);
                    return object(obj, fn, ctx);
                case 'string':
                    return string(obj, fn, ctx);
            }
        };

        /**
         * Iterate string chars.
         *
         * @param {String} obj
         * @param {Function} fn
         * @param {Object} ctx
         * @api private
         */

        function string(obj, fn, ctx) {
            for (var i = 0; i < obj.length; ++i) {
                fn.call(ctx, obj.charAt(i), i);
            }
        }

        /**
         * Iterate object keys.
         *
         * @param {Object} obj
         * @param {Function} fn
         * @param {Object} ctx
         * @api private
         */

        function object(obj, fn, ctx) {
            for (var key in obj) {
                if (has.call(obj, key)) {
                    fn.call(ctx, key, obj[key]);
                }
            }
        }

        /**
         * Iterate array-ish.
         *
         * @param {Array|Object} obj
         * @param {Function} fn
         * @param {Object} ctx
         * @api private
         */

        function array(obj, fn, ctx) {
            for (var i = 0; i < obj.length; ++i) {
                fn.call(ctx, obj[i], i);
            }
        }

    }, {
        "type": 147,
        "component-type": 147,
        "to-function": 149
    }],
    147: [function(require, module, exports) {

        /**
         * toString ref.
         */

        var toString = Object.prototype.toString;

        /**
         * Return the type of `val`.
         *
         * @param {Mixed} val
         * @return {String}
         * @api public
         */

        module.exports = function(val) {
            switch (toString.call(val)) {
                case '[object Function]':
                    return 'function';
                case '[object Date]':
                    return 'date';
                case '[object RegExp]':
                    return 'regexp';
                case '[object Arguments]':
                    return 'arguments';
                case '[object Array]':
                    return 'array';
                case '[object String]':
                    return 'string';
            }

            if (val === null) return 'null';
            if (val === undefined) return 'undefined';
            if (val && val.nodeType === 1) return 'element';
            if (val === Object(val)) return 'object';

            return typeof val;
        };

    }, {}],
    149: [function(require, module, exports) {

        /**
         * Module Dependencies
         */

        var expr;
        try {
            expr = require('props');
        } catch (e) {
            expr = require('component-props');
        }

        /**
         * Expose `toFunction()`.
         */

        module.exports = toFunction;

        /**
         * Convert `obj` to a `Function`.
         *
         * @param {Mixed} obj
         * @return {Function}
         * @api private
         */

        function toFunction(obj) {
            switch ({}.toString.call(obj)) {
                case '[object Object]':
                    return objectToFunction(obj);
                case '[object Function]':
                    return obj;
                case '[object String]':
                    return stringToFunction(obj);
                case '[object RegExp]':
                    return regexpToFunction(obj);
                default:
                    return defaultToFunction(obj);
            }
        }

        /**
         * Default to strict equality.
         *
         * @param {Mixed} val
         * @return {Function}
         * @api private
         */

        function defaultToFunction(val) {
            return function(obj) {
                return val === obj;
            };
        }

        /**
         * Convert `re` to a function.
         *
         * @param {RegExp} re
         * @return {Function}
         * @api private
         */

        function regexpToFunction(re) {
            return function(obj) {
                return re.test(obj);
            };
        }

        /**
         * Convert property `str` to a function.
         *
         * @param {String} str
         * @return {Function}
         * @api private
         */

        function stringToFunction(str) {
            // immediate such as "> 20"
            if (/^ *\W+/.test(str)) return new Function('_', 'return _ ' + str);

            // properties such as "name.first" or "age > 18" or "age > 18 && age < 36"
            return new Function('_', 'return ' + get(str));
        }

        /**
         * Convert `object` to a function.
         *
         * @param {Object} object
         * @return {Function}
         * @api private
         */

        function objectToFunction(obj) {
            var match = {};
            for (var key in obj) {
                match[key] = typeof obj[key] === 'string' ? defaultToFunction(obj[key]) : toFunction(obj[key]);
            }
            return function(val) {
                if (typeof val !== 'object') return false;
                for (var key in match) {
                    if (!(key in val)) return false;
                    if (!match[key](val[key])) return false;
                }
                return true;
            };
        }

        /**
         * Built the getter function. Supports getter style functions
         *
         * @param {String} str
         * @return {String}
         * @api private
         */

        function get(str) {
            var props = expr(str);
            if (!props.length) return '_.' + str;

            var val, i, prop;
            for (i = 0; i < props.length; i++) {
                prop = props[i];
                val = '_.' + prop;
                val = "('function' == typeof " + val + " ? " + val + "() : " + val + ")";

                // mimic negative lookbehind to avoid problems with nested properties
                str = stripNested(prop, str, val);
            }

            return str;
        }

        /**
         * Mimic negative lookbehind to avoid problems with nested properties.
         *
         * See: http://blog.stevenlevithan.com/archives/mimic-lookbehind-javascript
         *
         * @param {String} prop
         * @param {String} str
         * @param {String} val
         * @return {String}
         * @api private
         */

        function stripNested(prop, str, val) {
            return str.replace(new RegExp('(\\.)?' + prop, 'g'), function($0, $1) {
                return $1 ? $0 : val;
            });
        }

    }, {
        "props": 150,
        "component-props": 150
    }],
    150: [function(require, module, exports) {
        /**
         * Global Names
         */

        var globals = /\b(this|Array|Date|Object|Math|JSON)\b/g;

        /**
         * Return immediate identifiers parsed from `str`.
         *
         * @param {String} str
         * @param {String|Function} map function or prefix
         * @return {Array}
         * @api public
         */

        module.exports = function(str, fn) {
            var p = unique(props(str));
            if (fn && 'string' == typeof fn) fn = prefixed(fn);
            if (fn) return map(str, p, fn);
            return p;
        };

        /**
         * Return immediate identifiers in `str`.
         *
         * @param {String} str
         * @return {Array}
         * @api private
         */

        function props(str) {
            return str
                .replace(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\//g, '')
                .replace(globals, '')
                .match(/[$a-zA-Z_]\w*/g) || [];
        }

        /**
         * Return `str` with `props` mapped with `fn`.
         *
         * @param {String} str
         * @param {Array} props
         * @param {Function} fn
         * @return {String}
         * @api private
         */

        function map(str, props, fn) {
            var re = /\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^/]+)\/|[a-zA-Z_]\w*/g;
            return str.replace(re, function(_) {
                if ('(' == _[_.length - 1]) return fn(_);
                if (!~props.indexOf(_)) return _;
                return fn(_);
            });
        }

        /**
         * Return unique array.
         *
         * @param {Array} arr
         * @return {Array}
         * @api private
         */

        function unique(arr) {
            var ret = [];

            for (var i = 0; i < arr.length; i++) {
                if (~ret.indexOf(arr[i])) continue;
                ret.push(arr[i]);
            }

            return ret;
        }

        /**
         * Map with prefix `str`.
         */

        function prefixed(str) {
            return function(_) {
                return str + _;
            };
        }

    }, {}],
    140: [function(require, module, exports) {

        module.exports = {
            removedProduct: /^[ _]?removed[ _]?product[ _]?$/i,
            viewedProduct: /^[ _]?viewed[ _]?product[ _]?$/i,
            viewedProductCategory: /^[ _]?viewed[ _]?product[ _]?category[ _]?$/i,
            addedProduct: /^[ _]?added[ _]?product[ _]?$/i,
            completedOrder: /^[ _]?completed[ _]?order[ _]?$/i,
            startedOrder: /^[ _]?started[ _]?order[ _]?$/i,
            updatedOrder: /^[ _]?updated[ _]?order[ _]?$/i,
            refundedOrder: /^[ _]?refunded?[ _]?order[ _]?$/i,
            viewedProductDetails: /^[ _]?viewed[ _]?product[ _]?details?[ _]?$/i,
            clickedProduct: /^[ _]?clicked[ _]?product[ _]?$/i,
            viewedPromotion: /^[ _]?viewed[ _]?promotion?[ _]?$/i,
            clickedPromotion: /^[ _]?clicked[ _]?promotion?[ _]?$/i,
            viewedCheckoutStep: /^[ _]?viewed[ _]?checkout[ _]?step[ _]?$/i,
            completedCheckoutStep: /^[ _]?completed[ _]?checkout[ _]?step[ _]?$/i
        };

    }, {}],
    141: [function(require, module, exports) {

        /**
         * toString.
         */

        var toString = window.JSON ? JSON.stringify : function(_) {
            return String(_);
        };

        /**
         * Export `fmt`
         */

        module.exports = fmt;

        /**
         * Formatters
         */

        fmt.o = toString;
        fmt.s = String;
        fmt.d = parseInt;

        /**
         * Format the given `str`.
         *
         * @param {String} str
         * @param {...} args
         * @return {String}
         * @api public
         */

        function fmt(str) {
            var args = [].slice.call(arguments, 1);
            var j = 0;

            return str.replace(/%([a-z])/gi, function(_, f) {
                return fmt[f] ? fmt[f](args[j++]) : _ + f;
            });
        }

    }, {}],
    142: [function(require, module, exports) {
        'use strict';

        /**
         * Module dependencies.
         */

        // XXX: Hacky fix for Duo not supporting scoped modules
        var each;
        try {
            each = require('@ndhoule/each');
        } catch (e) {
            each = require('each');
        }

        /**
         * Reduces all the values in a collection down into a single value. Does so by iterating through the
         * collection from left to right, repeatedly calling an `iterator` function and passing to it four
         * arguments: `(accumulator, value, index, collection)`.
         *
         * Returns the final return value of the `iterator` function.
         *
         * @name foldl
         * @api public
         * @param {Function} iterator The function to invoke per iteration.
         * @param {*} accumulator The initial accumulator value, passed to the first invocation of `iterator`.
         * @param {Array|Object} collection The collection to iterate over.
         * @return {*} The return value of the final call to `iterator`.
         * @example
         * foldl(function(total, n) {
         *   return total + n;
         * }, 0, [1, 2, 3]);
         * //=> 6
         *
         * var phonebook = { bob: '555-111-2345', tim: '655-222-6789', sheila: '655-333-1298' };
         *
         * foldl(function(results, phoneNumber) {
         *  if (phoneNumber[0] === '6') {
         *    return results.concat(phoneNumber);
         *  }
         *  return results;
         * }, [], phonebook);
         * // => ['655-222-6789', '655-333-1298']
         */

        var foldl = function foldl(iterator, accumulator, collection) {
            if (typeof iterator !== 'function') {
                throw new TypeError('Expected a function but received a ' + typeof iterator);
            }

            each(function(val, i, collection) {
                accumulator = iterator(accumulator, val, i, collection);
            }, collection);

            return accumulator;
        };

        /**
         * Exports.
         */

        module.exports = foldl;

    }, {
        "each": 151
    }],
    151: [function(require, module, exports) {
        'use strict';

        /**
         * Module dependencies.
         */

        // XXX: Hacky fix for Duo not supporting scoped modules
        var keys;
        try {
            keys = require('@ndhoule/keys');
        } catch (e) {
            keys = require('keys');
        }

        /**
         * Object.prototype.toString reference.
         */

        var objToString = Object.prototype.toString;

        /**
         * Tests if a value is a number.
         *
         * @name isNumber
         * @api private
         * @param {*} val The value to test.
         * @return {boolean} Returns `true` if `val` is a number, otherwise `false`.
         */

        // TODO: Move to library
        var isNumber = function isNumber(val) {
            var type = typeof val;
            return type === 'number' || (type === 'object' && objToString.call(val) === '[object Number]');
        };

        /**
         * Tests if a value is an array.
         *
         * @name isArray
         * @api private
         * @param {*} val The value to test.
         * @return {boolean} Returns `true` if the value is an array, otherwise `false`.
         */

        // TODO: Move to library
        var isArray = typeof Array.isArray === 'function' ? Array.isArray : function isArray(val) {
            return objToString.call(val) === '[object Array]';
        };

        /**
         * Tests if a value is array-like. Array-like means the value is not a function and has a numeric
         * `.length` property.
         *
         * @name isArrayLike
         * @api private
         * @param {*} val
         * @return {boolean}
         */

        // TODO: Move to library
        var isArrayLike = function isArrayLike(val) {
            return val != null && (isArray(val) || (val !== 'function' && isNumber(val.length)));
        };

        /**
         * Internal implementation of `each`. Works on arrays and array-like data structures.
         *
         * @name arrayEach
         * @api private
         * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
         * @param {Array} array The array(-like) structure to iterate over.
         * @return {undefined}
         */

        var arrayEach = function arrayEach(iterator, array) {
            for (var i = 0; i < array.length; i += 1) {
                // Break iteration early if `iterator` returns `false`
                if (iterator(array[i], i, array) === false) {
                    break;
                }
            }
        };

        /**
         * Internal implementation of `each`. Works on objects.
         *
         * @name baseEach
         * @api private
         * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
         * @param {Object} object The object to iterate over.
         * @return {undefined}
         */

        var baseEach = function baseEach(iterator, object) {
            var ks = keys(object);

            for (var i = 0; i < ks.length; i += 1) {
                // Break iteration early if `iterator` returns `false`
                if (iterator(object[ks[i]], ks[i], object) === false) {
                    break;
                }
            }
        };

        /**
         * Iterate over an input collection, invoking an `iterator` function for each element in the
         * collection and passing to it three arguments: `(value, index, collection)`. The `iterator`
         * function can end iteration early by returning `false`.
         *
         * @name each
         * @api public
         * @param {Function(value, key, collection)} iterator The function to invoke per iteration.
         * @param {Array|Object|string} collection The collection to iterate over.
         * @return {undefined} Because `each` is run only for side effects, always returns `undefined`.
         * @example
         * var log = console.log.bind(console);
         *
         * each(log, ['a', 'b', 'c']);
         * //-> 'a', 0, ['a', 'b', 'c']
         * //-> 'b', 1, ['a', 'b', 'c']
         * //-> 'c', 2, ['a', 'b', 'c']
         * //=> undefined
         *
         * each(log, 'tim');
         * //-> 't', 2, 'tim'
         * //-> 'i', 1, 'tim'
         * //-> 'm', 0, 'tim'
         * //=> undefined
         *
         * // Note: Iteration order not guaranteed across environments
         * each(log, { name: 'tim', occupation: 'enchanter' });
         * //-> 'tim', 'name', { name: 'tim', occupation: 'enchanter' }
         * //-> 'enchanter', 'occupation', { name: 'tim', occupation: 'enchanter' }
         * //=> undefined
         */

        var each = function each(iterator, collection) {
            return (isArrayLike(collection) ? arrayEach : baseEach).call(this, iterator, collection);
        };

        /**
         * Exports.
         */

        module.exports = each;

    }, {
        "keys": 152
    }],
    152: [function(require, module, exports) {
        'use strict';

        /**
         * charAt reference.
         */

        var strCharAt = String.prototype.charAt;

        /**
         * Returns the character at a given index.
         *
         * @param {string} str
         * @param {number} index
         * @return {string|undefined}
         */

        // TODO: Move to a library
        var charAt = function(str, index) {
            return strCharAt.call(str, index);
        };

        /**
         * hasOwnProperty reference.
         */

        var hop = Object.prototype.hasOwnProperty;

        /**
         * Object.prototype.toString reference.
         */

        var toStr = Object.prototype.toString;

        /**
         * hasOwnProperty, wrapped as a function.
         *
         * @name has
         * @api private
         * @param {*} context
         * @param {string|number} prop
         * @return {boolean}
         */

        // TODO: Move to a library
        var has = function has(context, prop) {
            return hop.call(context, prop);
        };

        /**
         * Returns true if a value is a string, otherwise false.
         *
         * @name isString
         * @api private
         * @param {*} val
         * @return {boolean}
         */

        // TODO: Move to a library
        var isString = function isString(val) {
            return toStr.call(val) === '[object String]';
        };

        /**
         * Returns true if a value is array-like, otherwise false. Array-like means a
         * value is not null, undefined, or a function, and has a numeric `length`
         * property.
         *
         * @name isArrayLike
         * @api private
         * @param {*} val
         * @return {boolean}
         */

        // TODO: Move to a library
        var isArrayLike = function isArrayLike(val) {
            return val != null && (typeof val !== 'function' && typeof val.length === 'number');
        };


        /**
         * indexKeys
         *
         * @name indexKeys
         * @api private
         * @param {} target
         * @param {} pred
         * @return {Array}
         */

        var indexKeys = function indexKeys(target, pred) {
            pred = pred || has;
            var results = [];

            for (var i = 0, len = target.length; i < len; i += 1) {
                if (pred(target, i)) {
                    results.push(String(i));
                }
            }

            return results;
        };

        /**
         * Returns an array of all the owned
         *
         * @name objectKeys
         * @api private
         * @param {*} target
         * @param {Function} pred Predicate function used to include/exclude values from
         * the resulting array.
         * @return {Array}
         */

        var objectKeys = function objectKeys(target, pred) {
            pred = pred || has;
            var results = [];


            for (var key in target) {
                if (pred(target, key)) {
                    results.push(String(key));
                }
            }

            return results;
        };

        /**
         * Creates an array composed of all keys on the input object. Ignores any non-enumerable properties.
         * More permissive than the native `Object.keys` function (non-objects will not throw errors).
         *
         * @name keys
         * @api public
         * @category Object
         * @param {Object} source The value to retrieve keys from.
         * @return {Array} An array containing all the input `source`'s keys.
         * @example
         * keys({ likes: 'avocado', hates: 'pineapple' });
         * //=> ['likes', 'pineapple'];
         *
         * // Ignores non-enumerable properties
         * var hasHiddenKey = { name: 'Tim' };
         * Object.defineProperty(hasHiddenKey, 'hidden', {
         *   value: 'i am not enumerable!',
         *   enumerable: false
         * })
         * keys(hasHiddenKey);
         * //=> ['name'];
         *
         * // Works on arrays
         * keys(['a', 'b', 'c']);
         * //=> ['0', '1', '2']
         *
         * // Skips unpopulated indices in sparse arrays
         * var arr = [1];
         * arr[4] = 4;
         * keys(arr);
         * //=> ['0', '4']
         */

        module.exports = function keys(source) {
            if (source == null) {
                return [];
            }

            // IE6-8 compatibility (string)
            if (isString(source)) {
                return indexKeys(source, charAt);
            }

            // IE6-8 compatibility (arguments)
            if (isArrayLike(source)) {
                return indexKeys(source, has);
            }

            return objectKeys(source);
        };

    }, {}],
    143: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var onload = require('script-onload');
        var tick = require('next-tick');
        var type = require('type');

        /**
         * Expose `loadScript`.
         *
         * @param {Object} options
         * @param {Function} fn
         * @api public
         */

        module.exports = function loadIframe(options, fn) {
            if (!options) throw new Error('Cant load nothing...');

            // Allow for the simplest case, just passing a `src` string.
            if ('string' == type(options)) options = {
                src: options
            };

            var https = document.location.protocol === 'https:' ||
                document.location.protocol === 'chrome-extension:';

            // If you use protocol relative URLs, third-party scripts like Google
            // Analytics break when testing with `file:` so this fixes that.
            if (options.src && options.src.indexOf('//') === 0) {
                options.src = https ? 'https:' + options.src : 'http:' + options.src;
            }

            // Allow them to pass in different URLs depending on the protocol.
            if (https && options.https) options.src = options.https;
            else if (!https && options.http) options.src = options.http;

            // Make the `<iframe>` element and insert it before the first iframe on the
            // page, which is guaranteed to exist since this Javaiframe is running.
            var iframe = document.createElement('iframe');
            iframe.src = options.src;
            iframe.width = options.width || 1;
            iframe.height = options.height || 1;
            iframe.style.display = 'none';

            // If we have a fn, attach event handlers, even in IE. Based off of
            // the Third-Party Javascript script loading example:
            // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
            if ('function' == type(fn)) {
                onload(iframe, fn);
            }

            tick(function() {
                // Append after event listeners are attached for IE.
                var firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode.insertBefore(iframe, firstScript);
            });

            // Return the iframe element in case they want to do anything special, like
            // give it an ID or attributes.
            return iframe;
        };
    }, {
        "script-onload": 153,
        "next-tick": 146,
        "type": 134
    }],
    153: [function(require, module, exports) {

        // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html

        /**
         * Invoke `fn(err)` when the given `el` script loads.
         *
         * @param {Element} el
         * @param {Function} fn
         * @api public
         */

        module.exports = function(el, fn) {
            return el.addEventListener ? add(el, fn) : attach(el, fn);
        };

        /**
         * Add event listener to `el`, `fn()`.
         *
         * @param {Element} el
         * @param {Function} fn
         * @api private
         */

        function add(el, fn) {
            el.addEventListener('load', function(_, e) {
                fn(null, e);
            }, false);
            el.addEventListener('error', function(e) {
                var err = new Error('script error "' + el.src + '"');
                err.event = e;
                fn(err);
            }, false);
        }

        /**
         * Attach event.
         *
         * @param {Element} el
         * @param {Function} fn
         * @api private
         */

        function attach(el, fn) {
            el.attachEvent('onreadystatechange', function(e) {
                if (!/complete|loaded/.test(el.readyState)) return;
                fn(null, e);
            });
            el.attachEvent('onerror', function(e) {
                var err = new Error('failed to load the script "' + el.src + '"');
                err.event = e || window.event;
                fn(err);
            });
        }

    }, {}],
    146: [function(require, module, exports) {
        "use strict"

        if (typeof setImmediate == 'function') {
            module.exports = function(f) {
                setImmediate(f)
            }
        }
        // legacy node.js
        else if (typeof process != 'undefined' && typeof process.nextTick == 'function') {
            module.exports = process.nextTick
        }
        // fallback for other environments / postMessage behaves badly on IE8
        else if (typeof window == 'undefined' || window.ActiveXObject || !window.postMessage) {
            module.exports = function(f) {
                setTimeout(f)
            };
        } else {
            var q = [];

            window.addEventListener('message', function() {
                var i = 0;
                while (i < q.length) {
                    try {
                        q[i++]();
                    } catch (e) {
                        q = q.slice(i);
                        window.postMessage('tic!', '*');
                        throw e;
                    }
                }
                q.length = 0;
            }, true);

            module.exports = function(fn) {
                if (!q.length) window.postMessage('tic!', '*');
                q.push(fn);
            }
        }

    }, {}],
    144: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var onload = require('script-onload');
        var tick = require('next-tick');
        var type = require('type');

        /**
         * Expose `loadScript`.
         *
         * @param {Object} options
         * @param {Function} fn
         * @api public
         */

        module.exports = function loadScript(options, fn) {
            if (!options) throw new Error('Cant load nothing...');

            // Allow for the simplest case, just passing a `src` string.
            if ('string' == type(options)) options = {
                src: options
            };

            var https = document.location.protocol === 'https:' ||
                document.location.protocol === 'chrome-extension:';

            // If you use protocol relative URLs, third-party scripts like Google
            // Analytics break when testing with `file:` so this fixes that.
            if (options.src && options.src.indexOf('//') === 0) {
                options.src = https ? 'https:' + options.src : 'http:' + options.src;
            }

            // Allow them to pass in different URLs depending on the protocol.
            if (https && options.https) options.src = options.https;
            else if (!https && options.http) options.src = options.http;

            // Make the `<script>` element and insert it before the first script on the
            // page, which is guaranteed to exist since this Javascript is running.
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = options.src;

            // If we have a fn, attach event handlers, even in IE. Based off of
            // the Third-Party Javascript script loading example:
            // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
            if ('function' == type(fn)) {
                onload(script, fn);
            }

            tick(function() {
                // Append after event listeners are attached for IE.
                var firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode.insertBefore(script, firstScript);
            });

            // Return the script element in case they want to do anything special, like
            // give it an ID or attributes.
            return script;
        };
    }, {
        "script-onload": 153,
        "next-tick": 146,
        "type": 134
    }],
    145: [function(require, module, exports) {

        /**
         * Expose `toNoCase`.
         */

        module.exports = toNoCase;


        /**
         * Test whether a string is camel-case.
         */

        var hasSpace = /\s/;
        var hasSeparator = /[\W_]/;


        /**
         * Remove any starting case from a `string`, like camel or snake, but keep
         * spaces and punctuation that may be important otherwise.
         *
         * @param {String} string
         * @return {String}
         */

        function toNoCase(string) {
            if (hasSpace.test(string)) return string.toLowerCase();
            if (hasSeparator.test(string)) return unseparate(string).toLowerCase();
            return uncamelize(string).toLowerCase();
        }


        /**
         * Separator splitter.
         */

        var separatorSplitter = /[\W_]+(.|$)/g;


        /**
         * Un-separate a `string`.
         *
         * @param {String} string
         * @return {String}
         */

        function unseparate(string) {
            return string.replace(separatorSplitter, function(m, next) {
                return next ? ' ' + next : '';
            });
        }


        /**
         * Camelcase splitter.
         */

        var camelSplitter = /(.)([A-Z]+)/g;


        /**
         * Un-camelcase a `string`.
         *
         * @param {String} string
         * @return {String}
         */

        function uncamelize(string) {
            return string.replace(camelSplitter, function(m, previous, uppers) {
                return previous + ' ' + uppers.toLowerCase().split('').join(' ');
            });
        }
    }, {}],
    131: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var Emitter = require('emitter');
        var domify = require('domify');
        var each = require('each');
        var includes = require('includes');

        /**
         * Mix in emitter.
         */

        /* eslint-disable new-cap */
        Emitter(exports);
        /* eslint-enable new-cap */

        /**
         * Add a new option to the integration by `key` with default `value`.
         *
         * @api public
         * @param {string} key
         * @param {*} value
         * @return {Integration}
         */

        exports.option = function(key, value) {
            this.prototype.defaults[key] = value;
            return this;
        };

        /**
         * Add a new mapping option.
         *
         * This will create a method `name` that will return a mapping for you to use.
         *
         * @api public
         * @param {string} name
         * @return {Integration}
         * @example
         * Integration('My Integration')
         *   .mapping('events');
         *
         * new MyIntegration().track('My Event');
         *
         * .track = function(track){
         *   var events = this.events(track.event());
         *   each(events, send);
         *  };
         */

        exports.mapping = function(name) {
            this.option(name, []);
            this.prototype[name] = function(str) {
                return this.map(this.options[name], str);
            };
            return this;
        };

        /**
         * Register a new global variable `key` owned by the integration, which will be
         * used to test whether the integration is already on the page.
         *
         * @api public
         * @param {string} key
         * @return {Integration}
         */

        exports.global = function(key) {
            this.prototype.globals.push(key);
            return this;
        };

        /**
         * Mark the integration as assuming an initial pageview, so to defer loading
         * the script until the first `page` call, noop the first `initialize`.
         *
         * @api public
         * @return {Integration}
         */

        exports.assumesPageview = function() {
            this.prototype._assumesPageview = true;
            return this;
        };

        /**
         * Mark the integration as being "ready" once `load` is called.
         *
         * @api public
         * @return {Integration}
         */

        exports.readyOnLoad = function() {
            this.prototype._readyOnLoad = true;
            return this;
        };

        /**
         * Mark the integration as being "ready" once `initialize` is called.
         *
         * @api public
         * @return {Integration}
         */

        exports.readyOnInitialize = function() {
            this.prototype._readyOnInitialize = true;
            return this;
        };

        /**
         * Define a tag to be loaded.
         *
         * @api public
         * @param {string} [name='library'] A nicename for the tag, commonly used in
         * #load. Helpful when the integration has multiple tags and you need a way to
         * specify which of the tags you want to load at a given time.
         * @param {String} str DOM tag as string or URL.
         * @return {Integration}
         */

        exports.tag = function(name, tag) {
            if (tag == null) {
                tag = name;
                name = 'library';
            }
            this.prototype.templates[name] = objectify(tag);
            return this;
        };

        /**
         * Given a string, give back DOM attributes.
         *
         * Do it in a way where the browser doesn't load images or iframes. It turns
         * out domify will load images/iframes because whenever you construct those
         * DOM elements, the browser immediately loads them.
         *
         * @api private
         * @param {string} str
         * @return {Object}
         */

        function objectify(str) {
            // replace `src` with `data-src` to prevent image loading
            str = str.replace(' src="', ' data-src="');

            var el = domify(str);
            var attrs = {};

            each(el.attributes, function(attr) {
                // then replace it back
                var name = attr.name === 'data-src' ? 'src' : attr.name;
                if (!includes(attr.name + '=', str)) return;
                attrs[name] = attr.value;
            });

            return {
                type: el.tagName.toLowerCase(),
                attrs: attrs
            };
        }

    }, {
        "emitter": 137,
        "domify": 154,
        "each": 139,
        "includes": 155
    }],
    154: [function(require, module, exports) {

        /**
         * Expose `parse`.
         */

        module.exports = parse;

        /**
         * Tests for browser support.
         */

        var div = document.createElement('div');
        // Setup
        div.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
        // Make sure that link elements get serialized correctly by innerHTML
        // This requires a wrapper element in IE
        var innerHTMLBug = !div.getElementsByTagName('link').length;
        div = undefined;

        /**
         * Wrap map from jquery.
         */

        var map = {
            legend: [1, '<fieldset>', '</fieldset>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
            // for script/link/style tags to work in IE6-8, you have to wrap
            // in a div with a non-whitespace character in front, ha!
            _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
        };

        map.td =
            map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

        map.option =
            map.optgroup = [1, '<select multiple="multiple">', '</select>'];

        map.thead =
            map.tbody =
            map.colgroup =
            map.caption =
            map.tfoot = [1, '<table>', '</table>'];

        map.polyline =
            map.ellipse =
            map.polygon =
            map.circle =
            map.text =
            map.line =
            map.path =
            map.rect =
            map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">', '</svg>'];

        /**
         * Parse `html` and return a DOM Node instance, which could be a TextNode,
         * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
         * instance, depending on the contents of the `html` string.
         *
         * @param {String} html - HTML string to "domify"
         * @param {Document} doc - The `document` instance to create the Node for
         * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
         * @api private
         */

        function parse(html, doc) {
            if ('string' != typeof html) throw new TypeError('String expected');

            // default to the global `document` object
            if (!doc) doc = document;

            // tag name
            var m = /<([\w:]+)/.exec(html);
            if (!m) return doc.createTextNode(html);

            html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

            var tag = m[1];

            // body support
            if (tag == 'body') {
                var el = doc.createElement('html');
                el.innerHTML = html;
                return el.removeChild(el.lastChild);
            }

            // wrap map
            var wrap = map[tag] || map._default;
            var depth = wrap[0];
            var prefix = wrap[1];
            var suffix = wrap[2];
            var el = doc.createElement('div');
            el.innerHTML = prefix + html + suffix;
            while (depth--) el = el.lastChild;

            // one element
            if (el.firstChild == el.lastChild) {
                return el.removeChild(el.firstChild);
            }

            // several elements
            var fragment = doc.createDocumentFragment();
            while (el.firstChild) {
                fragment.appendChild(el.removeChild(el.firstChild));
            }

            return fragment;
        }

    }, {}],
    155: [function(require, module, exports) {
        'use strict';

        /**
         * Module dependencies.
         */

        // XXX: Hacky fix for duo not supporting scoped npm packages
        var each;
        try {
            each = require('@ndhoule/each');
        } catch (e) {
            each = require('each');
        }

        /**
         * String#indexOf reference.
         */

        var strIndexOf = String.prototype.indexOf;

        /**
         * Object.is/sameValueZero polyfill.
         *
         * @api private
         * @param {*} value1
         * @param {*} value2
         * @return {boolean}
         */

        // TODO: Move to library
        var sameValueZero = function sameValueZero(value1, value2) {
            // Normal values and check for 0 / -0
            if (value1 === value2) {
                return value1 !== 0 || 1 / value1 === 1 / value2;
            }
            // NaN
            return value1 !== value1 && value2 !== value2;
        };

        /**
         * Searches a given `collection` for a value, returning true if the collection
         * contains the value and false otherwise. Can search strings, arrays, and
         * objects.
         *
         * @name includes
         * @api public
         * @param {*} searchElement The element to search for.
         * @param {Object|Array|string} collection The collection to search.
         * @return {boolean}
         * @example
         * includes(2, [1, 2, 3]);
         * //=> true
         *
         * includes(4, [1, 2, 3]);
         * //=> false
         *
         * includes(2, { a: 1, b: 2, c: 3 });
         * //=> true
         *
         * includes('a', { a: 1, b: 2, c: 3 });
         * //=> false
         *
         * includes('abc', 'xyzabc opq');
         * //=> true
         *
         * includes('nope', 'xyzabc opq');
         * //=> false
         */
        var includes = function includes(searchElement, collection) {
            var found = false;

            // Delegate to String.prototype.indexOf when `collection` is a string
            if (typeof collection === 'string') {
                return strIndexOf.call(collection, searchElement) !== -1;
            }

            // Iterate through enumerable/own array elements and object properties.
            each(function(value) {
                if (sameValueZero(value, searchElement)) {
                    found = true;
                    // Exit iteration early when found
                    return false;
                }
            }, collection);

            return found;
        };

        /**
         * Exports.
         */

        module.exports = includes;

    }, {
        "each": 151
    }],
    119: [function(require, module, exports) {
        var toSpace = require('to-space-case');


        /**
         * Expose `toSnakeCase`.
         */

        module.exports = toSnakeCase;


        /**
         * Convert a `string` to snake case.
         *
         * @param {String} string
         * @return {String}
         */


        function toSnakeCase(string) {
            return toSpace(string).replace(/\s/g, '_');
        }

    }, {
        "to-space-case": 156
    }],
    156: [function(require, module, exports) {

        var clean = require('to-no-case');


        /**
         * Expose `toSpaceCase`.
         */

        module.exports = toSpaceCase;


        /**
         * Convert a `string` to space case.
         *
         * @param {String} string
         * @return {String}
         */


        function toSpaceCase(string) {
            return clean(string).replace(/[\W_]+(.|$)/g, function(matches, match) {
                return match ? ' ' + match : '';
            });
        }
    }, {
        "to-no-case": 157
    }],
    157: [function(require, module, exports) {

        /**
         * Expose `toNoCase`.
         */

        module.exports = toNoCase;


        /**
         * Test whether a string is camel-case.
         */

        var hasSpace = /\s/;
        var hasCamel = /[a-z][A-Z]/;
        var hasSeparator = /[\W_]/;


        /**
         * Remove any starting case from a `string`, like camel or snake, but keep
         * spaces and punctuation that may be important otherwise.
         *
         * @param {String} string
         * @return {String}
         */

        function toNoCase(string) {
            if (hasSpace.test(string)) return string.toLowerCase();

            if (hasSeparator.test(string)) string = unseparate(string);
            if (hasCamel.test(string)) string = uncamelize(string);
            return string.toLowerCase();
        }


        /**
         * Separator splitter.
         */

        var separatorSplitter = /[\W_]+(.|$)/g;


        /**
         * Un-separate a `string`.
         *
         * @param {String} string
         * @return {String}
         */

        function unseparate(string) {
            return string.replace(separatorSplitter, function(m, next) {
                return next ? ' ' + next : '';
            });
        }


        /**
         * Camelcase splitter.
         */

        var camelSplitter = /(.)([A-Z]+)/g;


        /**
         * Un-camelcase a `string`.
         *
         * @param {String} string
         * @return {String}
         */

        function uncamelize(string) {
            return string.replace(camelSplitter, function(m, previous, uppers) {
                return previous + ' ' + uppers.toLowerCase().split('').join(' ');
            });
        }
    }, {}],
    120: [function(require, module, exports) {

        /**
         * Protocol.
         */

        module.exports = function(url) {
            switch (arguments.length) {
                case 0:
                    return check();
                case 1:
                    return transform(url);
            }
        };


        /**
         * Transform a protocol-relative `url` to the use the proper protocol.
         *
         * @param {String} url
         * @return {String}
         */

        function transform(url) {
            return check() ? 'https:' + url : 'http:' + url;
        }


        /**
         * Check whether `https:` be used for loading scripts.
         *
         * @return {Boolean}
         */

        function check() {
            return (
                location.protocol == 'https:' ||
                location.protocol == 'chrome-extension:'
            );
        }
    }, {}],
    121: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var type = require('type');

        /**
         * HOP reference.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Iterate the given `obj` and invoke `fn(val, i)`.
         *
         * @param {String|Array|Object} obj
         * @param {Function} fn
         * @api public
         */

        module.exports = function(obj, fn) {
            switch (type(obj)) {
                case 'array':
                    return array(obj, fn);
                case 'object':
                    if ('number' == typeof obj.length) return array(obj, fn);
                    return object(obj, fn);
                case 'string':
                    return string(obj, fn);
            }
        };

        /**
         * Iterate string chars.
         *
         * @param {String} obj
         * @param {Function} fn
         * @api private
         */

        function string(obj, fn) {
            for (var i = 0; i < obj.length; ++i) {
                fn(obj.charAt(i), i);
            }
        }

        /**
         * Iterate object keys.
         *
         * @param {Object} obj
         * @param {Function} fn
         * @api private
         */

        function object(obj, fn) {
            for (var key in obj) {
                if (has.call(obj, key)) {
                    fn(key, obj[key]);
                }
            }
        }

        /**
         * Iterate array-ish.
         *
         * @param {Array|Object} obj
         * @param {Function} fn
         * @api private
         */

        function array(obj, fn) {
            for (var i = 0; i < obj.length; ++i) {
                fn(obj[i], i);
            }
        }
    }, {
        "type": 134
    }],
    122: [function(require, module, exports) {

        var isEmpty = require('is-empty');

        try {
            var typeOf = require('type');
        } catch (e) {
            var typeOf = require('component-type');
        }


        /**
         * Types.
         */

        var types = [
            'arguments',
            'array',
            'boolean',
            'date',
            'element',
            'function',
            'null',
            'number',
            'object',
            'regexp',
            'string',
            'undefined'
        ];


        /**
         * Expose type checkers.
         *
         * @param {Mixed} value
         * @return {Boolean}
         */

        for (var i = 0, type; type = types[i]; i++) exports[type] = generate(type);


        /**
         * Add alias for `function` for old browsers.
         */

        exports.fn = exports['function'];


        /**
         * Expose `empty` check.
         */

        exports.empty = isEmpty;


        /**
         * Expose `nan` check.
         */

        exports.nan = function(val) {
            return exports.number(val) && val != val;
        };


        /**
         * Generate a type checker.
         *
         * @param {String} type
         * @return {Function}
         */

        function generate(type) {
            return function(value) {
                return type === typeOf(value);
            };
        }
    }, {
        "is-empty": 158,
        "type": 134,
        "component-type": 134
    }],
    158: [function(require, module, exports) {

        /**
         * Expose `isEmpty`.
         */

        module.exports = isEmpty;


        /**
         * Has.
         */

        var has = Object.prototype.hasOwnProperty;


        /**
         * Test whether a value is "empty".
         *
         * @param {Mixed} val
         * @return {Boolean}
         */

        function isEmpty(val) {
            if (null == val) return true;
            if ('number' == typeof val) return 0 === val;
            if (undefined !== val.length) return 0 === val.length;
            for (var key in val)
                if (has.call(val, key)) return false;
            return true;
        }
    }, {}],
    123: [function(require, module, exports) {

        var identity = function(_) {
            return _;
        };


        /**
         * Module exports, export
         */

        module.exports = multiple(find);
        module.exports.find = module.exports;


        /**
         * Export the replacement function, return the modified object
         */

        module.exports.replace = function(obj, key, val, options) {
            multiple(replace).call(this, obj, key, val, options);
            return obj;
        };


        /**
         * Export the delete function, return the modified object
         */

        module.exports.del = function(obj, key, options) {
            multiple(del).call(this, obj, key, null, options);
            return obj;
        };


        /**
         * Compose applying the function to a nested key
         */

        function multiple(fn) {
            return function(obj, path, val, options) {
                var normalize = options && isFunction(options.normalizer) ? options.normalizer : defaultNormalize;
                path = normalize(path);

                var key;
                var finished = false;

                while (!finished) loop();

                function loop() {
                    for (key in obj) {
                        var normalizedKey = normalize(key);
                        if (0 === path.indexOf(normalizedKey)) {
                            var temp = path.substr(normalizedKey.length);
                            if (temp.charAt(0) === '.' || temp.length === 0) {
                                path = temp.substr(1);
                                var child = obj[key];

                                // we're at the end and there is nothing.
                                if (null == child) {
                                    finished = true;
                                    return;
                                }

                                // we're at the end and there is something.
                                if (!path.length) {
                                    finished = true;
                                    return;
                                }

                                // step into child
                                obj = child;

                                // but we're done here
                                return;
                            }
                        }
                    }

                    key = undefined;
                    // if we found no matching properties
                    // on the current object, there's no match.
                    finished = true;
                }

                if (!key) return;
                if (null == obj) return obj;

                // the `obj` and `key` is one above the leaf object and key, so
                // start object: { a: { 'b.c': 10 } }
                // end object: { 'b.c': 10 }
                // end key: 'b.c'
                // this way, you can do `obj[key]` and get `10`.
                return fn(obj, key, val);
            };
        }


        /**
         * Find an object by its key
         *
         * find({ first_name : 'Calvin' }, 'firstName')
         */

        function find(obj, key) {
            if (obj.hasOwnProperty(key)) return obj[key];
        }


        /**
         * Delete a value for a given key
         *
         * del({ a : 'b', x : 'y' }, 'X' }) -> { a : 'b' }
         */

        function del(obj, key) {
            if (obj.hasOwnProperty(key)) delete obj[key];
            return obj;
        }


        /**
         * Replace an objects existing value with a new one
         *
         * replace({ a : 'b' }, 'a', 'c') -> { a : 'c' }
         */

        function replace(obj, key, val) {
            if (obj.hasOwnProperty(key)) obj[key] = val;
            return obj;
        }

        /**
         * Normalize a `dot.separated.path`.
         *
         * A.HELL(!*&#(!)O_WOR   LD.bar => ahelloworldbar
         *
         * @param {String} path
         * @return {String}
         */

        function defaultNormalize(path) {
            return path.replace(/[^a-zA-Z0-9\.]+/g, '').toLowerCase();
        }

        /**
         * Check if a value is a function.
         *
         * @param {*} val
         * @return {boolean} Returns `true` if `val` is a function, otherwise `false`.
         */

        function isFunction(val) {
            return typeof val === 'function';
        }

    }, {}],
    7: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118
    }],
    8: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    9: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "top-domain": 159
    }],
    159: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var parse = require('url').parse;

        /**
         * Expose `domain`
         */

        module.exports = domain;

        /**
         * RegExp
         */

        var regexp = /[a-z0-9][a-z0-9\-]*[a-z0-9]\.[a-z\.]{2,6}$/i;

        /**
         * Get the top domain.
         *
         * Official Grammar: http://tools.ietf.org/html/rfc883#page-56
         * Look for tlds with up to 2-6 characters.
         *
         * Example:
         *
         *      domain('http://localhost:3000/baz');
         *      // => ''
         *      domain('http://dev:3000/baz');
         *      // => ''
         *      domain('http://127.0.0.1:3000/baz');
         *      // => ''
         *      domain('http://segment.io/baz');
         *      // => 'segment.io'
         *
         * @param {String} url
         * @return {String}
         * @api public
         */

        function domain(url) {
            var host = parse(url).hostname;
            var match = host.match(regexp);
            return match ? match[0] : '';
        };

    }, {
        "url": 160
    }],
    160: [function(require, module, exports) {

        /**
         * Parse the given `url`.
         *
         * @param {String} str
         * @return {Object}
         * @api public
         */

        exports.parse = function(url) {
            var a = document.createElement('a');
            a.href = url;
            return {
                href: a.href,
                host: a.host || location.host,
                port: ('0' === a.port || '' === a.port) ? port(a.protocol) : a.port,
                hash: a.hash,
                hostname: a.hostname || location.hostname,
                pathname: a.pathname.charAt(0) != '/' ? '/' + a.pathname : a.pathname,
                protocol: !a.protocol || ':' == a.protocol ? location.protocol : a.protocol,
                search: a.search,
                query: a.search.slice(1)
            };
        };

        /**
         * Check if `url` is absolute.
         *
         * @param {String} url
         * @return {Boolean}
         * @api public
         */

        exports.isAbsolute = function(url) {
            return 0 == url.indexOf('//') || !!~url.indexOf('://');
        };

        /**
         * Check if `url` is relative.
         *
         * @param {String} url
         * @return {Boolean}
         * @api public
         */

        exports.isRelative = function(url) {
            return !exports.isAbsolute(url);
        };

        /**
         * Check if `url` is cross domain.
         *
         * @param {String} url
         * @return {Boolean}
         * @api public
         */

        exports.isCrossDomain = function(url) {
            url = exports.parse(url);
            var location = exports.parse(window.location.href);
            return url.hostname !== location.hostname || url.port !== location.port || url.protocol !== location.protocol;
        };

        /**
         * Return default port for `protocol`.
         *
         * @param  {String} protocol
         * @return {String}
         * @api private
         */
        function port(protocol) {
            switch (protocol) {
                case 'http:':
                    return 80;
                case 'https:':
                    return 443;
                default:
                    return location.port;
            }
        }

    }, {}],
    10: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122,
        "load-script": 161
    }],
    161: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var onload = require('script-onload');
        var tick = require('next-tick');
        var type = require('type');

        /**
         * Expose `loadScript`.
         *
         * @param {Object} options
         * @param {Function} fn
         * @api public
         */

        module.exports = function loadScript(options, fn) {
            if (!options) throw new Error('Cant load nothing...');

            // Allow for the simplest case, just passing a `src` string.
            if ('string' == type(options)) options = {
                src: options
            };

            var https = document.location.protocol === 'https:' ||
                document.location.protocol === 'chrome-extension:';

            // If you use protocol relative URLs, third-party scripts like Google
            // Analytics break when testing with `file:` so this fixes that.
            if (options.src && options.src.indexOf('//') === 0) {
                options.src = https ? 'https:' + options.src : 'http:' + options.src;
            }

            // Allow them to pass in different URLs depending on the protocol.
            if (https && options.https) options.src = options.https;
            else if (!https && options.http) options.src = options.http;

            // Make the `<script>` element and insert it before the first script on the
            // page, which is guaranteed to exist since this Javascript is running.
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = options.src;

            // If we have a fn, attach event handlers, even in IE. Based off of
            // the Third-Party Javascript script loading example:
            // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
            if ('function' == type(fn)) {
                onload(script, fn);
            }

            tick(function() {
                // Append after event listeners are attached for IE.
                var firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode.insertBefore(script, firstScript);
            });

            // Return the script element in case they want to do anything special, like
            // give it an ID or attributes.
            return script;
        };
    }, {
        "script-onload": 153,
        "next-tick": 146,
        "type": 134
    }],
    11: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122
    }],
    12: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    13: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118
    }],
    14: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    15: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "foldl": 142
    }],
    16: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "each": 121,
        "analytics.js-integration": 118,
        "querystring": 163
    }],
    162: [function(require, module, exports) {

        var Facade = require('./facade');

        /**
         * Expose `Facade` facade.
         */

        module.exports = Facade;

        /**
         * Expose specific-method facades.
         */

        Facade.Alias = require('./alias');
        Facade.Group = require('./group');
        Facade.Identify = require('./identify');
        Facade.Track = require('./track');
        Facade.Page = require('./page');
        Facade.Screen = require('./screen');

    }, {
        "./facade": 164,
        "./alias": 165,
        "./group": 166,
        "./identify": 167,
        "./track": 168,
        "./page": 169,
        "./screen": 170
    }],
    164: [function(require, module, exports) {

        var traverse = require('isodate-traverse');
        var isEnabled = require('./is-enabled');
        var clone = require('./utils').clone;
        var type = require('./utils').type;
        var address = require('./address');
        var objCase = require('obj-case');
        var newDate = require('new-date');

        /**
         * Expose `Facade`.
         */

        module.exports = Facade;

        /**
         * Initialize a new `Facade` with an `obj` of arguments.
         *
         * @param {Object} obj
         */

        function Facade(obj) {
            if (!obj.hasOwnProperty('timestamp')) obj.timestamp = new Date();
            else obj.timestamp = newDate(obj.timestamp);
            traverse(obj);
            this.obj = obj;
        }

        /**
         * Mixin address traits.
         */

        address(Facade.prototype);

        /**
         * Return a proxy function for a `field` that will attempt to first use methods,
         * and fallback to accessing the underlying object directly. You can specify
         * deeply nested fields too like:
         *
         *   this.proxy('options.Librato');
         *
         * @param {String} field
         */

        Facade.prototype.proxy = function(field) {
            var fields = field.split('.');
            field = fields.shift();

            // Call a function at the beginning to take advantage of facaded fields
            var obj = this[field] || this.field(field);
            if (!obj) return obj;
            if (typeof obj === 'function') obj = obj.call(this) || {};
            if (fields.length === 0) return transform(obj);

            obj = objCase(obj, fields.join('.'));
            return transform(obj);
        };

        /**
         * Directly access a specific `field` from the underlying object, returning a
         * clone so outsiders don't mess with stuff.
         *
         * @param {String} field
         * @return {Mixed}
         */

        Facade.prototype.field = function(field) {
            var obj = this.obj[field];
            return transform(obj);
        };

        /**
         * Utility method to always proxy a particular `field`. You can specify deeply
         * nested fields too like:
         *
         *   Facade.proxy('options.Librato');
         *
         * @param {String} field
         * @return {Function}
         */

        Facade.proxy = function(field) {
            return function() {
                return this.proxy(field);
            };
        };

        /**
         * Utility method to directly access a `field`.
         *
         * @param {String} field
         * @return {Function}
         */

        Facade.field = function(field) {
            return function() {
                return this.field(field);
            };
        };

        /**
         * Proxy multiple `path`.
         *
         * @param {String} path
         * @return {Array}
         */

        Facade.multi = function(path) {
            return function() {
                var multi = this.proxy(path + 's');
                if ('array' == type(multi)) return multi;
                var one = this.proxy(path);
                if (one) one = [clone(one)];
                return one || [];
            };
        };

        /**
         * Proxy one `path`.
         *
         * @param {String} path
         * @return {Mixed}
         */

        Facade.one = function(path) {
            return function() {
                var one = this.proxy(path);
                if (one) return one;
                var multi = this.proxy(path + 's');
                if ('array' == type(multi)) return multi[0];
            };
        };

        /**
         * Get the basic json object of this facade.
         *
         * @return {Object}
         */

        Facade.prototype.json = function() {
            var ret = clone(this.obj);
            if (this.type) ret.type = this.type();
            return ret;
        };

        /**
         * Get the options of a call (formerly called "context"). If you pass an
         * integration name, it will get the options for that specific integration, or
         * undefined if the integration is not enabled.
         *
         * @param {String} integration (optional)
         * @return {Object or Null}
         */

        Facade.prototype.context =
            Facade.prototype.options = function(integration) {
                var options = clone(this.obj.options || this.obj.context) || {};
                if (!integration) return clone(options);
                if (!this.enabled(integration)) return;
                var integrations = this.integrations();
                var value = integrations[integration] || objCase(integrations, integration);
                if ('boolean' == typeof value) value = {};
                return value || {};
            };

        /**
         * Check whether an integration is enabled.
         *
         * @param {String} integration
         * @return {Boolean}
         */

        Facade.prototype.enabled = function(integration) {
            var allEnabled = this.proxy('options.providers.all');
            if (typeof allEnabled !== 'boolean') allEnabled = this.proxy('options.all');
            if (typeof allEnabled !== 'boolean') allEnabled = this.proxy('integrations.all');
            if (typeof allEnabled !== 'boolean') allEnabled = true;

            var enabled = allEnabled && isEnabled(integration);
            var options = this.integrations();

            // If the integration is explicitly enabled or disabled, use that
            // First, check options.providers for backwards compatibility
            if (options.providers && options.providers.hasOwnProperty(integration)) {
                enabled = options.providers[integration];
            }

            // Next, check for the integration's existence in 'options' to enable it.
            // If the settings are a boolean, use that, otherwise it should be enabled.
            if (options.hasOwnProperty(integration)) {
                var settings = options[integration];
                if (typeof settings === 'boolean') {
                    enabled = settings;
                } else {
                    enabled = true;
                }
            }

            return enabled ? true : false;
        };

        /**
         * Get all `integration` options.
         *
         * @param {String} integration
         * @return {Object}
         * @api private
         */

        Facade.prototype.integrations = function() {
            return this.obj.integrations || this.proxy('options.providers') || this.options();
        };

        /**
         * Check whether the user is active.
         *
         * @return {Boolean}
         */

        Facade.prototype.active = function() {
            var active = this.proxy('options.active');
            if (active === null || active === undefined) active = true;
            return active;
        };

        /**
         * Get `sessionId / anonymousId`.
         *
         * @return {Mixed}
         * @api public
         */

        Facade.prototype.sessionId =
            Facade.prototype.anonymousId = function() {
                return this.field('anonymousId') || this.field('sessionId');
            };

        /**
         * Get `groupId` from `context.groupId`.
         *
         * @return {String}
         * @api public
         */

        Facade.prototype.groupId = Facade.proxy('options.groupId');

        /**
         * Get the call's "super properties" which are just traits that have been
         * passed in as if from an identify call.
         *
         * @param {Object} aliases
         * @return {Object}
         */

        Facade.prototype.traits = function(aliases) {
            var ret = this.proxy('options.traits') || {};
            var id = this.userId();
            aliases = aliases || {};

            if (id) ret.id = id;

            for (var alias in aliases) {
                var value = null == this[alias] ? this.proxy('options.traits.' + alias) : this[alias]();
                if (null == value) continue;
                ret[aliases[alias]] = value;
                delete ret[alias];
            }

            return ret;
        };

        /**
         * Add a convenient way to get the library name and version
         */

        Facade.prototype.library = function() {
            var library = this.proxy('options.library');
            if (!library) return {
                name: 'unknown',
                version: null
            };
            if (typeof library === 'string') return {
                name: library,
                version: null
            };
            return library;
        };

        /**
         * Setup some basic proxies.
         */

        Facade.prototype.userId = Facade.field('userId');
        Facade.prototype.channel = Facade.field('channel');
        Facade.prototype.timestamp = Facade.field('timestamp');
        Facade.prototype.userAgent = Facade.proxy('options.userAgent');
        Facade.prototype.ip = Facade.proxy('options.ip');

        /**
         * Return the cloned and traversed object
         *
         * @param {Mixed} obj
         * @return {Mixed}
         */

        function transform(obj) {
            var cloned = clone(obj);
            return cloned;
        }

    }, {
        "isodate-traverse": 171,
        "./is-enabled": 172,
        "./utils": 173,
        "./address": 174,
        "obj-case": 123,
        "new-date": 175
    }],
    171: [function(require, module, exports) {

        var is = require('is');
        var isodate = require('isodate');
        var each;

        try {
            each = require('each');
        } catch (err) {
            each = require('each-component');
        }

        /**
         * Expose `traverse`.
         */

        module.exports = traverse;

        /**
         * Traverse an object or array, and return a clone with all ISO strings parsed
         * into Date objects.
         *
         * @param {Object} obj
         * @return {Object}
         */

        function traverse(input, strict) {
            if (strict === undefined) strict = true;

            if (is.object(input)) return object(input, strict);
            if (is.array(input)) return array(input, strict);
            return input;
        }

        /**
         * Object traverser.
         *
         * @param {Object} obj
         * @param {Boolean} strict
         * @return {Object}
         */

        function object(obj, strict) {
            each(obj, function(key, val) {
                if (isodate.is(val, strict)) {
                    obj[key] = isodate.parse(val);
                } else if (is.object(val) || is.array(val)) {
                    traverse(val, strict);
                }
            });
            return obj;
        }

        /**
         * Array traverser.
         *
         * @param {Array} arr
         * @param {Boolean} strict
         * @return {Array}
         */

        function array(arr, strict) {
            each(arr, function(val, x) {
                if (is.object(val)) {
                    traverse(val, strict);
                } else if (isodate.is(val, strict)) {
                    arr[x] = isodate.parse(val);
                }
            });
            return arr;
        }

    }, {
        "is": 176,
        "isodate": 177,
        "each": 121
    }],
    176: [function(require, module, exports) {

        var isEmpty = require('is-empty');

        try {
            var typeOf = require('type');
        } catch (e) {
            var typeOf = require('component-type');
        }


        /**
         * Types.
         */

        var types = [
            'arguments',
            'array',
            'boolean',
            'date',
            'element',
            'function',
            'null',
            'number',
            'object',
            'regexp',
            'string',
            'undefined'
        ];


        /**
         * Expose type checkers.
         *
         * @param {Mixed} value
         * @return {Boolean}
         */

        for (var i = 0, type; type = types[i]; i++) exports[type] = generate(type);


        /**
         * Add alias for `function` for old browsers.
         */

        exports.fn = exports['function'];


        /**
         * Expose `empty` check.
         */

        exports.empty = isEmpty;


        /**
         * Expose `nan` check.
         */

        exports.nan = function(val) {
            return exports.number(val) && val != val;
        };


        /**
         * Generate a type checker.
         *
         * @param {String} type
         * @return {Function}
         */

        function generate(type) {
            return function(value) {
                return type === typeOf(value);
            };
        }
    }, {
        "is-empty": 158,
        "type": 134,
        "component-type": 134
    }],
    177: [function(require, module, exports) {

        /**
         * Matcher, slightly modified from:
         *
         * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
         */

        var matcher = /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;


        /**
         * Convert an ISO date string to a date. Fallback to native `Date.parse`.
         *
         * https://github.com/csnover/js-iso8601/blob/lax/iso8601.js
         *
         * @param {String} iso
         * @return {Date}
         */

        exports.parse = function(iso) {
            var numericKeys = [1, 5, 6, 7, 11, 12];
            var arr = matcher.exec(iso);
            var offset = 0;

            // fallback to native parsing
            if (!arr) return new Date(iso);

            // remove undefined values
            for (var i = 0, val; val = numericKeys[i]; i++) {
                arr[val] = parseInt(arr[val], 10) || 0;
            }

            // allow undefined days and months
            arr[2] = parseInt(arr[2], 10) || 1;
            arr[3] = parseInt(arr[3], 10) || 1;

            // month is 0-11
            arr[2]--;

            // allow abitrary sub-second precision
            arr[8] = arr[8] ? (arr[8] + '00').substring(0, 3) : 0;

            // apply timezone if one exists
            if (arr[4] == ' ') {
                offset = new Date().getTimezoneOffset();
            } else if (arr[9] !== 'Z' && arr[10]) {
                offset = arr[11] * 60 + arr[12];
                if ('+' == arr[10]) offset = 0 - offset;
            }

            var millis = Date.UTC(arr[1], arr[2], arr[3], arr[5], arr[6] + offset, arr[7], arr[8]);
            return new Date(millis);
        };


        /**
         * Checks whether a `string` is an ISO date string. `strict` mode requires that
         * the date string at least have a year, month and date.
         *
         * @param {String} string
         * @param {Boolean} strict
         * @return {Boolean}
         */

        exports.is = function(string, strict) {
            if (strict && false === /^\d{4}-\d{2}-\d{2}/.test(string)) return false;
            return matcher.test(string);
        };
    }, {}],
    172: [function(require, module, exports) {

        /**
         * A few integrations are disabled by default. They must be explicitly
         * enabled by setting options[Provider] = true.
         */

        var disabled = {
            Salesforce: true
        };

        /**
         * Check whether an integration should be enabled by default.
         *
         * @param {String} integration
         * @return {Boolean}
         */

        module.exports = function(integration) {
            return !disabled[integration];
        };
    }, {}],
    173: [function(require, module, exports) {

        /**
         * TODO: use component symlink, everywhere ?
         */

        try {
            exports.inherit = require('inherit');
            exports.clone = require('clone');
            exports.type = require('type');
        } catch (e) {
            exports.inherit = require('inherit-component');
            exports.clone = require('clone-component');
            exports.type = require('type-component');
        }

    }, {
        "inherit": 178,
        "clone": 179,
        "type": 134
    }],
    178: [function(require, module, exports) {

        module.exports = function(a, b) {
            var fn = function() {};
            fn.prototype = b.prototype;
            a.prototype = new fn;
            a.prototype.constructor = a;
        };
    }, {}],
    179: [function(require, module, exports) {
        /**
         * Module dependencies.
         */

        var type;
        try {
            type = require('component-type');
        } catch (_) {
            type = require('type');
        }

        /**
         * Module exports.
         */

        module.exports = clone;

        /**
         * Clones objects.
         *
         * @param {Mixed} any object
         * @api public
         */

        function clone(obj) {
            switch (type(obj)) {
                case 'object':
                    var copy = {};
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            copy[key] = clone(obj[key]);
                        }
                    }
                    return copy;

                case 'array':
                    var copy = new Array(obj.length);
                    for (var i = 0, l = obj.length; i < l; i++) {
                        copy[i] = clone(obj[i]);
                    }
                    return copy;

                case 'regexp':
                    // from millermedeiros/amd-utils - MIT
                    var flags = '';
                    flags += obj.multiline ? 'm' : '';
                    flags += obj.global ? 'g' : '';
                    flags += obj.ignoreCase ? 'i' : '';
                    return new RegExp(obj.source, flags);

                case 'date':
                    return new Date(obj.getTime());

                default: // string, number, boolean, 鈥�
                    return obj;
            }
        }

    }, {
        "component-type": 134,
        "type": 134
    }],
    174: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var get = require('obj-case');

        /**
         * Add address getters to `proto`.
         *
         * @param {Function} proto
         */

        module.exports = function(proto) {
            proto.zip = trait('postalCode', 'zip');
            proto.country = trait('country');
            proto.street = trait('street');
            proto.state = trait('state');
            proto.city = trait('city');

            function trait(a, b) {
                return function() {
                    var traits = this.traits();
                    var props = this.properties ? this.properties() : {};

                    return get(traits, 'address.' + a) || get(traits, a) || (b ? get(traits, 'address.' + b) : null) || (b ? get(traits, b) : null) || get(props, 'address.' + a) || get(props, a) || (b ? get(props, 'address.' + b) : null) || (b ? get(props, b) : null);
                };
            }
        };

    }, {
        "obj-case": 123
    }],
    175: [function(require, module, exports) {

        var is = require('is');
        var isodate = require('isodate');
        var milliseconds = require('./milliseconds');
        var seconds = require('./seconds');


        /**
         * Returns a new Javascript Date object, allowing a variety of extra input types
         * over the native Date constructor.
         *
         * @param {Date|String|Number} val
         */

        module.exports = function newDate(val) {
            if (is.date(val)) return val;
            if (is.number(val)) return new Date(toMs(val));

            // date strings
            if (isodate.is(val)) return isodate.parse(val);
            if (milliseconds.is(val)) return milliseconds.parse(val);
            if (seconds.is(val)) return seconds.parse(val);

            // fallback to Date.parse
            return new Date(val);
        };


        /**
         * If the number passed val is seconds from the epoch, turn it into milliseconds.
         * Milliseconds would be greater than 31557600000 (December 31, 1970).
         *
         * @param {Number} num
         */

        function toMs(num) {
            if (num < 31557600000) return num * 1000;
            return num;
        }
    }, {
        "is": 180,
        "isodate": 177,
        "./milliseconds": 181,
        "./seconds": 182
    }],
    180: [function(require, module, exports) {

        var isEmpty = require('is-empty'),
            typeOf = require('type');


        /**
         * Types.
         */

        var types = [
            'arguments',
            'array',
            'boolean',
            'date',
            'element',
            'function',
            'null',
            'number',
            'object',
            'regexp',
            'string',
            'undefined'
        ];


        /**
         * Expose type checkers.
         *
         * @param {Mixed} value
         * @return {Boolean}
         */

        for (var i = 0, type; type = types[i]; i++) exports[type] = generate(type);


        /**
         * Add alias for `function` for old browsers.
         */

        exports.fn = exports['function'];


        /**
         * Expose `empty` check.
         */

        exports.empty = isEmpty;


        /**
         * Expose `nan` check.
         */

        exports.nan = function(val) {
            return exports.number(val) && val != val;
        };


        /**
         * Generate a type checker.
         *
         * @param {String} type
         * @return {Function}
         */

        function generate(type) {
            return function(value) {
                return type === typeOf(value);
            };
        }
    }, {
        "is-empty": 158,
        "type": 134
    }],
    181: [function(require, module, exports) {

        /**
         * Matcher.
         */

        var matcher = /\d{13}/;


        /**
         * Check whether a string is a millisecond date string.
         *
         * @param {String} string
         * @return {Boolean}
         */

        exports.is = function(string) {
            return matcher.test(string);
        };


        /**
         * Convert a millisecond string to a date.
         *
         * @param {String} millis
         * @return {Date}
         */

        exports.parse = function(millis) {
            millis = parseInt(millis, 10);
            return new Date(millis);
        };
    }, {}],
    182: [function(require, module, exports) {

        /**
         * Matcher.
         */

        var matcher = /\d{10}/;


        /**
         * Check whether a string is a second date string.
         *
         * @param {String} string
         * @return {Boolean}
         */

        exports.is = function(string) {
            return matcher.test(string);
        };


        /**
         * Convert a second string to a date.
         *
         * @param {String} seconds
         * @return {Date}
         */

        exports.parse = function(seconds) {
            var millis = parseInt(seconds, 10) * 1000;
            return new Date(millis);
        };
    }, {}],
    165: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var inherit = require('./utils').inherit;
        var Facade = require('./facade');

        /**
         * Expose `Alias` facade.
         */

        module.exports = Alias;

        /**
         * Initialize a new `Alias` facade with a `dictionary` of arguments.
         *
         * @param {Object} dictionary
         *   @property {String} from
         *   @property {String} to
         *   @property {Object} options
         */

        function Alias(dictionary) {
            Facade.call(this, dictionary);
        }

        /**
         * Inherit from `Facade`.
         */

        inherit(Alias, Facade);

        /**
         * Return type of facade.
         *
         * @return {String}
         */

        Alias.prototype.type =
            Alias.prototype.action = function() {
                return 'alias';
            };

        /**
         * Get `previousId`.
         *
         * @return {Mixed}
         * @api public
         */

        Alias.prototype.from =
            Alias.prototype.previousId = function() {
                return this.field('previousId') || this.field('from');
            };

        /**
         * Get `userId`.
         *
         * @return {String}
         * @api public
         */

        Alias.prototype.to =
            Alias.prototype.userId = function() {
                return this.field('userId') || this.field('to');
            };

    }, {
        "./utils": 173,
        "./facade": 164
    }],
    166: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var inherit = require('./utils').inherit;
        var address = require('./address');
        var isEmail = require('is-email');
        var newDate = require('new-date');
        var Facade = require('./facade');

        /**
         * Expose `Group` facade.
         */

        module.exports = Group;

        /**
         * Initialize a new `Group` facade with a `dictionary` of arguments.
         *
         * @param {Object} dictionary
         *   @param {String} userId
         *   @param {String} groupId
         *   @param {Object} properties
         *   @param {Object} options
         */

        function Group(dictionary) {
            Facade.call(this, dictionary);
        }

        /**
         * Inherit from `Facade`
         */

        inherit(Group, Facade);

        /**
         * Get the facade's action.
         */

        Group.prototype.type =
            Group.prototype.action = function() {
                return 'group';
            };

        /**
         * Setup some basic proxies.
         */

        Group.prototype.groupId = Facade.field('groupId');

        /**
         * Get created or createdAt.
         *
         * @return {Date}
         */

        Group.prototype.created = function() {
            var created = this.proxy('traits.createdAt') || this.proxy('traits.created') || this.proxy('properties.createdAt') || this.proxy('properties.created');

            if (created) return newDate(created);
        };

        /**
         * Get the group's email, falling back to the group ID if it's a valid email.
         *
         * @return {String}
         */

        Group.prototype.email = function() {
            var email = this.proxy('traits.email');
            if (email) return email;
            var groupId = this.groupId();
            if (isEmail(groupId)) return groupId;
        };

        /**
         * Get the group's traits.
         *
         * @param {Object} aliases
         * @return {Object}
         */

        Group.prototype.traits = function(aliases) {
            var ret = this.properties();
            var id = this.groupId();
            aliases = aliases || {};

            if (id) ret.id = id;

            for (var alias in aliases) {
                var value = null == this[alias] ? this.proxy('traits.' + alias) : this[alias]();
                if (null == value) continue;
                ret[aliases[alias]] = value;
                delete ret[alias];
            }

            return ret;
        };

        /**
         * Special traits.
         */

        Group.prototype.name = Facade.proxy('traits.name');
        Group.prototype.industry = Facade.proxy('traits.industry');
        Group.prototype.employees = Facade.proxy('traits.employees');

        /**
         * Get traits or properties.
         *
         * TODO: remove me
         *
         * @return {Object}
         */

        Group.prototype.properties = function() {
            return this.field('traits') || this.field('properties') || {};
        };

    }, {
        "./utils": 173,
        "./address": 174,
        "is-email": 183,
        "new-date": 175,
        "./facade": 164
    }],
    183: [function(require, module, exports) {

        /**
         * Expose `isEmail`.
         */

        module.exports = isEmail;


        /**
         * Email address matcher.
         */

        var matcher = /.+\@.+\..+/;


        /**
         * Loosely validate an email address.
         *
         * @param {String} string
         * @return {Boolean}
         */

        function isEmail(string) {
            return matcher.test(string);
        }
    }, {}],
    167: [function(require, module, exports) {

        var address = require('./address');
        var Facade = require('./facade');
        var isEmail = require('is-email');
        var newDate = require('new-date');
        var utils = require('./utils');
        var get = require('obj-case');
        var trim = require('trim');
        var inherit = utils.inherit;
        var clone = utils.clone;
        var type = utils.type;

        /**
         * Expose `Idenfity` facade.
         */

        module.exports = Identify;

        /**
         * Initialize a new `Identify` facade with a `dictionary` of arguments.
         *
         * @param {Object} dictionary
         *   @param {String} userId
         *   @param {String} sessionId
         *   @param {Object} traits
         *   @param {Object} options
         */

        function Identify(dictionary) {
            Facade.call(this, dictionary);
        }

        /**
         * Inherit from `Facade`.
         */

        inherit(Identify, Facade);

        /**
         * Get the facade's action.
         */

        Identify.prototype.type =
            Identify.prototype.action = function() {
                return 'identify';
            };

        /**
         * Get the user's traits.
         *
         * @param {Object} aliases
         * @return {Object}
         */

        Identify.prototype.traits = function(aliases) {
            var ret = this.field('traits') || {};
            var id = this.userId();
            aliases = aliases || {};

            if (id) ret.id = id;

            for (var alias in aliases) {
                var value = null == this[alias] ? this.proxy('traits.' + alias) : this[alias]();
                if (null == value) continue;
                ret[aliases[alias]] = value;
                if (alias !== aliases[alias]) delete ret[alias];
            }

            return ret;
        };

        /**
         * Get the user's email, falling back to their user ID if it's a valid email.
         *
         * @return {String}
         */

        Identify.prototype.email = function() {
            var email = this.proxy('traits.email');
            if (email) return email;

            var userId = this.userId();
            if (isEmail(userId)) return userId;
        };

        /**
         * Get the user's created date, optionally looking for `createdAt` since lots of
         * people do that instead.
         *
         * @return {Date or Undefined}
         */

        Identify.prototype.created = function() {
            var created = this.proxy('traits.created') || this.proxy('traits.createdAt');
            if (created) return newDate(created);
        };

        /**
         * Get the company created date.
         *
         * @return {Date or undefined}
         */

        Identify.prototype.companyCreated = function() {
            var created = this.proxy('traits.company.created') || this.proxy('traits.company.createdAt');

            if (created) return newDate(created);
        };

        /**
         * Get the user's name, optionally combining a first and last name if that's all
         * that was provided.
         *
         * @return {String or Undefined}
         */

        Identify.prototype.name = function() {
            var name = this.proxy('traits.name');
            if (typeof name === 'string') return trim(name);

            var firstName = this.firstName();
            var lastName = this.lastName();
            if (firstName && lastName) return trim(firstName + ' ' + lastName);
        };

        /**
         * Get the user's first name, optionally splitting it out of a single name if
         * that's all that was provided.
         *
         * @return {String or Undefined}
         */

        Identify.prototype.firstName = function() {
            var firstName = this.proxy('traits.firstName');
            if (typeof firstName === 'string') return trim(firstName);

            var name = this.proxy('traits.name');
            if (typeof name === 'string') return trim(name).split(' ')[0];
        };

        /**
         * Get the user's last name, optionally splitting it out of a single name if
         * that's all that was provided.
         *
         * @return {String or Undefined}
         */

        Identify.prototype.lastName = function() {
            var lastName = this.proxy('traits.lastName');
            if (typeof lastName === 'string') return trim(lastName);

            var name = this.proxy('traits.name');
            if (typeof name !== 'string') return;

            var space = trim(name).indexOf(' ');
            if (space === -1) return;

            return trim(name.substr(space + 1));
        };

        /**
         * Get the user's unique id.
         *
         * @return {String or undefined}
         */

        Identify.prototype.uid = function() {
            return this.userId() || this.username() || this.email();
        };

        /**
         * Get description.
         *
         * @return {String}
         */

        Identify.prototype.description = function() {
            return this.proxy('traits.description') || this.proxy('traits.background');
        };

        /**
         * Get the age.
         *
         * If the age is not explicitly set
         * the method will compute it from `.birthday()`
         * if possible.
         *
         * @return {Number}
         */

        Identify.prototype.age = function() {
            var date = this.birthday();
            var age = get(this.traits(), 'age');
            if (null != age) return age;
            if ('date' != type(date)) return;
            var now = new Date;
            return now.getFullYear() - date.getFullYear();
        };

        /**
         * Get the avatar.
         *
         * .photoUrl needed because help-scout
         * implementation uses `.avatar || .photoUrl`.
         *
         * .avatarUrl needed because trakio uses it.
         *
         * @return {Mixed}
         */

        Identify.prototype.avatar = function() {
            var traits = this.traits();
            return get(traits, 'avatar') || get(traits, 'photoUrl') || get(traits, 'avatarUrl');
        };

        /**
         * Get the position.
         *
         * .jobTitle needed because some integrations use it.
         *
         * @return {Mixed}
         */

        Identify.prototype.position = function() {
            var traits = this.traits();
            return get(traits, 'position') || get(traits, 'jobTitle');
        };

        /**
         * Setup sme basic "special" trait proxies.
         */

        Identify.prototype.username = Facade.proxy('traits.username');
        Identify.prototype.website = Facade.one('traits.website');
        Identify.prototype.websites = Facade.multi('traits.website');
        Identify.prototype.phone = Facade.one('traits.phone');
        Identify.prototype.phones = Facade.multi('traits.phone');
        Identify.prototype.address = Facade.proxy('traits.address');
        Identify.prototype.gender = Facade.proxy('traits.gender');
        Identify.prototype.birthday = Facade.proxy('traits.birthday');

    }, {
        "./address": 174,
        "./facade": 164,
        "is-email": 183,
        "new-date": 175,
        "./utils": 173,
        "obj-case": 123,
        "trim": 184
    }],
    184: [function(require, module, exports) {

        exports = module.exports = trim;

        function trim(str) {
            if (str.trim) return str.trim();
            return str.replace(/^\s*|\s*$/g, '');
        }

        exports.left = function(str) {
            if (str.trimLeft) return str.trimLeft();
            return str.replace(/^\s*/, '');
        };

        exports.right = function(str) {
            if (str.trimRight) return str.trimRight();
            return str.replace(/\s*$/, '');
        };

    }, {}],
    168: [function(require, module, exports) {

        var inherit = require('./utils').inherit;
        var clone = require('./utils').clone;
        var type = require('./utils').type;
        var Facade = require('./facade');
        var Identify = require('./identify');
        var isEmail = require('is-email');
        var get = require('obj-case');

        /**
         * Expose `Track` facade.
         */

        module.exports = Track;

        /**
         * Initialize a new `Track` facade with a `dictionary` of arguments.
         *
         * @param {object} dictionary
         *   @property {String} event
         *   @property {String} userId
         *   @property {String} sessionId
         *   @property {Object} properties
         *   @property {Object} options
         */

        function Track(dictionary) {
            Facade.call(this, dictionary);
        }

        /**
         * Inherit from `Facade`.
         */

        inherit(Track, Facade);

        /**
         * Return the facade's action.
         *
         * @return {String}
         */

        Track.prototype.type =
            Track.prototype.action = function() {
                return 'track';
            };

        /**
         * Setup some basic proxies.
         */

        Track.prototype.event = Facade.field('event');
        Track.prototype.value = Facade.proxy('properties.value');

        /**
         * Misc
         */

        Track.prototype.category = Facade.proxy('properties.category');

        /**
         * Ecommerce
         */

        Track.prototype.id = Facade.proxy('properties.id');
        Track.prototype.sku = Facade.proxy('properties.sku');
        Track.prototype.tax = Facade.proxy('properties.tax');
        Track.prototype.name = Facade.proxy('properties.name');
        Track.prototype.price = Facade.proxy('properties.price');
        Track.prototype.total = Facade.proxy('properties.total');
        Track.prototype.coupon = Facade.proxy('properties.coupon');
        Track.prototype.shipping = Facade.proxy('properties.shipping');
        Track.prototype.discount = Facade.proxy('properties.discount');

        /**
         * Description
         */

        Track.prototype.description = Facade.proxy('properties.description');

        /**
         * Plan
         */

        Track.prototype.plan = Facade.proxy('properties.plan');

        /**
         * Order id.
         *
         * @return {String}
         * @api public
         */

        Track.prototype.orderId = function() {
            return this.proxy('properties.id') || this.proxy('properties.orderId');
        };

        /**
         * Get subtotal.
         *
         * @return {Number}
         */

        Track.prototype.subtotal = function() {
            var subtotal = get(this.properties(), 'subtotal');
            var total = this.total();
            var n;

            if (subtotal) return subtotal;
            if (!total) return 0;
            if (n = this.tax()) total -= n;
            if (n = this.shipping()) total -= n;
            if (n = this.discount()) total += n;

            return total;
        };

        /**
         * Get products.
         *
         * @return {Array}
         */

        Track.prototype.products = function() {
            var props = this.properties();
            var products = get(props, 'products');
            return 'array' == type(products) ? products : [];
        };

        /**
         * Get quantity.
         *
         * @return {Number}
         */

        Track.prototype.quantity = function() {
            var props = this.obj.properties || {};
            return props.quantity || 1;
        };

        /**
         * Get currency.
         *
         * @return {String}
         */

        Track.prototype.currency = function() {
            var props = this.obj.properties || {};
            return props.currency || 'USD';
        };

        /**
         * BACKWARDS COMPATIBILITY: should probably re-examine where these come from.
         */

        Track.prototype.referrer = Facade.proxy('properties.referrer');
        Track.prototype.query = Facade.proxy('options.query');

        /**
         * Get the call's properties.
         *
         * @param {Object} aliases
         * @return {Object}
         */

        Track.prototype.properties = function(aliases) {
            var ret = this.field('properties') || {};
            aliases = aliases || {};

            for (var alias in aliases) {
                var value = null == this[alias] ? this.proxy('properties.' + alias) : this[alias]();
                if (null == value) continue;
                ret[aliases[alias]] = value;
                delete ret[alias];
            }

            return ret;
        };

        /**
         * Get the call's username.
         *
         * @return {String or Undefined}
         */

        Track.prototype.username = function() {
            return this.proxy('traits.username') ||
                this.proxy('properties.username') ||
                this.userId() ||
                this.sessionId();
        };

        /**
         * Get the call's email, using an the user ID if it's a valid email.
         *
         * @return {String or Undefined}
         */

        Track.prototype.email = function() {
            var email = this.proxy('traits.email');
            email = email || this.proxy('properties.email');
            if (email) return email;

            var userId = this.userId();
            if (isEmail(userId)) return userId;
        };

        /**
         * Get the call's revenue, parsing it from a string with an optional leading
         * dollar sign.
         *
         * For products/services that don't have shipping and are not directly taxed,
         * they only care about tracking `revenue`. These are things like
         * SaaS companies, who sell monthly subscriptions. The subscriptions aren't
         * taxed directly, and since it's a digital product, it has no shipping.
         *
         * The only case where there's a difference between `revenue` and `total`
         * (in the context of analytics) is on ecommerce platforms, where they want
         * the `revenue` function to actually return the `total` (which includes
         * tax and shipping, total = subtotal + tax + shipping). This is probably
         * because on their backend they assume tax and shipping has been applied to
         * the value, and so can get the revenue on their own.
         *
         * @return {Number}
         */

        Track.prototype.revenue = function() {
            var revenue = this.proxy('properties.revenue');
            var event = this.event();

            // it's always revenue, unless it's called during an order completion.
            if (!revenue && event && event.match(/completed ?order/i)) {
                revenue = this.proxy('properties.total');
            }

            return currency(revenue);
        };

        /**
         * Get cents.
         *
         * @return {Number}
         */

        Track.prototype.cents = function() {
            var revenue = this.revenue();
            return 'number' != typeof revenue ? this.value() || 0 : revenue * 100;
        };

        /**
         * A utility to turn the pieces of a track call into an identify. Used for
         * integrations with super properties or rate limits.
         *
         * TODO: remove me.
         *
         * @return {Facade}
         */

        Track.prototype.identify = function() {
            var json = this.json();
            json.traits = this.traits();
            return new Identify(json);
        };

        /**
         * Get float from currency value.
         *
         * @param {Mixed} val
         * @return {Number}
         */

        function currency(val) {
            if (!val) return;
            if (typeof val === 'number') return val;
            if (typeof val !== 'string') return;

            val = val.replace(/\$/g, '');
            val = parseFloat(val);

            if (!isNaN(val)) return val;
        }

    }, {
        "./utils": 173,
        "./facade": 164,
        "./identify": 167,
        "is-email": 183,
        "obj-case": 123
    }],
    169: [function(require, module, exports) {

        var inherit = require('./utils').inherit;
        var Facade = require('./facade');
        var Track = require('./track');

        /**
         * Expose `Page` facade
         */

        module.exports = Page;

        /**
         * Initialize new `Page` facade with `dictionary`.
         *
         * @param {Object} dictionary
         *   @param {String} category
         *   @param {String} name
         *   @param {Object} traits
         *   @param {Object} options
         */

        function Page(dictionary) {
            Facade.call(this, dictionary);
        }

        /**
         * Inherit from `Facade`
         */

        inherit(Page, Facade);

        /**
         * Get the facade's action.
         *
         * @return {String}
         */

        Page.prototype.type =
            Page.prototype.action = function() {
                return 'page';
            };

        /**
         * Fields
         */

        Page.prototype.category = Facade.field('category');
        Page.prototype.name = Facade.field('name');

        /**
         * Proxies.
         */

        Page.prototype.title = Facade.proxy('properties.title');
        Page.prototype.path = Facade.proxy('properties.path');
        Page.prototype.url = Facade.proxy('properties.url');

        /**
         * Referrer.
         */

        Page.prototype.referrer = function() {
            return this.proxy('properties.referrer') || this.proxy('context.referrer.url');
        };

        /**
         * Get the page properties mixing `category` and `name`.
         *
         * @return {Object}
         */

        Page.prototype.properties = function() {
            var props = this.field('properties') || {};
            var category = this.category();
            var name = this.name();
            if (category) props.category = category;
            if (name) props.name = name;
            return props;
        };

        /**
         * Get the page fullName.
         *
         * @return {String}
         */

        Page.prototype.fullName = function() {
            var category = this.category();
            var name = this.name();
            return name && category ? category + ' ' + name : name;
        };

        /**
         * Get event with `name`.
         *
         * @return {String}
         */

        Page.prototype.event = function(name) {
            return name ? 'Viewed ' + name + ' Page' : 'Loaded a Page';
        };

        /**
         * Convert this Page to a Track facade with `name`.
         *
         * @param {String} name
         * @return {Track}
         */

        Page.prototype.track = function(name) {
            var props = this.properties();
            return new Track({
                event: this.event(name),
                timestamp: this.timestamp(),
                context: this.context(),
                properties: props
            });
        };

    }, {
        "./utils": 173,
        "./facade": 164,
        "./track": 168
    }],
    170: [function(require, module, exports) {

        var inherit = require('./utils').inherit;
        var Page = require('./page');
        var Track = require('./track');

        /**
         * Expose `Screen` facade
         */

        module.exports = Screen;

        /**
         * Initialize new `Screen` facade with `dictionary`.
         *
         * @param {Object} dictionary
         *   @param {String} category
         *   @param {String} name
         *   @param {Object} traits
         *   @param {Object} options
         */

        function Screen(dictionary) {
            Page.call(this, dictionary);
        }

        /**
         * Inherit from `Page`
         */

        inherit(Screen, Page);

        /**
         * Get the facade's action.
         *
         * @return {String}
         * @api public
         */

        Screen.prototype.type =
            Screen.prototype.action = function() {
                return 'screen';
            };

        /**
         * Get event with `name`.
         *
         * @param {String} name
         * @return {String}
         * @api public
         */

        Screen.prototype.event = function(name) {
            return name ? 'Viewed ' + name + ' Screen' : 'Loaded a Screen';
        };

        /**
         * Convert this Screen.
         *
         * @param {String} name
         * @return {Track}
         * @api public
         */

        Screen.prototype.track = function(name) {
            var props = this.properties();
            return new Track({
                event: this.event(name),
                timestamp: this.timestamp(),
                context: this.context(),
                properties: props
            });
        };

    }, {
        "./utils": 173,
        "./page": 169,
        "./track": 168
    }],
    163: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var encode = encodeURIComponent;
        var decode = decodeURIComponent;
        var trim = require('trim');
        var type = require('type');

        /**
         * Parse the given query `str`.
         *
         * @param {String} str
         * @return {Object}
         * @api public
         */

        exports.parse = function(str) {
            if ('string' != typeof str) return {};

            str = trim(str);
            if ('' == str) return {};
            if ('?' == str.charAt(0)) str = str.slice(1);

            var obj = {};
            var pairs = str.split('&');
            for (var i = 0; i < pairs.length; i++) {
                var parts = pairs[i].split('=');
                var key = decode(parts[0]);
                var m;

                if (m = /(\w+)\[(\d+)\]/.exec(key)) {
                    obj[m[1]] = obj[m[1]] || [];
                    obj[m[1]][m[2]] = decode(parts[1]);
                    continue;
                }

                obj[parts[0]] = null == parts[1] ? '' : decode(parts[1]);
            }

            return obj;
        };

        /**
         * Stringify the given `obj`.
         *
         * @param {Object} obj
         * @return {String}
         * @api public
         */

        exports.stringify = function(obj) {
            if (!obj) return '';
            var pairs = [];

            for (var key in obj) {
                var value = obj[key];

                if ('array' == type(value)) {
                    for (var i = 0; i < value.length; ++i) {
                        pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
                    }
                    continue;
                }

                pairs.push(encode(key) + '=' + encode(obj[key]));
            }

            return pairs.join('&');
        };

    }, {
        "trim": 184,
        "type": 134
    }],
    17: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "next-tick": 146
    }],
    18: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122,
        "extend": 185
    }],
    185: [function(require, module, exports) {

        module.exports = function extend(object) {
            // Takes an unlimited number of extenders.
            var args = Array.prototype.slice.call(arguments, 1);

            // For each extender, copy their properties on our object.
            for (var i = 0, source; source = args[i]; i++) {
                if (!source) continue;
                for (var property in source) {
                    object[property] = source[property];
                }
            }

            return object;
        };
    }, {}],
    19: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "each": 121
    }],
    20: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "defaults": 186,
        "analytics.js-integration": 118,
        "on-body": 187
    }],
    186: [function(require, module, exports) {
        /**
         * Expose `defaults`.
         */
        module.exports = defaults;

        function defaults(dest, defaults) {
            for (var prop in defaults) {
                if (!(prop in dest)) {
                    dest[prop] = defaults[prop];
                }
            }

            return dest;
        };

    }, {}],
    187: [function(require, module, exports) {
        var each = require('each');


        /**
         * Cache whether `<body>` exists.
         */

        var body = false;


        /**
         * Callbacks to call when the body exists.
         */

        var callbacks = [];


        /**
         * Export a way to add handlers to be invoked once the body exists.
         *
         * @param {Function} callback  A function to call when the body exists.
         */

        module.exports = function onBody(callback) {
            if (body) {
                call(callback);
            } else {
                callbacks.push(callback);
            }
        };


        /**
         * Set an interval to check for `document.body`.
         */

        var interval = setInterval(function() {
            if (!document.body) return;
            body = true;
            each(callbacks, call);
            clearInterval(interval);
        }, 5);


        /**
         * Call a callback, passing it the body.
         *
         * @param {Function} callback  The callback to call.
         */

        function call(callback) {
            callback(document.body);
        }
    }, {
        "each": 139
    }],
    21: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "load-date": 188,
        "domify": 154,
        "each": 121,
        "analytics.js-integration": 118,
        "is": 122,
        "on-body": 187,
        "use-https": 120
    }],
    188: [function(require, module, exports) {


        /*
         * Load date.
         *
         * For reference: http://www.html5rocks.com/en/tutorials/webperformance/basics/
         */

        var time = new Date(),
            perf = window.performance;

        if (perf && perf.timing && perf.timing.responseEnd) {
            time = new Date(perf.timing.responseEnd);
        }

        module.exports = time;
    }, {}],
    22: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "extend": 185,
        "analytics.js-integration": 118,
        "is": 122
    }],
    23: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "use-https": 120
    }],
    24: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    25: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "bind": 132,
        "each": 121,
        "analytics.js-integration": 118,
        "to-iso-string": 189,
        "global-queue": 190,
        "throttle": 191,
        "when": 192
    }],
    189: [function(require, module, exports) {

        /**
         * Expose `toIsoString`.
         */

        module.exports = toIsoString;


        /**
         * Turn a `date` into an ISO string.
         *
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
         *
         * @param {Date} date
         * @return {String}
         */

        function toIsoString(date) {
            return date.getUTCFullYear() + '-' + pad(date.getUTCMonth() + 1) + '-' + pad(date.getUTCDate()) + 'T' + pad(date.getUTCHours()) + ':' + pad(date.getUTCMinutes()) + ':' + pad(date.getUTCSeconds()) + '.' + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5) + 'Z';
        }


        /**
         * Pad a `number` with a ten's place zero.
         *
         * @param {Number} number
         * @return {String}
         */

        function pad(number) {
            var n = number.toString();
            return n.length === 1 ? '0' + n : n;
        }
    }, {}],
    190: [function(require, module, exports) {

        /**
         * Expose `generate`.
         */

        module.exports = generate;


        /**
         * Generate a global queue pushing method with `name`.
         *
         * @param {String} name
         * @param {Object} options
         *   @property {Boolean} wrap
         * @return {Function}
         */

        function generate(name, options) {
            options = options || {};

            return function(args) {
                args = [].slice.call(arguments);
                window[name] || (window[name] = []);
                options.wrap === false ? window[name].push.apply(window[name], args) : window[name].push(args);
            };
        }
    }, {}],
    191: [function(require, module, exports) {

        /**
         * Module exports.
         */

        module.exports = throttle;

        /**
         * Returns a new function that, when invoked, invokes `func` at most one time per
         * `wait` milliseconds.
         *
         * @param {Function} func The `Function` instance to wrap.
         * @param {Number} wait The minimum number of milliseconds that must elapse in between `func` invokations.
         * @return {Function} A new function that wraps the `func` function passed in.
         * @api public
         */

        function throttle(func, wait) {
            var rtn; // return value
            var last = 0; // last invokation timestamp
            return function throttled() {
                var now = new Date().getTime();
                var delta = now - last;
                if (delta >= wait) {
                    rtn = func.apply(this, arguments);
                    last = now;
                }
                return rtn;
            };
        }

    }, {}],
    192: [function(require, module, exports) {

        var callback = require('callback');


        /**
         * Expose `when`.
         */

        module.exports = when;


        /**
         * Loop on a short interval until `condition()` is true, then call `fn`.
         *
         * @param {Function} condition
         * @param {Function} fn
         * @param {Number} interval (optional)
         */

        function when(condition, fn, interval) {
            if (condition()) return callback.async(fn);

            var ref = setInterval(function() {
                if (!condition()) return;
                callback(fn);
                clearInterval(ref);
            }, interval || 10);
        }
    }, {
        "callback": 193
    }],
    193: [function(require, module, exports) {
        var next = require('next-tick');


        /**
         * Expose `callback`.
         */

        module.exports = callback;


        /**
         * Call an `fn` back synchronously if it exists.
         *
         * @param {Function} fn
         */

        function callback(fn) {
            if ('function' === typeof fn) fn();
        }


        /**
         * Call an `fn` back asynchronously if it exists. If `wait` is ommitted, the
         * `fn` will be called on next tick.
         *
         * @param {Function} fn
         * @param {Number} wait (optional)
         */

        callback.async = function(fn, wait) {
            if ('function' !== typeof fn) return;
            if (!wait) return next(fn);
            setTimeout(fn, wait);
        };


        /**
         * Symmetry.
         */

        callback.sync = callback;

    }, {
        "next-tick": 146
    }],
    26: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "alias": 194,
        "convert-dates": 195,
        "analytics.js-integration": 118
    }],
    194: [function(require, module, exports) {

        var type = require('type');

        try {
            var clone = require('clone');
        } catch (e) {
            var clone = require('clone-component');
        }


        /**
         * Expose `alias`.
         */

        module.exports = alias;


        /**
         * Alias an `object`.
         *
         * @param {Object} obj
         * @param {Mixed} method
         */

        function alias(obj, method) {
            switch (type(method)) {
                case 'object':
                    return aliasByDictionary(clone(obj), method);
                case 'function':
                    return aliasByFunction(clone(obj), method);
            }
        }


        /**
         * Convert the keys in an `obj` using a dictionary of `aliases`.
         *
         * @param {Object} obj
         * @param {Object} aliases
         */

        function aliasByDictionary(obj, aliases) {
            for (var key in aliases) {
                if (undefined === obj[key]) continue;
                obj[aliases[key]] = obj[key];
                delete obj[key];
            }
            return obj;
        }


        /**
         * Convert the keys in an `obj` using a `convert` function.
         *
         * @param {Object} obj
         * @param {Function} convert
         */

        function aliasByFunction(obj, convert) {
            // have to create another object so that ie8 won't infinite loop on keys
            var output = {};
            for (var key in obj) output[convert(key)] = obj[key];
            return output;
        }
    }, {
        "type": 134,
        "clone": 179
    }],
    195: [function(require, module, exports) {

        var is = require('is');

        try {
            var clone = require('clone');
        } catch (e) {
            var clone = require('clone-component');
        }


        /**
         * Expose `convertDates`.
         */

        module.exports = convertDates;


        /**
         * Recursively convert an `obj`'s dates to new values.
         *
         * @param {Object} obj
         * @param {Function} convert
         * @return {Object}
         */

        function convertDates(obj, convert) {
            obj = clone(obj);
            for (var key in obj) {
                var val = obj[key];
                if (is.date(val)) obj[key] = convert(val);
                if (is.object(val)) obj[key] = convertDates(val, convert);
            }
            return obj;
        }
    }, {
        "is": 122,
        "clone": 125
    }],
    27: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122,
        "global-queue": 190
    }],
    28: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "next-tick": 146
    }],
    29: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "extend": 185,
        "analytics.js-integration": 118,
        "on-error": 196,
        "global-queue": 190
    }],
    196: [function(require, module, exports) {

        /**
         * Expose `onError`.
         */

        module.exports = onError;


        /**
         * Callbacks.
         */

        var callbacks = [];


        /**
         * Preserve existing handler.
         */

        if ('function' == typeof window.onerror) callbacks.push(window.onerror);


        /**
         * Bind to `window.onerror`.
         */

        window.onerror = handler;


        /**
         * Error handler.
         */

        function handler() {
            for (var i = 0, fn; fn = callbacks[i]; i++) fn.apply(this, arguments);
        }


        /**
         * Call a `fn` on `window.onerror`.
         *
         * @param {Function} fn
         */

        function onError(fn) {
            callbacks.push(fn);
            if (window.onerror != handler) {
                callbacks.push(window.onerror);
                window.onerror = handler;
            }
        }
    }, {}],
    30: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    31: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "bind": 132,
        "domify": 154,
        "each": 121,
        "extend": 185,
        "analytics.js-integration": 118,
        "json": 197
    }],
    197: [function(require, module, exports) {

        var json = window.JSON || {};
        var stringify = json.stringify;
        var parse = json.parse;

        module.exports = parse && stringify ? JSON : require('json-fallback');

    }, {
        "json-fallback": 198
    }],
    198: [function(require, module, exports) {
        /*
         json2.js
         2014-02-04

         Public Domain.

         NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

         See http://www.JSON.org/js.html


         This code should be minified before deployment.
         See http://javascript.crockford.com/jsmin.html

         USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
         NOT CONTROL.


         This file creates a global JSON object containing two methods: stringify
         and parse.

         JSON.stringify(value, replacer, space)
         value       any JavaScript value, usually an object or array.

         replacer    an optional parameter that determines how object
         values are stringified for objects. It can be a
         function or an array of strings.

         space       an optional parameter that specifies the indentation
         of nested structures. If it is omitted, the text will
         be packed without extra whitespace. If it is a number,
         it will specify the number of spaces to indent at each
         level. If it is a string (such as '\t' or '&nbsp;'),
         it contains the characters used to indent at each level.

         This method produces a JSON text from a JavaScript value.

         When an object value is found, if the object contains a toJSON
         method, its toJSON method will be called and the result will be
         stringified. A toJSON method does not serialize: it returns the
         value represented by the name/value pair that should be serialized,
         or undefined if nothing should be serialized. The toJSON method
         will be passed the key associated with the value, and this will be
         bound to the value

         For example, this would serialize Dates as ISO strings.

         Date.prototype.toJSON = function (key) {
         function f(n) {
         // Format integers to have at least two digits.
         return n < 10 ? '0' + n : n;
         }

         return this.getUTCFullYear()   + '-' +
         f(this.getUTCMonth() + 1) + '-' +
         f(this.getUTCDate())      + 'T' +
         f(this.getUTCHours())     + ':' +
         f(this.getUTCMinutes())   + ':' +
         f(this.getUTCSeconds())   + 'Z';
         };

         You can provide an optional replacer method. It will be passed the
         key and value of each member, with this bound to the containing
         object. The value that is returned from your method will be
         serialized. If your method returns undefined, then the member will
         be excluded from the serialization.

         If the replacer parameter is an array of strings, then it will be
         used to select the members to be serialized. It filters the results
         such that only members with keys listed in the replacer array are
         stringified.

         Values that do not have JSON representations, such as undefined or
         functions, will not be serialized. Such values in objects will be
         dropped; in arrays they will be replaced with null. You can use
         a replacer function to replace those with JSON values.
         JSON.stringify(undefined) returns undefined.

         The optional space parameter produces a stringification of the
         value that is filled with line breaks and indentation to make it
         easier to read.

         If the space parameter is a non-empty string, then that string will
         be used for indentation. If the space parameter is a number, then
         the indentation will be that many spaces.

         Example:

         text = JSON.stringify(['e', {pluribus: 'unum'}]);
         // text is '["e",{"pluribus":"unum"}]'


         text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
         // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

         text = JSON.stringify([new Date()], function (key, value) {
         return this[key] instanceof Date ?
         'Date(' + this[key] + ')' : value;
         });
         // text is '["Date(---current time---)"]'


         JSON.parse(text, reviver)
         This method parses a JSON text to produce an object or array.
         It can throw a SyntaxError exception.

         The optional reviver parameter is a function that can filter and
         transform the results. It receives each of the keys and values,
         and its return value is used instead of the original value.
         If it returns what it received, then the structure is not modified.
         If it returns undefined then the member is deleted.

         Example:

         // Parse the text. Values that look like ISO date strings will
         // be converted to Date objects.

         myData = JSON.parse(text, function (key, value) {
         var a;
         if (typeof value === 'string') {
         a =
         /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
         if (a) {
         return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
         +a[5], +a[6]));
         }
         }
         return value;
         });

         myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
         var d;
         if (typeof value === 'string' &&
         value.slice(0, 5) === 'Date(' &&
         value.slice(-1) === ')') {
         d = new Date(value.slice(5, -1));
         if (d) {
         return d;
         }
         }
         return value;
         });


         This is a reference implementation. You are free to copy, modify, or
         redistribute.
         */

        /*jslint evil: true, regexp: true */

        /*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
         call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
         getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
         lastIndex, length, parse, prototype, push, replace, slice, stringify,
         test, toJSON, toString, valueOf
         */


        // Create a JSON object only if one does not already exist. We create the
        // methods in a closure to avoid creating global variables.

        (function() {
            'use strict';

            var JSON = module.exports = {};

            function f(n) {
                // Format integers to have at least two digits.
                return n < 10 ? '0' + n : n;
            }

            if (typeof Date.prototype.toJSON !== 'function') {

                Date.prototype.toJSON = function() {

                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' +
                        f(this.getUTCMonth() + 1) + '-' +
                        f(this.getUTCDate()) + 'T' +
                        f(this.getUTCHours()) + ':' +
                        f(this.getUTCMinutes()) + ':' +
                        f(this.getUTCSeconds()) + 'Z' : null;
                };

                String.prototype.toJSON =
                    Number.prototype.toJSON =
                    Boolean.prototype.toJSON = function() {
                        return this.valueOf();
                    };
            }

            var cx,
                escapable,
                gap,
                indent,
                meta,
                rep;


            function quote(string) {

                // If the string contains no control characters, no quote characters, and no
                // backslash characters, then we can safely slap some quotes around it.
                // Otherwise we must also replace the offending characters with safe escape
                // sequences.

                escapable.lastIndex = 0;
                return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                    var c = meta[a];
                    return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                }) + '"' : '"' + string + '"';
            }


            function str(key, holder) {

                // Produce a string from holder[key].

                var i, // The loop counter.
                    k, // The member key.
                    v, // The member value.
                    length,
                    mind = gap,
                    partial,
                    value = holder[key];

                // If the value has a toJSON method, call it to obtain a replacement value.

                if (value && typeof value === 'object' &&
                    typeof value.toJSON === 'function') {
                    value = value.toJSON(key);
                }

                // If we were called with a replacer function, then call the replacer to
                // obtain a replacement value.

                if (typeof rep === 'function') {
                    value = rep.call(holder, key, value);
                }

                // What happens next depends on the value's type.

                switch (typeof value) {
                    case 'string':
                        return quote(value);

                    case 'number':

                        // JSON numbers must be finite. Encode non-finite numbers as null.

                        return isFinite(value) ? String(value) : 'null';

                    case 'boolean':
                    case 'null':

                        // If the value is a boolean or null, convert it to a string. Note:
                        // typeof null does not produce 'null'. The case is included here in
                        // the remote chance that this gets fixed someday.

                        return String(value);

                        // If the type is 'object', we might be dealing with an object or an array or
                        // null.

                    case 'object':

                        // Due to a specification blunder in ECMAScript, typeof null is 'object',
                        // so watch out for that case.

                        if (!value) {
                            return 'null';
                        }

                        // Make an array to hold the partial results of stringifying this object value.

                        gap += indent;
                        partial = [];

                        // Is the value an array?

                        if (Object.prototype.toString.apply(value) === '[object Array]') {

                            // The value is an array. Stringify every element. Use null as a placeholder
                            // for non-JSON values.

                            length = value.length;
                            for (i = 0; i < length; i += 1) {
                                partial[i] = str(i, value) || 'null';
                            }

                            // Join all of the elements together, separated with commas, and wrap them in
                            // brackets.

                            v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                            gap = mind;
                            return v;
                        }

                        // If the replacer is an array, use it to select the members to be stringified.

                        if (rep && typeof rep === 'object') {
                            length = rep.length;
                            for (i = 0; i < length; i += 1) {
                                if (typeof rep[i] === 'string') {
                                    k = rep[i];
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                    }
                                }
                            }
                        } else {

                            // Otherwise, iterate through all of the keys in the object.

                            for (k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = str(k, value);
                                    if (v) {
                                        partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                    }
                                }
                            }
                        }

                        // Join all of the member texts together, separated with commas,
                        // and wrap them in braces.

                        v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                        gap = mind;
                        return v;
                }
            }

            // If the JSON object does not yet have a stringify method, give it one.

            if (typeof JSON.stringify !== 'function') {
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                meta = { // table of character substitutions
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '"': '\\"',
                    '\\': '\\\\'
                };
                JSON.stringify = function(value, replacer, space) {

                    // The stringify method takes a value and an optional replacer, and an optional
                    // space parameter, and returns a JSON text. The replacer can be a function
                    // that can replace values, or an array of strings that will select the keys.
                    // A default replacer method can be provided. Use of the space parameter can
                    // produce text that is more easily readable.

                    var i;
                    gap = '';
                    indent = '';

                    // If the space parameter is a number, make an indent string containing that
                    // many spaces.

                    if (typeof space === 'number') {
                        for (i = 0; i < space; i += 1) {
                            indent += ' ';
                        }

                        // If the space parameter is a string, it will be used as the indent string.

                    } else if (typeof space === 'string') {
                        indent = space;
                    }

                    // If there is a replacer, it must be a function or an array.
                    // Otherwise, throw an error.

                    rep = replacer;
                    if (replacer && typeof replacer !== 'function' &&
                        (typeof replacer !== 'object' ||
                            typeof replacer.length !== 'number')) {
                        throw new Error('JSON.stringify');
                    }

                    // Make a fake root object containing our value under the key of ''.
                    // Return the result of stringifying the value.

                    return str('', {
                        '': value
                    });
                };
            }


            // If the JSON object does not yet have a parse method, give it one.

            if (typeof JSON.parse !== 'function') {
                cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                JSON.parse = function(text, reviver) {

                    // The parse method takes a text and an optional reviver function, and returns
                    // a JavaScript value if the text is a valid JSON text.

                    var j;

                    function walk(holder, key) {

                        // The walk method is used to recursively walk the resulting structure so
                        // that modifications can be made.

                        var k, v, value = holder[key];
                        if (value && typeof value === 'object') {
                            for (k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = walk(value, k);
                                    if (v !== undefined) {
                                        value[k] = v;
                                    } else {
                                        delete value[k];
                                    }
                                }
                            }
                        }
                        return reviver.call(holder, key, value);
                    }


                    // Parsing happens in four stages. In the first stage, we replace certain
                    // Unicode characters with escape sequences. JavaScript handles many characters
                    // incorrectly, either silently deleting them, or treating them as line endings.

                    text = String(text);
                    cx.lastIndex = 0;
                    if (cx.test(text)) {
                        text = text.replace(cx, function(a) {
                            return '\\u' +
                                ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                        });
                    }

                    // In the second stage, we run the text against regular expressions that look
                    // for non-JSON patterns. We are especially concerned with '()' and 'new'
                    // because they can cause invocation, and '=' because it can cause mutation.
                    // But just to be safe, we want to reject all unexpected forms.

                    // We split the second stage into 4 regexp operations in order to work around
                    // crippling inefficiencies in IE's and Safari's regexp engines. First we
                    // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
                    // replace all simple value tokens with ']' characters. Third, we delete all
                    // open brackets that follow a colon or comma or that begin the text. Finally,
                    // we look to see that the remaining characters are only whitespace or ']' or
                    // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

                    if (/^[\],:{}\s]*$/
                        .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                            .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                        // In the third stage we use the eval function to compile the text into a
                        // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
                        // in JavaScript: it can begin a block or an object literal. We wrap the text
                        // in parens to eliminate the ambiguity.

                        j = eval('(' + text + ')');

                        // In the optional fourth stage, we recursively walk the new structure, passing
                        // each name/value pair to a reviver function for possible transformation.

                        return typeof reviver === 'function' ? walk({
                            '': j
                        }, '') : j;
                    }

                    // If the text is not JSON parseable, then a SyntaxError is thrown.

                    throw new SyntaxError('JSON.parse');
                };
            }
        }());

    }, {}],
    32: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    33: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "each": 121,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    34: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "bind": 132,
        "each": 121,
        "analytics.js-integration": 118,
        "is": 122
    }],
    35: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "to-camel-case": 199,
        "foldl": 142,
        "analytics.js-integration": 118,
        "is": 122
    }],
    199: [function(require, module, exports) {

        var toSpace = require('to-space-case');


        /**
         * Expose `toCamelCase`.
         */

        module.exports = toCamelCase;


        /**
         * Convert a `string` to camel case.
         *
         * @param {String} string
         * @return {String}
         */


        function toCamelCase(string) {
            return toSpace(string).replace(/\s(\w)/g, function(matches, letter) {
                return letter.toUpperCase();
            });
        }
    }, {
        "to-space-case": 156
    }],
    36: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    37: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "on-body": 187
    }],
    38: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "defaults": 186,
        "obj-case": 123,
        "each": 121,
        "analytics.js-integration": 118,
        "is": 122,
        "object": 200,
        "global-queue": 190,
        "select": 201,
        "use-https": 120
    }],
    200: [function(require, module, exports) {

        /**
         * HOP ref.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Return own keys in `obj`.
         *
         * @param {Object} obj
         * @return {Array}
         * @api public
         */

        exports.keys = Object.keys || function(obj) {
            var keys = [];
            for (var key in obj) {
                if (has.call(obj, key)) {
                    keys.push(key);
                }
            }
            return keys;
        };

        /**
         * Return own values in `obj`.
         *
         * @param {Object} obj
         * @return {Array}
         * @api public
         */

        exports.values = function(obj) {
            var vals = [];
            for (var key in obj) {
                if (has.call(obj, key)) {
                    vals.push(obj[key]);
                }
            }
            return vals;
        };

        /**
         * Merge `b` into `a`.
         *
         * @param {Object} a
         * @param {Object} b
         * @return {Object} a
         * @api public
         */

        exports.merge = function(a, b) {
            for (var key in b) {
                if (has.call(b, key)) {
                    a[key] = b[key];
                }
            }
            return a;
        };

        /**
         * Return length of `obj`.
         *
         * @param {Object} obj
         * @return {Number}
         * @api public
         */

        exports.length = function(obj) {
            return exports.keys(obj).length;
        };

        /**
         * Check if `obj` is empty.
         *
         * @param {Object} obj
         * @return {Boolean}
         * @api public
         */

        exports.isEmpty = function(obj) {
            return 0 == exports.length(obj);
        };
    }, {}],
    201: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var toFunction = require('to-function');

        /**
         * Filter the given `arr` with callback `fn(val, i)`,
         * when a truthy value is return then `val` is included
         * in the array returned.
         *
         * @param {Array} arr
         * @param {Function} fn
         * @return {Array}
         * @api public
         */

        module.exports = function(arr, fn) {
            var ret = [];
            fn = toFunction(fn);
            for (var i = 0; i < arr.length; ++i) {
                if (fn(arr[i], i)) {
                    ret.push(arr[i]);
                }
            }
            return ret;
        };

    }, {
        "to-function": 149
    }],
    39: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    40: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "each": 121,
        "analytics.js-integration": 118,
        "omit": 202,
        "pick": 203
    }],
    202: [function(require, module, exports) {
        /**
         * Expose `omit`.
         */

        module.exports = omit;

        /**
         * Return a copy of the object without the specified keys.
         *
         * @param {Array} keys
         * @param {Object} object
         * @return {Object}
         */

        function omit(keys, object) {
            var ret = {};

            for (var item in object) {
                ret[item] = object[item];
            }

            for (var i = 0; i < keys.length; i++) {
                delete ret[keys[i]];
            }
            return ret;
        }
    }, {}],
    203: [function(require, module, exports) {

        /**
         * Expose `pick`.
         */

        module.exports = pick;

        /**
         * Pick keys from an `obj`.
         *
         * @param {Object} obj
         * @param {Strings} keys...
         * @return {Object}
         */

        function pick(obj) {
            var keys = [].slice.call(arguments, 1);
            var ret = {};

            for (var i = 0, key; key = keys[i]; i++) {
                if (key in obj) ret[key] = obj[key];
            }

            return ret;
        }
    }, {}],
    41: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "each": 121
    }],
    42: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    43: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122
    }],
    44: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "convert-dates": 195,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    45: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    46: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    47: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    48: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "alias": 194,
        "convert-dates": 195,
        "defaults": 186,
        "obj-case": 123,
        "analytics.js-integration": 118,
        "is": 122
    }],
    49: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "clone": 125
    }],
    50: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "includes": 155,
        "analytics.js-integration": 118,
        "is": 122
    }],
    51: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "is": 122,
        "global-queue": 190
    }],
    52: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190,
        "next-tick": 146
    }],
    53: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "clone": 125,
        "each": 121,
        "analytics.js-integration": 118,
        "next-tick": 146,
        "when": 192
    }],
    54: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "analytics.js-integration": 118,
        "use-https": 120
    }],
    55: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "alias": 194,
        "analytics.js-integration": 118
    }],
    56: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "alias": 194,
        "convert-dates": 195,
        "obj-case": 123,
        "each": 121,
        "includes": 155,
        "analytics.js-integration": 118,
        "is": 122,
        "to-iso-string": 189,
        "some": 204
    }],
    204: [function(require, module, exports) {

        /**
         * some
         */

        var some = [].some;

        /**
         * test whether some elements in
         * the array pass the test implemented
         * by `fn`.
         *
         * example:
         *
         *          some([1, 'foo', 'bar'], function (el, i) {
         *            return 'string' == typeof el;
         *          });
         *          // > true
         *
         * @param {Array} arr
         * @param {Function} fn
         * @return {bool}
         */

        module.exports = function(arr, fn) {
            if (some) return some.call(arr, fn);
            for (var i = 0, l = arr.length; i < l; ++i) {
                if (fn(arr[i], i)) return true;
            }
            return false;
        };

    }, {}],
    57: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "bind": 132,
        "analytics.js-integration": 118,
        "is": 122,
        "when": 192
    }],
    58: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    59: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "is": 122,
        "use-https": 120
    }],
    60: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    61: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "alias": 194,
        "analytics.js-integration": 118
    }],
    62: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "use-https": 120,
        "analytics.js-integration": 118,
        "next-tick": 146
    }],
    63: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "foldl": 142,
        "analytics.js-integration": 118,
        "global-queue": 190,
        "next-tick": 146
    }],
    64: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "omit": 202
    }],
    65: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    66: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "load-date": 188,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    67: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "is": 122,
        "global-queue": 190
    }],
    68: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "convert-dates": 195,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    69: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190,
        "facade": 162,
        "bind": 132,
        "when": 192
    }],
    70: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190,
        "reduce": 205,
        "use-https": 120
    }],
    205: [function(require, module, exports) {

        /**
         * Reduce `arr` with `fn`.
         *
         * @param {Array} arr
         * @param {Function} fn
         * @param {Mixed} initial
         *
         * TODO: combatible error handling?
         */

        module.exports = function(arr, fn, initial) {
            var idx = 0;
            var len = arr.length;
            var curr = arguments.length == 3 ? initial : arr[idx++];

            while (idx < len) {
                curr = fn.call(null, curr, arr[idx], ++idx, arr);
            }

            return curr;
        };
    }, {}],
    71: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "extend": 185,
        "analytics.js-integration": 118,
        "is": 122
    }],
    72: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    73: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    74: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "when": 192
    }],
    75: [function(require, module, exports) {


        /**
         * Module dependencies.
         */

        var ads = require('ad-params');
        var clone = require('clone');
        var cookie = require('cookie');
        var extend = require('extend');
        var integration = require('analytics.js-integration');
        var json = require('segmentio/json@1.0.0');
        var localstorage = require('store');
        var protocol = require('protocol');
        var send = require('send-json');
        var topDomain = require('top-domain');
        var utm = require('utm-params');
        var uuid = require('uuid');

        /**
         * Cookie options
         */

        var cookieOptions = {
            // 1 year
            maxage: 31536000000,
            secure: false,
            path: '/'
        };

        /**
         * Expose `Segment` integration.
         */

        var Segment = exports = module.exports = integration('Segment.io')
            .option('apiKey', '');

        /**
         * Get the store.
         *
         * @return {Function}
         */

        exports.storage = function() {
            return protocol() === 'file:' || protocol() === 'chrome-extension:' ? localstorage : cookie;
        };

        /**
         * Expose global for testing.
         */

        exports.global = window;

        /**
         * Initialize.
         *
         * https://github.com/segmentio/segmentio/blob/master/modules/segmentjs/segment.js/v1/segment.js
         *
         * @api public
         */

        Segment.prototype.initialize = function() {
            var self = this;
            this.ready();
            this.analytics.on('invoke', function(msg) {
                var action = msg.action();
                var listener = 'on' + msg.action();
                self.debug('%s %o', action, msg);
                if (self[listener]) self[listener](msg);
                self.ready();
            });
        };

        /**
         * Loaded.
         *
         * @api private
         * @return {boolean}
         */

        Segment.prototype.loaded = function() {
            return true;
        };

        /**
         * Page.
         *
         * @api public
         * @param {Page} page
         */

        Segment.prototype.onpage = function(page) {
            this.send('/p', page.json());
        };

        /**
         * Identify.
         *
         * @api public
         * @param {Identify} identify
         */

        Segment.prototype.onidentify = function(identify) {
            this.send('/i', identify.json());
        };

        /**
         * Group.
         *
         * @api public
         * @param {Group} group
         */

        Segment.prototype.ongroup = function(group) {
            this.send('/g', group.json());
        };

        /**
         * ontrack.
         *
         * TODO: Document this.
         *
         * @api private
         * @param {Track} track
         */

        Segment.prototype.ontrack = function(track) {
            var json = track.json();
            // TODO: figure out why we need traits.
            delete json.traits;
            this.send('/t', json);
        };

        /**
         * Alias.
         *
         * @api public
         * @param {Alias} alias
         */

        Segment.prototype.onalias = function(alias) {
            var json = alias.json();
            var user = this.analytics.user();
            json.previousId = json.previousId || json.from || user.id() || user.anonymousId();
            json.userId = json.userId || json.to;
            delete json.from;
            delete json.to;
            this.send('/a', json);
        };

        /**
         * Normalize the given `msg`.
         *
         * @api private
         * @param {Object} msg
         */

        Segment.prototype.normalize = function(msg) {
            this.debug('normalize %o', msg);
            var user = this.analytics.user();
            var global = exports.global;
            var query = global.location.search;
            var ctx = msg.context = msg.context || msg.options || {};
            //delete msg.context;
            delete msg.options;
            delete msg.integrations;
            delete ctx.page;
            //不发送writekey
            // msg.writeKey = this.options.apiKey;
            //ctx.userAgent = navigator.userAgent; 不发送userAgent
            if (!ctx.library) ctx.library = {
                name: 'analytics.js',
                version: this.analytics.VERSION
            };
            //msg.library = {name: 'analytics.js', version: this.analytics.VERSION}
            //ctx.campaign = utm(query);
            //this.referrerId(query, ctx);
            //msg.userId = msg.userId || user.id();
            msg.anonymousId = user.anonymousId();
            //msg.messageId = uuid();
            msg.sentAt = new Date();
            this.debug('normalized %o', msg);
            return msg;
        };

        /**
         * Send `obj` to `path`.
         *
         * @api private
         * @param {string} path
         * @param {Object} obj
         * @param {Function} fn
         */

        Segment.prototype.send = function(path, msg, fn) {
            var url = scheme()+'//'+ location.host + '/analytic_track' + path;
            var headers = {
                'Content-Type': 'text/plain'
            };
            fn = fn || noop;
            var self = this;

            // msg
            msg = this.normalize(msg);

            // send
            send(url, msg, headers, function(err, res) {
                self.debug('sent %O, received %O', msg, arguments);
                if (err) return fn(err);
                res.url = url;
                fn(null, res);
            });
        };

        /**
         * Gets/sets cookies on the appropriate domain.
         *
         * @api private
         * @param {string} name
         * @param {*} val
         */

        Segment.prototype.cookie = function(name, val) {
            var store = Segment.storage();
            if (arguments.length === 1) return store(name);
            var global = exports.global;
            var href = global.location.href;
            //var domain = '.' + topDomain(href);
            //if (domain === '.') domain = '';
            var domain = 'www' + topDomain(href); //统一www域名 登出之后后端清cookie ajs_user_id
            if (domain === 'www') domain = '';
            this.debug('store domain %s -> %s', href, domain);
            var opts = clone(cookieOptions);
            opts.domain = domain;
            this.debug('store %s, %s, %o', name, val, opts);
            store(name, val, opts);
            if (store(name)) return;
            delete opts.domain;
            this.debug('fallback store %s, %s, %o', name, val, opts);
            store(name, val, opts);
        };

        /**
         * Add referrerId to context.
         *
         * TODO: remove.
         *
         * @api private
         * @param {Object} query
         * @param {Object} ctx
         */

        Segment.prototype.referrerId = function(query, ctx) {
            var stored = this.cookie('s:context.referrer');
            var ad;

            if (stored) stored = json.parse(stored);
            if (query) ad = ads(query);

            ad = ad || stored;

            if (!ad) return;
            ctx.referrer = extend(ctx.referrer || {}, ad);
            this.cookie('s:context.referrer', json.stringify(ad));
        };

        /**
         * Get the scheme.
         *
         * The function returns `http:`
         * if the protocol is `http:` and
         * `https:` for other protocols.
         *
         * @api private
         * @return {string}
         */

        function scheme() {
            return protocol() === 'http:' ? 'http:' : 'https:';
        }

        /**
         * Noop.
         */

        function noop() {}


    }, {
        "ad-params": 206,
        "clone": 125,
        "cookie": 207,
        "extend": 185,
        "analytics.js-integration": 118,
        "segmentio/json@1.0.0": 197,
        "store": 208,
        "protocol": 209,
        "send-json": 210,
        "top-domain": 159,
        "utm-params": 211,
        "uuid": 212
    }],
    206: [function(require, module, exports) {
        /**
         * Module dependencies.
         */

        var parse = require('querystring').parse;

        /**
         * Expose `ads`
         */

        module.exports = ads;

        /**
         * All the ad query params we look for.
         */

        var QUERYIDS = {
            'btid': 'dataxu',
            'urid': 'millennial-media'
        };

        /**
         * Get all ads info from the given `querystring`
         *
         * @param {String} query
         * @return {Object}
         * @api private
         */

        function ads(query) {
            var params = parse(query);
            for (var key in params) {
                for (var id in QUERYIDS) {
                    if (key === id) {
                        return {
                            id: params[key],
                            type: QUERYIDS[id]
                        };
                    }
                }
            }
        }
    }, {
        "querystring": 213
    }],
    213: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var encode = encodeURIComponent;
        var decode = decodeURIComponent;
        var trim = require('trim');
        var type = require('type');

        var pattern = /(\w+)\[(\d+)\]/

        /**
         * Parse the given query `str`.
         *
         * @param {String} str
         * @return {Object}
         * @api public
         */

        exports.parse = function(str) {
            if ('string' != typeof str) return {};

            str = trim(str);
            if ('' == str) return {};
            if ('?' == str.charAt(0)) str = str.slice(1);

            var obj = {};
            var pairs = str.split('&');
            for (var i = 0; i < pairs.length; i++) {
                var parts = pairs[i].split('=');
                var key = decode(parts[0]);
                var m;

                if (m = pattern.exec(key)) {
                    obj[m[1]] = obj[m[1]] || [];
                    obj[m[1]][m[2]] = decode(parts[1]);
                    continue;
                }

                obj[parts[0]] = null == parts[1] ? '' : decode(parts[1]);
            }

            return obj;
        };

        /**
         * Stringify the given `obj`.
         *
         * @param {Object} obj
         * @return {String}
         * @api public
         */

        exports.stringify = function(obj) {
            if (!obj) return '';
            var pairs = [];

            for (var key in obj) {
                var value = obj[key];

                if ('array' == type(value)) {
                    for (var i = 0; i < value.length; ++i) {
                        pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
                    }
                    continue;
                }

                pairs.push(encode(key) + '=' + encode(obj[key]));
            }

            return pairs.join('&');
        };

    }, {
        "trim": 184,
        "type": 134
    }],
    207: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var debug = require('debug')('cookie');

        /**
         * Set or get cookie `name` with `value` and `options` object.
         *
         * @param {String} name
         * @param {String} value
         * @param {Object} options
         * @return {Mixed}
         * @api public
         */

        module.exports = function(name, value, options) {
            switch (arguments.length) {
                case 3:
                case 2:
                    return set(name, value, options);
                case 1:
                    return get(name);
                default:
                    return all();
            }
        };

        /**
         * Set cookie `name` to `value`.
         *
         * @param {String} name
         * @param {String} value
         * @param {Object} options
         * @api private
         */

        function set(name, value, options) {
            options = options || {};
            var str = encode(name) + '=' + encode(value);

            if (null == value) options.maxage = -1;

            if (options.maxage) {
                options.expires = new Date(+new Date + options.maxage);
            }

            if (options.path) str += '; path=' + options.path;
            if (options.domain) str += '; domain=' + options.domain;
            if (options.expires) str += '; expires=' + options.expires.toUTCString();
            if (options.secure) str += '; secure';

            document.cookie = str;
            // console.log(document.cookie);
        }

        /**
         * Return all cookies.
         *
         * @return {Object}
         * @api private
         */

        function all() {
            return parse(document.cookie);
        }


        /**
         * Get cookie `name`.
         *
         * @param {String} name
         * @return {String}
         * @api private
         */

        function get(name) {
            return all()[name];
        }

        //function get(postdetail) {
        //  return all()[name];
        //}

        /**
         * Parse cookie `str`.
         *
         * @param {String} str
         * @return {Object}
         * @api private
         */

        function parse(str) {
            var obj = {};
            var pairs = str.split(/ *; */);
            var pair;
            if ('' == pairs[0]) return obj;
            for (var i = 0; i < pairs.length; ++i) {
                pair = pairs[i].split('=');
                obj[decode(pair[0])] = decode(pair[1]);
            }
            return obj;
        }

        /**
         * Encode.
         */

        function encode(value) {
            try {
                return encodeURIComponent(value);
            } catch (e) {
                debug('error `encode(%o)` - %o', value, e)
            }
        }

        /**
         * Decode.
         */

        function decode(value) {
            try {
                return decodeURIComponent(value);
            } catch (e) {
                debug('error `decode(%o)` - %o', value, e)
            }
        }

    }, {
        "debug": 214
    }],
    214: [function(require, module, exports) {
        if ('undefined' == typeof window) {
            module.exports = require('./lib/debug');
        } else {
            module.exports = require('./debug');
        }

    }, {
        "./lib/debug": 215,
        "./debug": 216
    }],
    215: [function(require, module, exports) {
        /**
         * Module dependencies.
         */

        var tty = require('tty');

        /**
         * Expose `debug()` as the module.
         */

        module.exports = debug;

        /**
         * Enabled debuggers.
         */

        var names = [],
            skips = [];

        (process.env.DEBUG || '')
        .split(/[\s,]+/)
            .forEach(function(name) {
                name = name.replace('*', '.*?');
                if (name[0] === '-') {
                    skips.push(new RegExp('^' + name.substr(1) + '$'));
                } else {
                    names.push(new RegExp('^' + name + '$'));
                }
            });

        /**
         * Colors.
         */

        var colors = [6, 2, 3, 4, 5, 1];

        /**
         * Previous debug() call.
         */

        var prev = {};

        /**
         * Previously assigned color.
         */

        var prevColor = 0;

        /**
         * Is stdout a TTY? Colored output is disabled when `true`.
         */

        var isatty = tty.isatty(2);

        /**
         * Select a color.
         *
         * @return {Number}
         * @api private
         */

        function color() {
            return colors[prevColor++ % colors.length];
        }

        /**
         * Humanize the given `ms`.
         *
         * @param {Number} m
         * @return {String}
         * @api private
         */

        function humanize(ms) {
            var sec = 1000,
                min = 60 * 1000,
                hour = 60 * min;

            if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
            if (ms >= min) return (ms / min).toFixed(1) + 'm';
            if (ms >= sec) return (ms / sec | 0) + 's';
            return ms + 'ms';
        }

        /**
         * Create a debugger with the given `name`.
         *
         * @param {String} name
         * @return {Type}
         * @api public
         */

        function debug(name) {
            function disabled() {}

            disabled.enabled = false;

            var match = skips.some(function(re) {
                return re.test(name);
            });

            if (match) return disabled;

            match = names.some(function(re) {
                return re.test(name);
            });

            if (!match) return disabled;
            var c = color();

            function colored(fmt) {
                fmt = coerce(fmt);

                var curr = new Date;
                var ms = curr - (prev[name] || curr);
                prev[name] = curr;

                fmt = '  \u001b[9' + c + 'm' + name + ' ' + '\u001b[3' + c + 'm\u001b[90m' + fmt + '\u001b[3' + c + 'm' + ' +' + humanize(ms) + '\u001b[0m';

                console.error.apply(this, arguments);
            }

            function plain(fmt) {
                fmt = coerce(fmt);

                fmt = new Date().toUTCString() + ' ' + name + ' ' + fmt;
                console.error.apply(this, arguments);
            }

            colored.enabled = plain.enabled = true;

            return isatty || process.env.DEBUG_COLORS ? colored : plain;
        }

        /**
         * Coerce `val`.
         */

        function coerce(val) {
            if (val instanceof Error) return val.stack || val.message;
            return val;
        }

    }, {}],
    216: [function(require, module, exports) {

        /**
         * Expose `debug()` as the module.
         */

        module.exports = debug;

        /**
         * Create a debugger with the given `name`.
         *
         * @param {String} name
         * @return {Type}
         * @api public
         */

        function debug(name) {
            if (!debug.enabled(name)) return function() {};

            return function(fmt) {
                fmt = coerce(fmt);

                var curr = new Date;
                var ms = curr - (debug[name] || curr);
                debug[name] = curr;

                fmt = name + ' ' + fmt + ' +' + debug.humanize(ms);

                // This hackery is required for IE8
                // where `console.log` doesn't have 'apply'
                window.console && console.log && Function.prototype.apply.call(console.log, console, arguments);
            }
        }

        /**
         * The currently active debug mode names.
         */

        debug.names = [];
        debug.skips = [];

        /**
         * Enables a debug mode by name. This can include modes
         * separated by a colon and wildcards.
         *
         * @param {String} name
         * @api public
         */

        debug.enable = function(name) {
            try {
                localStorage.debug = name;
            } catch (e) {}

            var split = (name || '').split(/[\s,]+/),
                len = split.length;

            for (var i = 0; i < len; i++) {
                name = split[i].replace('*', '.*?');
                if (name[0] === '-') {
                    debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
                } else {
                    debug.names.push(new RegExp('^' + name + '$'));
                }
            }
        };

        /**
         * Disable debug output.
         *
         * @api public
         */

        debug.disable = function() {
            debug.enable('');
        };

        /**
         * Humanize the given `ms`.
         *
         * @param {Number} m
         * @return {String}
         * @api private
         */

        debug.humanize = function(ms) {
            var sec = 1000,
                min = 60 * 1000,
                hour = 60 * min;

            if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
            if (ms >= min) return (ms / min).toFixed(1) + 'm';
            if (ms >= sec) return (ms / sec | 0) + 's';
            return ms + 'ms';
        };

        /**
         * Returns true if the given mode name is enabled, false otherwise.
         *
         * @param {String} name
         * @return {Boolean}
         * @api public
         */

        debug.enabled = function(name) {
            for (var i = 0, len = debug.skips.length; i < len; i++) {
                if (debug.skips[i].test(name)) {
                    return false;
                }
            }
            for (var i = 0, len = debug.names.length; i < len; i++) {
                if (debug.names[i].test(name)) {
                    return true;
                }
            }
            return false;
        };

        /**
         * Coerce `val`.
         */

        function coerce(val) {
            if (val instanceof Error) return val.stack || val.message;
            return val;
        }

        // persist

        try {
            if (window.localStorage) debug.enable(localStorage.debug);
        } catch (e) {}

    }, {}],
    208: [function(require, module, exports) {

        /**
         * dependencies.
         */

        var unserialize = require('unserialize');
        var each = require('each');
        var storage;

        /**
         * Safari throws when a user
         * blocks access to cookies / localstorage.
         */

        try {
            storage = window.localStorage;
        } catch (e) {
            storage = null;
        }

        /**
         * Expose `store`
         */

        module.exports = store;

        /**
         * Store the given `key`, `val`.
         *
         * @param {String|Object} key
         * @param {Mixed} value
         * @return {Mixed}
         * @api public
         */

        function store(key, value) {
            var length = arguments.length;
            if (0 == length) return all();
            if (2 <= length) return set(key, value);
            if (1 != length) return;
            if (null == key) return storage.clear();
            if ('string' == typeof key) return get(key);
            if ('object' == typeof key) return each(key, set);
        }

        /**
         * supported flag.
         */

        store.supported = !!storage;

        /**
         * Set `key` to `val`.
         *
         * @param {String} key
         * @param {Mixed} val
         */

        function set(key, val) {
            return null == val ? storage.removeItem(key) : storage.setItem(key, JSON.stringify(val));
        }

        /**
         * Get `key`.
         *
         * @param {String} key
         * @return {Mixed}
         */

        function get(key) {
            return unserialize(storage.getItem(key));
        }

        /**
         * Get all.
         *
         * @return {Object}
         */

        function all() {
            var len = storage.length;
            var ret = {};
            var key;

            while (0 <= --len) {
                key = storage.key(len);
                ret[key] = get(key);
            }

            return ret;
        }

    }, {
        "unserialize": 217,
        "each": 139
    }],
    217: [function(require, module, exports) {

        /**
         * Unserialize the given "stringified" javascript.
         *
         * @param {String} val
         * @return {Mixed}
         */

        module.exports = function(val) {
            try {
                return JSON.parse(val);
            } catch (e) {
                return val || undefined;
            }
        };

    }, {}],
    209: [function(require, module, exports) {

        /**
         * Convenience alias
         */

        var define = Object.defineProperty;


        /**
         *  The base protocol
         */

        var initialProtocol = window.location.protocol;

        /**
         * Fallback mocked protocol in case Object.defineProperty doesn't exist.
         */

        var mockedProtocol;


        module.exports = function(protocol) {
            if (arguments.length === 0) return get();
            else return set(protocol);
        };


        /**
         * Sets the protocol to be http:
         */

        module.exports.http = function() {
            set('http:');
        };


        /**
         * Sets the protocol to be https:
         */

        module.exports.https = function() {
            set('https:');
        };


        /**
         * Reset to the initial protocol.
         */

        module.exports.reset = function() {
            set(initialProtocol);
        };


        /**
         * Gets the current protocol, using the fallback and then the native protocol.
         *
         * @return {String} protocol
         */

        function get() {
            return mockedProtocol || window.location.protocol;
        }


        /**
         * Sets the protocol
         *
         * @param {String} protocol
         */

        function set(protocol) {
            try {
                define(window.location, 'protocol', {
                    get: function() {
                        return protocol;
                    }
                });
            } catch (err) {
                mockedProtocol = protocol;
            }
        }

    }, {}],
    210: [function(require, module, exports) {
        /**
         * Module dependencies.
         */

        var encode = require('base64-encode');
        var cors = require('has-cors');
        var jsonp = require('jsonp');
        var JSON = require('json');

        function getCookieValue(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    //var cookie = jQuery.trim(cookies[i]);
                    var cookie = cookies[i].replace(/\s+/g, "");
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }

        /**
         * Expose `send`
         */

        exports = module.exports = cors ? json : base64;

        /**
         * Expose `callback`
         */

        exports.callback = 'callback';

        /**
         * Expose `prefix`
         */

        exports.prefix = 'data';

        /**
         * Expose `json`.
         */

        exports.json = json;

        /**
         * Expose `base64`.
         */

        exports.base64 = base64;

        /**
         * Expose `type`
         */

        exports.type = cors ? 'xhr' : 'jsonp';

        /**
         * Send the given `obj` to `url` with `fn(err, req)`.
         *
         * @param {String} url
         * @param {Object} obj
         * @param {Object} headers
         * @param {Function} fn
         * @api private
         */

        function json(url, obj, headers, fn) {
            //console.log(url,obj);
            if (obj.properties === false) {
                return false;
            } //禁止发送analytics.track 加__ignore 参数 例如广场分页上一页或下一页到底时
            if (3 == arguments.length) fn = headers, headers = {};

            var req = new XMLHttpRequest;

            req.onerror = fn;
            req.onreadystatechange = done;
            var async = true;
            if (obj.properties && obj.properties._sync) {
              async = false;
            }
            req.open('POST', url, async);
            req.setRequestHeader("X-CSRFToken", getCookieValue('csrftoken'));
            for (var k in headers) req.setRequestHeader(k, headers[k]);
            req.send(JSON.stringify(obj));

            function done() {
                if (4 == req.readyState) return fn(null, req);
            }

        }

        /**
         * Send the given `obj` to `url` with `fn(err, req)`.
         *
         * @param {String} url
         * @param {Object} obj
         * @param {Function} fn
         * @api private
         */

        function base64(url, obj, _, fn) {
            if (3 == arguments.length) fn = _;
            var prefix = exports.prefix;
            obj = encode(JSON.stringify(obj));
            obj = encodeURIComponent(obj);
            url += '?' + prefix + '=' + obj;
            jsonp(url, {
                param: exports.callback
            }, function(err, obj) {
                if (err) return fn(err);
                fn(null, {
                    url: url,
                    body: obj
                });
            });
        }

    }, {
        "base64-encode": 218,
        "has-cors": 219,
        "jsonp": 220,
        "json": 197
    }],
    218: [function(require, module, exports) {
        var utf8Encode = require('utf8-encode');
        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        module.exports = encode;

        function encode(input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;

            input = utf8Encode(input);

            while (i < input.length) {

                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) + keyStr.charAt(enc4);

            }

            return output;
        }
    }, {
        "utf8-encode": 221
    }],
    221: [function(require, module, exports) {
        module.exports = encode;

        function encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {

                var c = string.charCodeAt(n);

                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return utftext;
        }
    }, {}],
    219: [function(require, module, exports) {

        /**
         * Module exports.
         *
         * Logic borrowed from Modernizr:
         *
         *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
         */

        try {
            module.exports = typeof XMLHttpRequest !== 'undefined' &&
                'withCredentials' in new XMLHttpRequest();
        } catch (err) {
            // if XMLHttp support is disabled in IE then it will throw
            // when trying to create
            module.exports = false;
        }

    }, {}],
    220: [function(require, module, exports) {
        /**
         * Module dependencies
         */

        var debug = require('debug')('jsonp');

        /**
         * Module exports.
         */

        module.exports = jsonp;

        /**
         * Callback index.
         */

        var count = 0;

        /**
         * Noop function.
         */

        function noop() {}

        /**
         * JSONP handler
         *
         * Options:
         *  - param {String} qs parameter (`callback`)
         *  - timeout {Number} how long after a timeout error is emitted (`60000`)
         *
         * @param {String} url
         * @param {Object|Function} optional options / callback
         * @param {Function} optional callback
         */

        function jsonp(url, opts, fn) {
            if ('function' == typeof opts) {
                fn = opts;
                opts = {};
            }
            if (!opts) opts = {};

            var prefix = opts.prefix || '__jp';
            var param = opts.param || 'callback';
            var timeout = null != opts.timeout ? opts.timeout : 60000;
            var enc = encodeURIComponent;
            var target = document.getElementsByTagName('script')[0] || document.head;
            var script;
            var timer;

            // generate a unique id for this request
            var id = prefix + (count++);

            if (timeout) {
                timer = setTimeout(function() {
                    cleanup();
                    if (fn) fn(new Error('Timeout'));
                }, timeout);
            }

            function cleanup() {
                script.parentNode.removeChild(script);
                window[id] = noop;
            }

            window[id] = function(data) {
                debug('jsonp got', data);
                if (timer) clearTimeout(timer);
                cleanup();
                if (fn) fn(null, data);
            };

            // add qs component
            url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
            url = url.replace('?&', '?');

            debug('jsonp req "%s"', url);

            // create script
            script = document.createElement('script');
            script.src = url;
            target.parentNode.insertBefore(script, target);
        }

    }, {
        "debug": 214
    }],
    211: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var parse = require('querystring').parse;

        /**
         * Expose `utm`
         */

        module.exports = utm;

        /**
         * Get all utm params from the given `querystring`
         *
         * @param {String} query
         * @return {Object}
         * @api private
         */

        function utm(query) {
            if ('?' == query.charAt(0)) query = query.substring(1);
            var query = query.replace(/\?/g, '&');
            var params = parse(query);
            var param;
            var ret = {};

            for (var key in params) {
                if (~key.indexOf('utm_')) {
                    param = key.substr(4);
                    if ('campaign' == param) param = 'name';
                    ret[param] = params[key];
                }
            }

            return ret;
        }

    }, {
        "querystring": 213
    }],
    212: [function(require, module, exports) {

        /**
         * Taken straight from jed's gist: https://gist.github.com/982883
         *
         * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
         * where each x is replaced with a random hexadecimal digit from 0 to f, and
         * y is replaced with a random hexadecimal digit from 8 to b.
         */

        module.exports = function uuid(a) {
            return a // if the placeholder was passed, return
                ? ( // a random number from 0 to 15
                    a ^ // unless b is 8,
                    Math.random() // in which case
                    * 16 // a random number from
                    >> a / 4 // 8 to 11
                ).toString(16) // in hexadecimal
                : ( // or otherwise a concatenated string:
                    [1e7] + // 10000000 +
                    -1e3 + // -1000 +
                    -4e3 + // -4000 +
                    -8e3 + // -80000000 +
                    -1e11 // -100000000000,
                ).replace( // replacing
                    /[018]/g, // zeroes, ones, and eights with
                    uuid // random hex digits
                )
        };
    }, {}],
    76: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122
    }],
    77: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122,
        "next-tick": 146
    }],
    78: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "bind": 132,
        "analytics.js-integration": 118,
        "when": 192
    }],
    79: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    80: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122,
        "keys": 152,
        "global-queue": 190
    }],
    81: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190,
        "slug": 129
    }],
    82: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "alias": 194,
        "analytics.js-integration": 118
    }],
    83: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118
    }],
    84: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "clone": 125,
        "analytics.js-integration": 118
    }],
    85: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "alias": 194,
        "convert-dates": 195,
        "analytics.js-integration": 118,
        "global-queue": 190,
        "to-unix-timestamp": 222
    }],
    222: [function(require, module, exports) {

        /**
         * Expose `toUnixTimestamp`.
         */

        module.exports = toUnixTimestamp;


        /**
         * Convert a `date` into a Unix timestamp.
         *
         * @param {Date}
         * @return {Number}
         */

        function toUnixTimestamp(date) {
            return Math.floor(date.getTime() / 1000);
        }
    }, {}],
    86: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "component/cookie": 207,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    87: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "next-tick": 146
    }],
    88: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "use-https": 120
    }],
    89: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 121,
        "analytics.js-integration": 118,
        "to-snake-case": 119
    }],
    90: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "omit": 202
    }],
    91: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "bind": 132,
        "analytics.js-integration": 118,
        "next-tick": 146,
        "when": 192
    }],
    92: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 5,
        "analytics.js-integration": 118
    }],
    5: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var toFunction = require('to-function');
        var type;

        try {
            type = require('type-component');
        } catch (e) {
            type = require('type');
        }

        /**
         * HOP reference.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Iterate the given `obj` and invoke `fn(val, i)`.
         *
         * @param {String|Array|Object} obj
         * @param {Function} fn
         * @api public
         */

        module.exports = function(obj, fn) {
            fn = toFunction(fn);
            switch (type(obj)) {
                case 'array':
                    return array(obj, fn);
                case 'object':
                    if ('number' == typeof obj.length) return array(obj, fn);
                    return object(obj, fn);
                case 'string':
                    return string(obj, fn);
            }
        };

        /**
         * Iterate string chars.
         *
         * @param {String} obj
         * @param {Function} fn
         * @api private
         */

        function string(obj, fn) {
            for (var i = 0; i < obj.length; ++i) {
                fn(obj.charAt(i), i);
            }
        }

        /**
         * Iterate object keys.
         *
         * @param {Object} obj
         * @param {Function} fn
         * @api private
         */

        function object(obj, fn) {
            for (var key in obj) {
                if (has.call(obj, key)) {
                    fn(key, obj[key]);
                }
            }
        }

        /**
         * Iterate array-ish.
         *
         * @param {Array|Object} obj
         * @param {Function} fn
         * @api private
         */

        function array(obj, fn) {
            for (var i = 0; i < obj.length; ++i) {
                fn(obj[i], i);
            }
        }

    }, {
        "to-function": 149,
        "type": 134
    }],
    93: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 5,
        "entries": 223,
        "extend": 224,
        "analytics.js-integration": 118,
        "map": 225,
        "pick": 226,
        "values": 227
    }],
    223: [function(require, module, exports) {
        'use strict';

        /**
         * `hasOwnProperty` reference.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Takes an array and returns a nested array containing all the object's own
         * key-value pairs.
         *
         * Note that the order of the output will vary across platforms, depending on
         * how that platform handles object iteration order.
         *
         * @param {Object} object
         * @return {Array[]} An array of the object's key-value pairs.
         */

        var entries = function entries(object) {
            var results = [];

            for (var key in object) {
                if (has.call(object, key)) {
                    results.push([key, object[key]]);
                }
            }

            return results;
        };

        /**
         * Exports.
         */

        module.exports = entries;

    }, {}],
    224: [function(require, module, exports) {
        'use strict';

        /**
         * hasOwnProperty reference.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Copy the properties of one or more `objects` onto a destination object. Input objects are iterated over
         * in left-to-right order, so duplicate properties on later objects will overwrite those from
         * erevious ones. Only enumerable and own properties of the input objects are copied onto the
         * resulting object.
         *
         * @name extend
         * @api public
         * @category Object
         * @param {Object} dest The destination object.
         * @param {...Object} sources The source objects.
         * @return {Object} `dest`, extended with the properties of all `sources`.
         * @example
         * var a = { a: 'a' };
         * var b = { b: 'b' };
         * var c = { c: 'c' };
         *
         * extend(a, b, c);
         * //=> { a: 'a', b: 'b', c: 'c' };
         */

        module.exports = function(dest /*, sources */ ) {
            var sources = Array.prototype.slice.call(arguments, 1);

            for (var i = 0; i < sources.length; i += 1) {
                for (var key in sources[i]) {
                    if (has.call(sources[i], key)) {
                        dest[key] = sources[i][key];
                    }
                }
            }

            return dest;
        };

    }, {}],
    225: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var toFunction = require('to-function');

        /**
         * Map the given `arr` with callback `fn(val, i)`.
         *
         * @param {Array} arr
         * @param {Function} fn
         * @return {Array}
         * @api public
         */

        module.exports = function(arr, fn) {
            var ret = [];
            fn = toFunction(fn);
            for (var i = 0; i < arr.length; ++i) {
                ret.push(fn(arr[i], i));
            }
            return ret;
        };
    }, {
        "to-function": 149
    }],
    226: [function(require, module, exports) {
        'use strict';

        var objToString = Object.prototype.toString;

        // TODO: Move to lib
        var existy = function(val) {
            return val != null;
        };

        // TODO: Move to lib
        var isArray = function(val) {
            return objToString.call(val) === '[object Array]';
        };

        // TODO: Move to lib
        var isString = function(val) {
            return typeof val === 'string' || objToString.call(val) === '[object String]';
        };

        // TODO: Move to lib
        var isObject = function(val) {
            return val != null && typeof val === 'object';
        };

        /**
         * Returns a copy of the new `object` containing only the specified properties.
         *
         * @name pick
         * @api public
         * @category Object
         * @see {@link omit}
         * @param {Array.<string>|string} props The property or properties to keep.
         * @param {Object} object The object to iterate over.
         * @return {Object} A new object containing only the specified properties from `object`.
         * @example
         * var person = { name: 'Tim', occupation: 'enchanter', fears: 'rabbits' };
         *
         * pick('name', person);
         * //=> { name: 'Tim' }
         *
         * pick(['name', 'fears'], person);
         * //=> { name: 'Tim', fears: 'rabbits' }
         */

        var pick = function pick(props, object) {
            if (!existy(object) || !isObject(object)) {
                return {};
            }

            if (isString(props)) {
                props = [props];
            }

            if (!isArray(props)) {
                props = [];
            }

            var result = {};

            for (var i = 0; i < props.length; i += 1) {
                if (isString(props[i]) && props[i] in object) {
                    result[props[i]] = object[props[i]];
                }
            }

            return result;
        };

        /**
         * Exports.
         */

        module.exports = pick;

    }, {}],
    227: [function(require, module, exports) {
        'use strict';

        /**
         * Module dependencies.
         */

        // XXX: Hacky fix for Duo not supporting scoped modules
        var keys;
        try {
            keys = require('@ndhoule/keys');
        } catch (e) {
            keys = require('keys');
        }

        /**
         * Returns an array containing all enumerable values from a `source` object.
         *
         * @name values
         * @api public
         * @category Object
         * @param {Object} source The object to retrieve values from.
         * @return {Array} An array of all the `source` object's values.
         * @example
         * values({ a: 1, b: 2, c: 3 });
         * //=> [1, 2, 3]
         */

        var values = function values(source) {
            var ks = keys(source);
            var results = new Array(ks.length);

            for (var i = 0; i < ks.length; i += 1) {
                results[i] = source[ks[i]];
            }

            return results;
        };

        /**
         * Exports.
         */

        module.exports = values;

    }, {
        "keys": 152
    }],
    94: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 5,
        "analytics.js-integration": 118,
        "querystring": 228,
        "use-https": 120
    }],
    228: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var encode = encodeURIComponent;
        var decode = decodeURIComponent;
        var trim = require('trim');
        var type = require('type');

        /**
         * Parse the given query `str`.
         *
         * @param {String} str
         * @return {Object}
         * @api public
         */

        exports.parse = function(str) {
            if ('string' != typeof str) return {};

            str = trim(str);
            if ('' == str) return {};
            if ('?' == str.charAt(0)) str = str.slice(1);

            var obj = {};
            var pairs = str.split('&');
            for (var i = 0; i < pairs.length; i++) {
                var parts = pairs[i].split('=');
                var key = decode(parts[0]);
                var m;

                if (m = /(\w+)\[(\d+)\]/.exec(key)) {
                    obj[m[1]] = obj[m[1]] || [];
                    obj[m[1]][m[2]] = decode(parts[1]);
                    continue;
                }

                obj[parts[0]] = null == parts[1] ? '' : decode(parts[1]);
            }

            return obj;
        };

        /**
         * Stringify the given `obj`.
         *
         * @param {Object} obj
         * @return {String}
         * @api public
         */

        exports.stringify = function(obj) {
            if (!obj) return '';
            var pairs = [];

            for (var key in obj) {
                var value = obj[key];

                if ('array' == type(value)) {
                    for (var i = 0; i < value.length; ++i) {
                        pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
                    }
                    continue;
                }

                pairs.push(encode(key) + '=' + encode(obj[key]));
            }

            return pairs.join('&');
        };

    }, {
        "trim": 184,
        "type": 134
    }],
    95: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 5,
        "analytics.js-integration": 118,
        "is": 122,
        "global-queue": 190
    }],
    96: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "global-queue": 190,
        "analytics.js-integration": 118
    }],
    97: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    98: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "global-queue": 190,
        "reduce": 229
    }],
    229: [function(require, module, exports) {

        var each = require('each');


        /**
         * Reduce an array or object.
         *
         * @param {Array|Object} obj
         * @param {Mixed} memo
         * @param {Function} iterator
         * @return {Mixed}
         */

        module.exports = function reduce(obj, memo, iterator) {
            each(obj, function(a, b) {
                memo = iterator.call(null, memo, a, b, obj);
            });
            return memo;
        };
    }, {
        "each": 139
    }],
    99: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "each": 5
    }],
    100: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "bind": 132,
        "fmt": 141,
        "analytics.js-integration": 118,
        "is": 122,
        "jsonp": 230,
        "url": 231,
        "when": 232
    }],
    230: [function(require, module, exports) {
        /**
         * Module dependencies
         */

        var debug = require('debug')('jsonp');
        var indexof = require('indexof');

        /**
         * Module exports.
         */

        module.exports = jsonp;

        /**
         * Callback index.
         */

        var count = 0;

        /**
         * Noop function.
         */

        function noop() {};

        /**
         * JSONP handler
         *
         * Options:
         *  - param {String} qs parameter (`callback`)
         *  - timeout {Number} how long after a timeout error is emitted (`60000`)
         *
         * @param {String} url
         * @param {Object|Function} optional options / callback
         * @param {Function} optional callback
         */

        function jsonp(url, opts, fn) {
            if ('function' == typeof opts) {
                fn = opts;
                opts = {};
            }
            if (!opts) opts = {};

            var param = opts.param || 'callback';
            var timeout = null != opts.timeout ? opts.timeout : 60000;
            var enc = encodeURIComponent;
            var target = document.getElementsByTagName('script')[0] || document.head;
            var script;
            var timer;

            // generate a unique id for this request
            var id = count++;

            if (timeout) {
                timer = setTimeout(function() {
                    cleanup();
                    if (fn) fn(new Error('Timeout'));
                }, timeout);
            }

            function cleanup() {
                var node = script.parentNode;
                if (node) node.removeChild(script);
                window['__jp' + id] = noop;
            }

            window['__jp' + id] = function(data) {
                debug('jsonp got', data);
                if (timer) clearTimeout(timer);
                cleanup();
                if (fn) fn(null, data);
            };

            // add qs component
            url += (~indexof(url, '?') ? '&' : '?') + param + '=' + enc('__jp' + id + '');
            url = url.replace('?&', '?');

            debug('jsonp req "%s"', url);

            // create script
            script = document.createElement('script');
            script.src = url;
            target.parentNode.insertBefore(script, target);
        };

    }, {
        "debug": 214,
        "indexof": 148
    }],
    231: [function(require, module, exports) {

        /**
         * Parse the given `url`.
         *
         * @param {String} str
         * @return {Object}
         * @api public
         */

        exports.parse = function(url) {
            var a = document.createElement('a');
            a.href = url;
            return {
                href: a.href,
                host: a.host || location.host,
                port: ('0' === a.port || '' === a.port) ? port(a.protocol) : a.port,
                hash: a.hash,
                hostname: a.hostname || location.hostname,
                pathname: a.pathname.charAt(0) != '/' ? '/' + a.pathname : a.pathname,
                protocol: !a.protocol || ':' == a.protocol ? location.protocol : a.protocol,
                search: a.search,
                query: a.search.slice(1)
            };
        };

        /**
         * Check if `url` is absolute.
         *
         * @param {String} url
         * @return {Boolean}
         * @api public
         */

        exports.isAbsolute = function(url) {
            return 0 == url.indexOf('//') || !!~url.indexOf('://');
        };

        /**
         * Check if `url` is relative.
         *
         * @param {String} url
         * @return {Boolean}
         * @api public
         */

        exports.isRelative = function(url) {
            return !exports.isAbsolute(url);
        };

        /**
         * Check if `url` is cross domain.
         *
         * @param {String} url
         * @return {Boolean}
         * @api public
         */

        exports.isCrossDomain = function(url) {
            url = exports.parse(url);
            var location = exports.parse(window.location.href);
            return url.hostname !== location.hostname || url.port !== location.port || url.protocol !== location.protocol;
        };

        /**
         * Return default port for `protocol`.
         *
         * @param  {String} protocol
         * @return {String}
         * @api private
         */
        function port(protocol) {
            switch (protocol) {
                case 'http:':
                    return 80;
                case 'https:':
                    return 443;
                default:
                    return location.port;
            }
        }

    }, {}],
    232: [function(require, module, exports) {
        /**
         * Module dependencies.
         */

        var nextTick = require('next-tick');

        /**
         * Loop on a short interval until `condition()` is true, then call `fn`.
         *
         * @param {Function} condition
         * @param {Function} fn
         * @param {number} [interval=10]
         */

        function when(condition, fn, interval) {
            if (typeof condition !== 'function') throw new Error('condition must be a function');
            if (typeof fn !== 'function') throw new Error('fn must be a function');

            if (condition()) return nextTick(fn);

            var ref = setInterval(function() {
                if (!condition()) return;
                nextTick(fn);
                clearInterval(ref);
            }, interval || 10);
        }

        /**
         * Exports.
         */

        module.exports = when;

    }, {
        "next-tick": 233
    }],
    233: [function(require, module, exports) {
        'use strict';

        var callable, byObserver;

        callable = function(fn) {
            if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
            return fn;
        };

        byObserver = function(Observer) {
            var node = document.createTextNode(''),
                queue, i = 0;
            new Observer(function() {
                var data;
                if (!queue) return;
                data = queue;
                queue = null;
                if (typeof data === 'function') {
                    data();
                    return;
                }
                data.forEach(function(fn) {
                    fn();
                });
            }).observe(node, {
                characterData: true
            });
            return function(fn) {
                callable(fn);
                if (queue) {
                    if (typeof queue === 'function') queue = [queue, fn];
                    else queue.push(fn);
                    return;
                }
                queue = fn;
                node.data = (i = ++i % 2);
            };
        };

        module.exports = (function() {
            // Node.js
            if ((typeof process === 'object') && process &&
                (typeof process.nextTick === 'function')) {
                return process.nextTick;
            }

            // MutationObserver
            if ((typeof document === 'object') && document) {
                if (typeof MutationObserver === 'function') {
                    return byObserver(MutationObserver);
                }
                if (typeof WebKitMutationObserver === 'function') {
                    return byObserver(WebKitMutationObserver);
                }
            }

            // W3C Draft
            // http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
            if (typeof setImmediate === 'function') {
                return function(cb) {
                    setImmediate(callable(cb));
                };
            }

            // Wide available standard
            if ((typeof setTimeout === 'function') || (typeof setTimeout === 'object')) {
                return function(cb) {
                    setTimeout(callable(cb), 0);
                };
            }

            return null;
        }());

    }, {}],
    101: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "querystring": 228,
        "extend": 224,
        "foldl": 142,
        "each": 5
    }],
    102: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "each": 5,
        "analytics.js-integration": 118,
        "global-queue": 190
    }],
    103: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "analytics.js-integration": 118,
        "to-no-case": 145,
        "querystring": 228,
        "js-sha256": 234
    }],
    234: [function(require, module, exports) {
        /*
         * js-sha256 v0.1.1
         * https://github.com/emn178/js-sha256
         *
         * Copyright 2014, emn178#gmail.com
         *
         * Licensed under the MIT license:
         * http://www.opensource.org/licenses/MIT
         */

        (function(root, undefined) {
            'use strict';

            var HEX_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            var HEX_TABLE = {
                '0': 0,
                '1': 1,
                '2': 2,
                '3': 3,
                '4': 4,
                '5': 5,
                '6': 6,
                '7': 7,
                '8': 8,
                '9': 9,
                'a': 10,
                'b': 11,
                'c': 12,
                'd': 13,
                'e': 14,
                'f': 15,
                'A': 10,
                'B': 11,
                'C': 12,
                'D': 13,
                'E': 14,
                'F': 15
            };

            var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
                0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
                0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
                0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
                0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
                0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
                0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
                0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
            ];

            var sha256 = function(message) {
                return sha2(message, true);
            };

            var sha224 = function(message) {
                return sha2(message, false);
            };

            var sha2 = function(message, is256) {
                if (is256 === undefined)
                    is256 = true;

                var blocks = hasUTF8(message) ? UTF8toBlocks(message) : ASCIItoBlocks(message);
                if (is256) {
                    var h0 = 0x6a09e667;
                    var h1 = 0xbb67ae85;
                    var h2 = 0x3c6ef372;
                    var h3 = 0xa54ff53a;
                    var h4 = 0x510e527f;
                    var h5 = 0x9b05688c;
                    var h6 = 0x1f83d9ab;
                    var h7 = 0x5be0cd19;
                } else // 224
                {
                    var h0 = 0xc1059ed8;
                    var h1 = 0x367cd507;
                    var h2 = 0x3070dd17;
                    var h3 = 0xf70e5939;
                    var h4 = 0xffc00b31;
                    var h5 = 0x68581511;
                    var h6 = 0x64f98fa7;
                    var h7 = 0xbefa4fa4;
                }

                for (var i = 0, length = blocks.length; i < length; i += 16) {
                    var w = [],
                        s0, s1;
                    for (var j = 0; j < 16; ++j)
                        w[j] = blocks[i + j];
                    for (var j = 16; j < 64; ++j) {
                        s0 = rightrotate(w[j - 15], 7) ^ rightrotate(w[j - 15], 18) ^ (w[j - 15] >>> 3);
                        s1 = rightrotate(w[j - 2], 17) ^ rightrotate(w[j - 2], 19) ^ (w[j - 2] >>> 10);
                        w[j] = w[j - 16] + s0 + w[j - 7] + s1;
                    }

                    var a = h0;
                    var b = h1;
                    var c = h2;
                    var d = h3;
                    var e = h4;
                    var f = h5;
                    var g = h6;
                    var h = h7;
                    var maj, t1, t2, ch;

                    for (var j = 0; j < 64; ++j) {
                        s0 = rightrotate(a, 2) ^ rightrotate(a, 13) ^ rightrotate(a, 22);
                        maj = (a & b) ^ (a & c) ^ (b & c);
                        t2 = s0 + maj;
                        s1 = rightrotate(e, 6) ^ rightrotate(e, 11) ^ rightrotate(e, 25);
                        ch = (e & f) ^ ((~e) & g);
                        t1 = (h + s1 + ch + K[j] + w[j]) & 0xffffffff;

                        h = g;
                        g = f;
                        f = e;
                        e = d + t1;
                        d = c;
                        c = b;
                        b = a;
                        a = t1 + t2;
                    }

                    h0 += a;
                    h1 += b;
                    h2 += c;
                    h3 += d;
                    h4 += e;
                    h5 += f;
                    h6 += g;
                    h7 += h;
                }

                var hex = toHexString(h0) + toHexString(h1) + toHexString(h2) + toHexString(h3) + toHexString(h4) + toHexString(h5) + toHexString(h6);
                if (is256)
                    hex += toHexString(h7);
                return hex;
            };

            var rightrotate = function(x, c) {
                return (x >>> c) | (x << (32 - c));
            };

            var toHexString = function(num) {
                var hex = "";
                for (var i = 0; i < 4; i++) {
                    var offset = 3 - i << 3;
                    hex += HEX_CHARS[(num >> (offset + 4)) & 0x0F] + HEX_CHARS[(num >> offset) & 0x0F];
                }
                return hex;
            };

            var hasUTF8 = function(message) {
                var i = message.length;
                while (i--)
                    if (message.charCodeAt(i) > 127)
                        return true;
                return false;
            };

            var ASCIItoBlocks = function(message) {
                // a block is 32 bits(4 bytes), a chunk is 512 bits(64 bytes)
                var length = message.length;
                var chunkCount = ((length + 8) >> 6) + 1;
                var blockCount = chunkCount << 4; // chunkCount * 16
                var blocks = [];
                var i;
                for (i = 0; i < blockCount; ++i)
                    blocks[i] = 0;
                for (i = 0; i < length; ++i)
                    blocks[i >> 2] |= message.charCodeAt(i) << (3 - (i % 4) << 3);
                blocks[i >> 2] |= 0x80 << (3 - (i % 4) << 3);
                blocks[blockCount - 1] = length << 3; // length * 8
                return blocks;
            };

            var UTF8toBlocks = function(message) {
                var uri = encodeURIComponent(message);
                var blocks = [];
                for (var i = 0, bytes = 0, length = uri.length; i < length; ++i) {
                    var c = uri.charCodeAt(i);
                    if (c == 37) // %
                        blocks[bytes >> 2] |= ((HEX_TABLE[uri.charAt(++i)] << 4) | HEX_TABLE[uri.charAt(++i)]) << (3 - (bytes % 4) << 3);
                    else
                        blocks[bytes >> 2] |= c << (3 - (bytes % 4) << 3);
                    ++bytes;
                }
                var chunkCount = ((bytes + 8) >> 6) + 1;
                var blockCount = chunkCount << 4; // chunkCount * 16
                var index = bytes >> 2;
                blocks[index] |= 0x80 << (3 - (bytes % 4) << 3);
                for (var i = index + 1; i < blockCount; ++i)
                    blocks[i] = 0;
                blocks[blockCount - 1] = bytes << 3; // bytes * 8
                return blocks;
            };

            if (typeof(module) != 'undefined') {
                sha256.sha256 = sha256;
                sha256.sha224 = sha224;
                module.exports = sha256;
            } else if (root) {
                root.sha256 = sha256;
                root.sha224 = sha224;
            }
        }(this));

    }, {}],
    104: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "obj-case": 235,
        "each": 5,
        "analytics.js-integration": 118,
        "to-iso-string": 189,
        "map": 225,
        "type": 147
    }],
    235: [function(require, module, exports) {

        var identity = function(_) {
            return _;
        };


        /**
         * Module exports, export
         */

        module.exports = module.exports.find = multiple(find);


        /**
         * Export the replacement function, return the modified object
         */

        module.exports.replace = function(obj, key, val) {
            multiple(replace).apply(this, arguments);
            return obj;
        };


        /**
         * Export the delete function, return the modified object
         */

        module.exports.del = function(obj, key) {
            multiple(del).apply(this, arguments);
            return obj;
        };


        /**
         * Compose applying the function to a nested key
         */

        function multiple(fn) {
            return function(obj, path, val) {
                path = normalize(path);

                var key;
                var finished = false;

                while (!finished) loop();

                function loop() {
                    for (key in obj) {
                        var normalizedKey = normalize(key);
                        if (0 === path.indexOf(normalizedKey)) {
                            var temp = path.substr(normalizedKey.length);
                            if (temp.charAt(0) === '.' || temp.length === 0) {
                                path = temp.substr(1);
                                var child = obj[key];

                                // we're at the end and there is nothing.
                                if (null == child) {
                                    finished = true;
                                    obj = null;
                                    return;
                                }

                                // we're at the end and there is something.
                                if (!path.length) {
                                    finished = true;
                                    return;
                                }

                                // step into child
                                obj = child;

                                // but we're done here
                                return;
                            }
                        }
                    }

                    key = undefined;
                    // if we found no matching properties
                    // on the current object, there's no match.
                    finished = true;
                }

                if (!key) return;

                // the `obj` and `key` is one above the leaf object and key, so
                // start object: { a: { 'b.c': 10 } }
                // end object: { 'b.c': 10 }
                // end key: 'b.c'
                // this way, you can do `obj[key]` and get `10`.
                return fn(obj, key, val);
            };
        }


        /**
         * Find an object by its key
         *
         * find({ first_name : 'Calvin' }, 'firstName')
         */

        function find(obj, key) {
            if (obj.hasOwnProperty(key)) return obj[key];
        }


        /**
         * Delete a value for a given key
         *
         * del({ a : 'b', x : 'y' }, 'X' }) -> { a : 'b' }
         */

        function del(obj, key) {
            if (obj.hasOwnProperty(key)) delete obj[key];
            return obj;
        }


        /**
         * Replace an objects existing value with a new one
         *
         * replace({ a : 'b' }, 'a', 'c') -> { a : 'c' }
         */

        function replace(obj, key, val) {
            if (obj.hasOwnProperty(key)) obj[key] = val;
            return obj;
        }

        /**
         * Normalize a `dot.separated.path`.
         *
         * A.HELL(!*&#(!)O_WOR   LD.bar => ahelloworldbar
         *
         * @param {String} path
         * @return {String}
         */

        function normalize(path) {
            return path.replace(/[^a-zA-Z0-9\.]+/g, '').toLowerCase();
        }
    }, {}],
    105: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118
    }],
    106: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "cookie": 207,
        "each": 5,
        "analytics.js-integration": 118,
        "load-script": 236,
        "querystring": 228,
        "use-https": 120
    }],
    236: [function(require, module, exports) {
        var type = require('type');


        module.exports = function loadScript(options, callback) {
            if (!options) throw new Error('Cant load nothing...');

            // Allow for the simplest case, just passing a `src` string.
            if (type(options) === 'string') options = {
                src: options
            };

            var https = document.location.protocol === 'https:' ||
                document.location.protocol === 'chrome-extension:';

            // If you use protocol relative URLs, third-party scripts like Google
            // Analytics break when testing with `file:` so this fixes that.
            if (options.src && options.src.indexOf('//') === 0) {
                options.src = https ? 'https:' + options.src : 'http:' + options.src;
            }

            // Allow them to pass in different URLs depending on the protocol.
            if (https && options.https) options.src = options.https;
            else if (!https && options.http) options.src = options.http;

            // Make the `<script>` element and insert it before the first script on the
            // page, which is guaranteed to exist since this Javascript is running.
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = options.src;

            var firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(script, firstScript);

            // If we have a callback, attach event handlers, even in IE. Based off of
            // the Third-Party Javascript script loading example:
            // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
            if (callback && type(callback) === 'function') {
                if (script.addEventListener) {
                    script.addEventListener('load', function(event) {
                        callback(null, event);
                    }, false);
                    script.addEventListener('error', function(event) {
                        callback(new Error('Failed to load the script.'), event);
                    }, false);
                } else if (script.attachEvent) {
                    script.attachEvent('onreadystatechange', function(event) {
                        if (/complete|loaded/.test(script.readyState)) {
                            callback(null, event);
                        }
                    });
                }
            }

            // Return the script element in case they want to do anything special, like
            // give it an ID or attributes.
            return script;
        };

    }, {
        "type": 134
    }],
    107: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "each": 5,
        "analytics.js-integration": 118
    }],
    108: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 5,
        "analytics.js-integration": 118
    }],
    109: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "each": 5,
        "analytics.js-integration": 118
    }],
    110: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "each": 5,
        "analytics.js-integration": 118
    }],
    111: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "each": 5
    }],
    112: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "each": 5,
        "analytics.js-integration": 118,
        "use-https": 120
    }],
    113: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "facade": 162,
        "convert-dates": 195,
        "extend": 224,
        "analytics.js-integration": 118,
        "to-iso-string": 189
    }],
    114: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "is": 122,
        "defaults": 237
    }],
    237: [function(require, module, exports) {
        'use strict';

        /**
         * Merge default values.
         *
         * @param {Object} dest destination object
         * @param {Object} src source object
         * @param {Boolean} recursive merge into destination recursively (default: false)
         * @return {Object} dest object
         */
        var defaults = function(dest, src, recursive) {
            for (var prop in src) {
                if (!src.hasOwnProperty(prop)) {
                    continue;
                }

                if (recursive && dest[prop] instanceof Object && src[prop] instanceof Object) {
                    dest[prop] = defaults(dest[prop], src[prop], true);
                } else if (!(prop in dest)) {
                    dest[prop] = src[prop];
                }
            }

            return dest;
        };

        /**
         * Expose `defaults`.
         */
        module.exports = defaults;

    }, {}],
    115: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "use-https": 120
    }],
    116: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "analytics.js-integration": 118,
        "each": 5
    }],
    117: [function(require, module, exports) {


        var integration = require('analytics.js-integration');
        module.exports = function() {};
        module.exports.Integration = integration('empty');

    }, {
        "fmt": 141,
        "analytics.js-integration": 118,
        "when": 232,
        "reduce": 229
    }],
    4: [function(require, module, exports) {

        /**
         * Analytics.js
         *
         * (C) 2013 Segment.io Inc.
         */

        var Analytics = require('./analytics');

        /**
         * Expose the `analytics` singleton.
         */

        var analytics = module.exports = exports = new Analytics();

        /**
         * Expose require
         */

        analytics.require = require;

        /**
         * Expose `VERSION`.
         */

        exports.VERSION = require('../bower.json').version;

    }, {
        "./analytics": 238,
        "../bower.json": 239
    }],
    238: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var _analytics = window.analytics;
        var Emitter = require('emitter');
        var Facade = require('facade');
        var after = require('after');
        var bind = require('bind');
        var callback = require('callback');
        var clone = require('clone');
        var cookie = require('./cookie');
        var debug = require('debug');
        var defaults = require('defaults');
        var each = require('each');
        var group = require('./group');
        var is = require('is');
        var isMeta = require('is-meta');
        var keys = require('object').keys;
        var memory = require('./memory');
        var normalize = require('./normalize');
        var on = require('event').bind;
        var pageDefaults = require('./pageDefaults');
        var pick = require('pick');
        var prevent = require('prevent');
        var querystring = require('querystring');
        var size = require('object').length;
        var store = require('./store');
        var user = require('./user');
        var Alias = Facade.Alias;
        var Group = Facade.Group;
        var Identify = Facade.Identify;
        var Page = Facade.Page;
        var Track = Facade.Track;

        /**
         * Expose `Analytics`.
         */

        exports = module.exports = Analytics;

        /**
         * Expose storage.
         */

        exports.cookie = cookie;
        exports.store = store;
        exports.memory = memory;

        /**
         * Initialize a new `Analytics` instance.
         */

        function Analytics() {
            this._options({});
            this.Integrations = {};
            this._integrations = {};
            this._readied = false;
            this._timeout = 300;
            // XXX: BACKWARDS COMPATIBILITY
            this._user = user;
            this.log = debug('analytics.js');
            bind.all(this);

            var self = this;
            this.on('initialize', function(settings, options) {
                if (options.initialPageview) self.page();
                self._parseQuery();
            });
        }

        /**
         * Event Emitter.
         */

        Emitter(Analytics.prototype);

        /**
         * Use a `plugin`.
         *
         * @param {Function} plugin
         * @return {Analytics}
         */

        Analytics.prototype.use = function(plugin) {
            plugin(this);
            return this;
        };

        /**
         * Define a new `Integration`.
         *
         * @param {Function} Integration
         * @return {Analytics}
         */

        Analytics.prototype.addIntegration = function(Integration) {
            var name = Integration.prototype.name;
            if (!name) throw new TypeError('attempted to add an invalid integration');
            this.Integrations[name] = Integration;
            return this;
        };

        /**
         * Initialize with the given integration `settings` and `options`.
         *
         * Aliased to `init` for convenience.
         *
         * @param {Object} [settings={}]
         * @param {Object} [options={}]
         * @return {Analytics}
         */

        Analytics.prototype.init = Analytics.prototype.initialize = function(settings, options) {
            settings = settings || {};
            options = options || {};

            this._options(options);
            this._readied = false;

            // clean unknown integrations from settings
            var self = this;
            each(settings, function(name) {
                var Integration = self.Integrations[name];
                if (!Integration) delete settings[name];
            });

            // add integrations
            each(settings, function(name, opts) {
                var Integration = self.Integrations[name];
                var integration = new Integration(clone(opts));
                self.log('initialize %o - %o', name, opts);
                self.add(integration);
            });

            var integrations = this._integrations;

            // load user now that options are set
            user.load();
            group.load();

            // make ready callback
            var ready = after(size(integrations), function() {
                self._readied = true;
                self.emit('ready');
            });

            // initialize integrations, passing ready
            each(integrations, function(name, integration) {
                if (options.initialPageview && integration.options.initialPageview === false) {
                    integration.page = after(2, integration.page);
                }

                integration.analytics = self;
                integration.once('ready', ready);
                integration.initialize();
            });

            // backwards compat with angular plugin.
            // TODO: remove
            this.initialized = true;

            this.emit('initialize', settings, options);
            return this;
        };

        /**
         * Set the user's `id`.
         *
         * @param {Mixed} id
         */

        Analytics.prototype.setAnonymousId = function(id) {
            this.user().anonymousId(id);
            return this;
        };

        /**
         * Add an integration.
         *
         * @param {Integration} integration
         */

        Analytics.prototype.add = function(integration) {
            this._integrations[integration.name] = integration;
            return this;
        };

        /**
         * Identify a user by optional `id` and `traits`.
         *
         * @param {string} [id=user.id()] User ID.
         * @param {Object} [traits=null] User traits.
         * @param {Object} [options=null]
         * @param {Function} [fn]
         * @return {Analytics}
         */

        Analytics.prototype.identify = function(id, traits, options, fn) {
            // Argument reshuffling.
            /* eslint-disable no-unused-expressions, no-sequences */
            if (is.fn(options)) fn = options, options = null;
            if (is.fn(traits)) fn = traits, options = null, traits = null;
            if (is.object(id)) options = traits, traits = id, id = user.id();
            /* eslint-enable no-unused-expressions, no-sequences */

            // clone traits before we manipulate so we don't do anything uncouth, and take
            // from `user` so that we carryover anonymous traits
            user.identify(id, traits);

            var msg = this.normalize({
                options: options,
                traits: user.traits(),
                userId: user.id()
            });

            this._invoke('identify', new Identify(msg));

            // emit
            this.emit('identify', id, traits, options);
            this._callback(fn);
            return this;
        };

        /**
         * Return the current user.
         *
         * @return {Object}
         */

        Analytics.prototype.user = function() {
            return user;
        };

        /**
         * Identify a group by optional `id` and `traits`. Or, if no arguments are
         * supplied, return the current group.
         *
         * @param {string} [id=group.id()] Group ID.
         * @param {Object} [traits=null] Group traits.
         * @param {Object} [options=null]
         * @param {Function} [fn]
         * @return {Analytics|Object}
         */

        Analytics.prototype.group = function(id, traits, options, fn) {
            /* eslint-disable no-unused-expressions, no-sequences */
            if (!arguments.length) return group;
            if (is.fn(options)) fn = options, options = null;
            if (is.fn(traits)) fn = traits, options = null, traits = null;
            if (is.object(id)) options = traits, traits = id, id = group.id();
            /* eslint-enable no-unused-expressions, no-sequences */


            // grab from group again to make sure we're taking from the source
            group.identify(id, traits);

            var msg = this.normalize({
                options: options,
                traits: group.traits(),
                groupId: group.id()
            });

            this._invoke('group', new Group(msg));

            this.emit('group', id, traits, options);
            this._callback(fn);
            return this;
        };

        /**
         * Track an `event` that a user has triggered with optional `properties`.
         *
         * @param {string} event
         * @param {Object} [properties=null]
         * @param {Object} [options=null]
         * @param {Function} [fn]
         * @return {Analytics}
         */

        Analytics.prototype.track = function(event, properties, options, fn) {
            // Argument reshuffling.
            /* eslint-disable no-unused-expressions, no-sequences */
            if (is.fn(options)) fn = options, options = null;
            if (is.fn(properties)) fn = properties, options = null, properties = null;
            /* eslint-enable no-unused-expressions, no-sequences */

            // figure out if the event is archived.
            var plan = this.options.plan || {};
            var events = plan.track || {};

            // normalize
            var msg = this.normalize({
                properties: properties,
                options: options,
                event: event
            });

            // plan.
            plan = events[event];
            if (plan) {
                this.log('plan %o - %o', event, plan);
                if (plan.enabled === false) return this._callback(fn);
                defaults(msg.integrations, plan.integrations || {});
            }

            this._invoke('track', new Track(msg));

            this.emit('track', event, properties, options);
            this._callback(fn);
            return this;
        };

        /**
         * Helper method to track an outbound link that would normally navigate away
         * from the page before the analytics calls were sent.
         *
         * BACKWARDS COMPATIBILITY: aliased to `trackClick`.
         *
         * @param {Element|Array} links
         * @param {string|Function} event
         * @param {Object|Function} properties (optional)
         * @return {Analytics}
         */

        Analytics.prototype.trackClick = Analytics.prototype.trackLink = function(links, event, properties) {
            if (!links) return this;
            // always arrays, handles jquery
            if (is.element(links)) links = [links];

            var self = this;
            each(links, function(el) {
                if (!is.element(el)) throw new TypeError('Must pass HTMLElement to `analytics.trackLink`.');
                on(el, 'click', function(e) {
                    e = e ? e : window.event;
                    var ev = is.fn(event) ? event(el) : event;
                    var props = is.fn(properties) ? properties(el, e) : properties;
                    var href = el.getAttribute('href') || el.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || el.getAttribute('xlink:href');

                    self.track(ev, props);

                    if (href && el.target !== '_blank' && !isMeta(e)) {
                        prevent(e);
                        self._callback(function() {
                            window.location.href = href;
                        });
                    }
                });
            });

            return this;
        };

        /**
         * Helper method to track an outbound form that would normally navigate away
         * from the page before the analytics calls were sent.
         *
         * BACKWARDS COMPATIBILITY: aliased to `trackSubmit`.
         *
         * @param {Element|Array} forms
         * @param {string|Function} event
         * @param {Object|Function} properties (optional)
         * @return {Analytics}
         */

        Analytics.prototype.trackSubmit = Analytics.prototype.trackForm = function(forms, event, properties) {
            if (!forms) return this;
            // always arrays, handles jquery
            if (is.element(forms)) forms = [forms];

            var self = this;
            each(forms, function(el) {
                if (!is.element(el)) throw new TypeError('Must pass HTMLElement to `analytics.trackForm`.');

                function handler(e) {
                    prevent(e);

                    var ev = is.fn(event) ? event(el) : event;
                    var props = is.fn(properties) ? properties(el) : properties;
                    self.track(ev, props);

                    self._callback(function() {
                        el.submit();
                    });
                }

                // Support the events happening through jQuery or Zepto instead of through
                // the normal DOM API, because `el.submit` doesn't bubble up events...
                var $ = window.jQuery || window.Zepto;
                if ($) {
                    $(el).submit(handler);
                } else {
                    on(el, 'submit', handler);
                }
            });

            return this;
        };

        /**
         * Trigger a pageview, labeling the current page with an optional `category`,
         * `name` and `properties`.
         *
         * @param {string} [category]
         * @param {string} [name]
         * @param {Object|string} [properties] (or path)
         * @param {Object} [options]
         * @param {Function} [fn]
         * @return {Analytics}
         */

        Analytics.prototype.page = function(category, name, properties, options, fn) {
            // Argument reshuffling.
            /* eslint-disable no-unused-expressions, no-sequences */
            if (is.fn(options)) fn = options, options = null;
            if (is.fn(properties)) fn = properties, options = properties = null;
            if (is.fn(name)) fn = name, options = properties = name = null;
            if (is.object(category)) options = name, properties = category, name = category = null;
            if (is.object(name)) options = properties, properties = name, name = null;
            if (is.string(category) && !is.string(name)) name = category, category = null;
            /* eslint-enable no-unused-expressions, no-sequences */

            properties = clone(properties) || {};
            if (name) properties.name = name;
            if (category) properties.category = category;

            // Ensure properties has baseline spec properties.
            // TODO: Eventually move these entirely to `options.context.page`
            var defs = pageDefaults();
            defaults(properties, defs);

            // Mirror user overrides to `options.context.page` (but exclude custom properties)
            // (Any page defaults get applied in `this.normalize` for consistency.)
            // Weird, yeah--moving special props to `context.page` will fix this in the long term.
            var overrides = pick(keys(defs), properties);
            if (!is.empty(overrides)) {
                options = options || {};
                options.context = options.context || {};
                options.context.page = overrides;
            }

            var msg = this.normalize({
                properties: properties,
                category: category,
                options: options,
                name: name
            });

            this._invoke('page', new Page(msg));

            this.emit('page', category, name, properties, options);
            this._callback(fn);
            return this;
        };

        /**
         * FIXME: BACKWARDS COMPATIBILITY: convert an old `pageview` to a `page` call.
         *
         * @param {string} [url]
         * @return {Analytics}
         * @api private
         */

        Analytics.prototype.pageview = function(url) {
            var properties = {};
            if (url) properties.path = url;
            this.page(properties);
            return this;
        };

        /**
         * Merge two previously unassociated user identities.
         *
         * @param {string} to
         * @param {string} from (optional)
         * @param {Object} options (optional)
         * @param {Function} fn (optional)
         * @return {Analytics}
         */

        Analytics.prototype.alias = function(to, from, options, fn) {
            // Argument reshuffling.
            /* eslint-disable no-unused-expressions, no-sequences */
            if (is.fn(options)) fn = options, options = null;
            if (is.fn(from)) fn = from, options = null, from = null;
            if (is.object(from)) options = from, from = null;
            /* eslint-enable no-unused-expressions, no-sequences */

            var msg = this.normalize({
                options: options,
                previousId: from,
                userId: to
            });

            this._invoke('alias', new Alias(msg));

            this.emit('alias', to, from, options);
            this._callback(fn);
            return this;
        };

        /**
         * Register a `fn` to be fired when all the analytics services are ready.
         *
         * @param {Function} fn
         * @return {Analytics}
         */

        Analytics.prototype.ready = function(fn) {
            if (is.fn(fn)) {
                if (this._readied) {
                    callback.async(fn);
                } else {
                    this.once('ready', fn);
                }
            }
            return this;
        };

        /**
         * Set the `timeout` (in milliseconds) used for callbacks.
         *
         * @param {Number} timeout
         */

        Analytics.prototype.timeout = function(timeout) {
            this._timeout = timeout;
        };

        /**
         * Enable or disable debug.
         *
         * @param {string|boolean} str
         */

        Analytics.prototype.debug = function(str) {
            if (!arguments.length || str) {
                debug.enable('analytics:' + (str || '*'));
            } else {
                debug.disable();
            }
        };

        /**
         * Apply options.
         *
         * @param {Object} options
         * @return {Analytics}
         * @api private
         */

        Analytics.prototype._options = function(options) {
            options = options || {};
            this.options = options;
            cookie.options(options.cookie);
            store.options(options.localStorage);
            user.options(options.user);
            group.options(options.group);
            return this;
        };

        /**
         * Callback a `fn` after our defined timeout period.
         *
         * @param {Function} fn
         * @return {Analytics}
         * @api private
         */

        Analytics.prototype._callback = function(fn) {
            callback.async(fn, this._timeout);
            return this;
        };

        /**
         * Call `method` with `facade` on all enabled integrations.
         *
         * @param {string} method
         * @param {Facade} facade
         * @return {Analytics}
         * @api private
         */

        Analytics.prototype._invoke = function(method, facade) {
            this.emit('invoke', facade);

            each(this._integrations, function(name, integration) {
                if (!facade.enabled(name)) return;
                integration.invoke.call(integration, method, facade);
            });

            return this;
        };

        /**
         * Push `args`.
         *
         * @param {Array} args
         * @api private
         */

        Analytics.prototype.push = function(args) {
            var method = args.shift();
            if (!this[method]) return;
            this[method].apply(this, args);
        };

        /**
         * Reset group and user traits and id's.
         *
         * @api public
         */

        Analytics.prototype.reset = function() {
            this.user().logout();
            this.group().logout();
        };

        /**
         * Parse the query string for callable methods.
         *
         * @return {Analytics}
         * @api private
         */

        Analytics.prototype._parseQuery = function() {
            // Identify and track any `ajs_uid` and `ajs_event` parameters in the URL.
            var q = querystring.parse(window.location.search);
            if (q.ajs_uid) this.identify(q.ajs_uid);
            if (q.ajs_event) this.track(q.ajs_event);
            if (q.ajs_aid) user.anonymousId(q.ajs_aid);
            return this;
        };

        /**
         * Normalize the given `msg`.
         *
         * @param {Object} msg
         * @return {Object}
         */

        Analytics.prototype.normalize = function(msg) {
            msg = normalize(msg, keys(this._integrations));
            if (msg.anonymousId) user.anonymousId(msg.anonymousId);
            msg.anonymousId = user.anonymousId();

            // Ensure all outgoing requests include page data in their contexts.
            msg.context.page = defaults(msg.context.page || {}, pageDefaults());

            return msg;
        };

        /**
         * No conflict support.
         */

        Analytics.prototype.noConflict = function() {
            window.analytics = _analytics;
            return this;
        };


    }, {
        "emitter": 137,
        "facade": 162,
        "after": 138,
        "bind": 240,
        "callback": 193,
        "clone": 125,
        "./cookie": 241,
        "debug": 214,
        "defaults": 127,
        "each": 121,
        "./group": 242,
        "is": 122,
        "is-meta": 243,
        "object": 200,
        "./memory": 244,
        "./normalize": 245,
        "event": 246,
        "./pageDefaults": 247,
        "pick": 248,
        "prevent": 249,
        "querystring": 228,
        "./store": 250,
        "./user": 251
    }],
    240: [function(require, module, exports) {

        try {
            var bind = require('bind');
        } catch (e) {
            var bind = require('bind-component');
        }

        var bindAll = require('bind-all');


        /**
         * Expose `bind`.
         */

        module.exports = exports = bind;


        /**
         * Expose `bindAll`.
         */

        exports.all = bindAll;


        /**
         * Expose `bindMethods`.
         */

        exports.methods = bindMethods;


        /**
         * Bind `methods` on `obj` to always be called with the `obj` as context.
         *
         * @param {Object} obj
         * @param {String} methods...
         */

        function bindMethods(obj, methods) {
            methods = [].slice.call(arguments, 1);
            for (var i = 0, method; method = methods[i]; i++) {
                obj[method] = bind(obj, obj[method]);
            }
            return obj;
        }
    }, {
        "bind": 132,
        "bind-all": 133
    }],
    241: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var bind = require('bind');
        var clone = require('clone');
        var cookie = require('cookie');
        var debug = require('debug')('analytics.js:cookie');
        var defaults = require('defaults');
        var json = require('json');
        var topDomain = require('top-domain');


        /**
         * Initialize a new `Cookie` with `options`.
         *
         * @param {Object} options
         */

        function Cookie(options) {
            this.options(options);
        }


        /**
         * Get or set the cookie options.
         *
         * @param {Object} options
         *   @field {Number} maxage (1 year)
         *   @field {String} domain
         *   @field {String} path
         *   @field {Boolean} secure
         */

        Cookie.prototype.options = function(options) {
            if (arguments.length === 0) return this._options;

            options = options || {};

            //var domain = '.' + topDomain(window.location.href);
            //if (domain === '.') domain = null;
            var domain = 'www' + topDomain(window.location.href); //统一www域名 登出之后后端清cookie ajs_user_id
            if (domain === 'www') domain = null;
            this._options = defaults(options, {
                // default to a year
                maxage: 31536000000,
                path: '/',
                domain: domain
            });

            // http://curl.haxx.se/rfc/cookie_spec.html
            // https://publicsuffix.org/list/effective_tld_names.dat
            //
            // try setting a dummy cookie with the options
            // if the cookie isn't set, it probably means
            // that the domain is on the public suffix list
            // like myapp.herokuapp.com or localhost / ip.
            this.set('ajs:test', true);
            if (!this.get('ajs:test')) {
                debug('fallback to domain=null');
                this._options.domain = null;
            }
            this.remove('ajs:test');
        };


        /**
         * Set a `key` and `value` in our cookie.
         *
         * @param {String} key
         * @param {Object} value
         * @return {Boolean} saved
         */

        Cookie.prototype.set = function(key, value) {
            try {
                value = json.stringify(value);
                cookie(key, value, clone(this._options));
                return true;
            } catch (e) {
                return false;
            }
        };


        /**
         * Get a value from our cookie by `key`.
         *
         * @param {String} key
         * @return {Object} value
         */

        Cookie.prototype.get = function(key) {
            try {
                var value = cookie(key);
                value = value ? json.parse(value) : null;
                return value;
            } catch (e) {
                return null;
            }
        };


        /**
         * Remove a value from our cookie by `key`.
         *
         * @param {String} key
         * @return {Boolean} removed
         */

        Cookie.prototype.remove = function(key) {
            try {
                cookie(key, null, clone(this._options));
                return true;
            } catch (e) {
                return false;
            }
        };


        /**
         * Expose the cookie singleton.
         */

        module.exports = bind.all(new Cookie());


        /**
         * Expose the `Cookie` constructor.
         */

        module.exports.Cookie = Cookie;

    }, {
        "bind": 240,
        "clone": 125,
        "cookie": 207,
        "debug": 214,
        "defaults": 127,
        "json": 197,
        "top-domain": 252
    }],
    252: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var parse = require('url').parse;
        var cookie = require('cookie');

        /**
         * Expose `domain`
         */

        exports = module.exports = domain;

        /**
         * Expose `cookie` for testing.
         */

        exports.cookie = cookie;

        /**
         * Get the top domain.
         *
         * The function constructs the levels of domain
         * and attempts to set a global cookie on each one
         * when it succeeds it returns the top level domain.
         *
         * The method returns an empty string when the hostname
         * is an ip or `localhost`.
         *
         * Example levels:
         *
         *      domain.levels('http://www.google.co.uk');
         *      // => ["co.uk", "google.co.uk", "www.google.co.uk"]
         *
         * Example:
         *
         *      domain('http://localhost:3000/baz');
         *      // => ''
         *      domain('http://dev:3000/baz');
         *      // => ''
         *      domain('http://127.0.0.1:3000/baz');
         *      // => ''
         *      domain('http://segment.io/baz');
         *      // => 'segment.io'
         *
         * @param {String} url
         * @return {String}
         * @api public
         */

        function domain(url) {
            var cookie = exports.cookie;
            var levels = exports.levels(url);

            // Lookup the real top level one.
            for (var i = 0; i < levels.length; ++i) {
                var cname = '__tld__';
                var domain = levels[i];
                var opts = {
                    domain: '.' + domain
                };

                cookie(cname, 1, opts);
                if (cookie(cname)) {
                    cookie(cname, null, opts);
                    return domain
                }
            }

            return '';
        };

        /**
         * Levels returns all levels of the given url.
         *
         * @param {String} url
         * @return {Array}
         * @api public
         */

        domain.levels = function(url) {
            var host = parse(url).hostname;
            var parts = host.split('.');
            var last = parts[parts.length - 1];
            var levels = [];

            // Ip address.
            if (4 == parts.length && parseInt(last, 10) == last) {
                return levels;
            }

            // Localhost.
            if (1 >= parts.length) {
                return levels;
            }

            // Create levels.
            for (var i = parts.length - 2; 0 <= i; --i) {
                levels.push(parts.slice(i).join('.'));
            }

            return levels;
        };

    }, {
        "url": 160,
        "cookie": 253
    }],
    253: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var debug = require('debug')('cookie');

        /**
         * Set or get cookie `name` with `value` and `options` object.
         *
         * @param {String} name
         * @param {String} value
         * @param {Object} options
         * @return {Mixed}
         * @api public
         */

        module.exports = function(name, value, options) {
            switch (arguments.length) {
                case 3:
                case 2:
                    return set(name, value, options);
                case 1:
                    return get(name);
                default:
                    return all();
            }
        };

        /**
         * Set cookie `name` to `value`.
         *
         * @param {String} name
         * @param {String} value
         * @param {Object} options
         * @api private
         */

        function set(name, value, options) {
            options = options || {};
            var str = encode(name) + '=' + encode(value);

            if (null == value) options.maxage = -1;

            if (options.maxage) {
                options.expires = new Date(+new Date + options.maxage);
            }

            if (options.path) str += '; path=' + options.path;
            if (options.domain) str += '; domain=' + options.domain;
            if (options.expires) str += '; expires=' + options.expires.toUTCString();
            if (options.secure) str += '; secure';

            document.cookie = str;
        }

        /**
         * Return all cookies.
         *
         * @return {Object}
         * @api private
         */

        function all() {
            var str;
            try {
                str = document.cookie;
            } catch (err) {
                if (typeof console !== 'undefined' && typeof console.error === 'function') {
                    console.error(err.stack || err);
                }
                return {};
            }
            return parse(str);
        }

        /**
         * Get cookie `name`.
         *
         * @param {String} name
         * @return {String}
         * @api private
         */

        function get(name) {
            return all()[name];
        }

        /**
         * Parse cookie `str`.
         *
         * @param {String} str
         * @return {Object}
         * @api private
         */

        function parse(str) {
            var obj = {};
            var pairs = str.split(/ *; */);
            var pair;
            if ('' == pairs[0]) return obj;
            for (var i = 0; i < pairs.length; ++i) {
                pair = pairs[i].split('=');
                obj[decode(pair[0])] = decode(pair[1]);
            }
            return obj;
        }

        /**
         * Encode.
         */

        function encode(value) {
            try {
                return encodeURIComponent(value);
            } catch (e) {
                debug('error `encode(%o)` - %o', value, e)
            }
        }

        /**
         * Decode.
         */

        function decode(value) {
            try {
                return decodeURIComponent(value);
            } catch (e) {
                debug('error `decode(%o)` - %o', value, e)
            }
        }

    }, {
        "debug": 214
    }],
    242: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var Entity = require('./entity');
        var bind = require('bind');
        var debug = require('debug')('analytics:group');
        var inherit = require('inherit');

        /**
         * Group defaults
         */

        Group.defaults = {
            persist: true,
            cookie: {
                key: 'ajs_group_id'
            },
            localStorage: {
                key: 'ajs_group_properties'
            }
        };


        /**
         * Initialize a new `Group` with `options`.
         *
         * @param {Object} options
         */

        function Group(options) {
            this.defaults = Group.defaults;
            this.debug = debug;
            Entity.call(this, options);
        }


        /**
         * Inherit `Entity`
         */

        inherit(Group, Entity);


        /**
         * Expose the group singleton.
         */

        module.exports = bind.all(new Group());


        /**
         * Expose the `Group` constructor.
         */

        module.exports.Group = Group;

    }, {
        "./entity": 254,
        "bind": 240,
        "debug": 214,
        "inherit": 255
    }],
    254: [function(require, module, exports) {

        var clone = require('clone');
        var cookie = require('./cookie');
        var debug = require('debug')('analytics:entity');
        var defaults = require('defaults');
        var extend = require('extend');
        var memory = require('./memory');
        var store = require('./store');
        var isodateTraverse = require('isodate-traverse');


        /**
         * Expose `Entity`
         */

        module.exports = Entity;


        /**
         * Initialize new `Entity` with `options`.
         *
         * @param {Object} options
         */

        function Entity(options) {
            this.options(options);
            this.initialize();
        }

        /**
         * Initialize picks the storage.
         *
         * Checks to see if cookies can be set
         * otherwise fallsback to localStorage.
         */

        Entity.prototype.initialize = function() {
            cookie.set('ajs:cookies', true);

            // cookies are enabled.
            if (cookie.get('ajs:cookies')) {
                cookie.remove('ajs:cookies');
                this._storage = cookie;
                return;
            }

            // localStorage is enabled.
            if (store.enabled) {
                this._storage = store;
                return;
            }

            // fallback to memory storage.
            debug('warning using memory store both cookies and localStorage are disabled');
            this._storage = memory;
        };

        /**
         * Get the storage.
         */

        Entity.prototype.storage = function() {
            return this._storage;
        };


        /**
         * Get or set storage `options`.
         *
         * @param {Object} options
         *   @property {Object} cookie
         *   @property {Object} localStorage
         *   @property {Boolean} persist (default: `true`)
         */

        Entity.prototype.options = function(options) {
            if (arguments.length === 0) return this._options;
            this._options = defaults(options || {}, this.defaults || {});
        };


        /**
         * Get or set the entity's `id`.
         *
         * @param {String} id
         */

        Entity.prototype.id = function(id) {
            switch (arguments.length) {
                case 0:
                    return this._getId();
                case 1:
                    return this._setId(id);
                default:
                    // No default case
            }
        };


        /**
         * Get the entity's id.
         *
         * @return {String}
         */

        Entity.prototype._getId = function() {
            var ret = this._options.persist ? this.storage().get(this._options.cookie.key) : this._id;
            return ret === undefined ? null : ret;
        };


        /**
         * Set the entity's `id`.
         *
         * @param {String} id
         */

        Entity.prototype._setId = function(id) {
            if (this._options.persist) {
                this.storage().set(this._options.cookie.key, id);
            } else {
                this._id = id;
            }
        };


        /**
         * Get or set the entity's `traits`.
         *
         * BACKWARDS COMPATIBILITY: aliased to `properties`
         *
         * @param {Object} traits
         */

        Entity.prototype.properties = Entity.prototype.traits = function(traits) {
            switch (arguments.length) {
                case 0:
                    return this._getTraits();
                case 1:
                    return this._setTraits(traits);
                default:
                    // No default case
            }
        };


        /**
         * Get the entity's traits. Always convert ISO date strings into real dates,
         * since they aren't parsed back from local storage.
         *
         * @return {Object}
         */

        Entity.prototype._getTraits = function() {
            var ret = this._options.persist ? store.get(this._options.localStorage.key) : this._traits;
            return ret ? isodateTraverse(clone(ret)) : {};
        };


        /**
         * Set the entity's `traits`.
         *
         * @param {Object} traits
         */

        Entity.prototype._setTraits = function(traits) {
            traits = traits || {};
            if (this._options.persist) {
                store.set(this._options.localStorage.key, traits);
            } else {
                this._traits = traits;
            }
        };


        /**
         * Identify the entity with an `id` and `traits`. If we it's the same entity,
         * extend the existing `traits` instead of overwriting.
         *
         * @param {String} id
         * @param {Object} traits
         */

        Entity.prototype.identify = function(id, traits) {
            traits = traits || {};
            var current = this.id();
            if (current === null || current === id) traits = extend(this.traits(), traits);
            if (id) this.id(id);
            this.debug('identify %o, %o', id, traits);
            this.traits(traits);
            this.save();
        };


        /**
         * Save the entity to local storage and the cookie.
         *
         * @return {Boolean}
         */

        Entity.prototype.save = function() {
            if (!this._options.persist) return false;
            cookie.set(this._options.cookie.key, this.id());
            store.set(this._options.localStorage.key, this.traits());
            return true;
        };


        /**
         * Log the entity out, reseting `id` and `traits` to defaults.
         */

        Entity.prototype.logout = function() {
            this.id(null);
            this.traits({});
            cookie.remove(this._options.cookie.key);
            store.remove(this._options.localStorage.key);
        };


        /**
         * Reset all entity state, logging out and returning options to defaults.
         */

        Entity.prototype.reset = function() {
            this.logout();
            this.options({});
        };


        /**
         * Load saved entity `id` or `traits` from storage.
         */

        Entity.prototype.load = function() {
            this.id(cookie.get(this._options.cookie.key));
            this.traits(store.get(this._options.localStorage.key));
        };


    }, {
        "clone": 125,
        "./cookie": 241,
        "debug": 214,
        "defaults": 127,
        "extend": 185,
        "./memory": 244,
        "./store": 250,
        "isodate-traverse": 171
    }],
    244: [function(require, module, exports) {
        /* eslint consistent-return:1 */

        /**
         * Module Dependencies.
         */

        var bind = require('bind');
        var clone = require('clone');

        /**
         * HOP.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Expose `Memory`
         */

        module.exports = bind.all(new Memory());

        /**
         * Initialize `Memory` store
         */

        function Memory() {
            this.store = {};
        }

        /**
         * Set a `key` and `value`.
         *
         * @param {String} key
         * @param {Mixed} value
         * @return {Boolean}
         */

        Memory.prototype.set = function(key, value) {
            this.store[key] = clone(value);
            return true;
        };

        /**
         * Get a `key`.
         *
         * @param {String} key
         */

        Memory.prototype.get = function(key) {
            if (!has.call(this.store, key)) return;
            return clone(this.store[key]);
        };

        /**
         * Remove a `key`.
         *
         * @param {String} key
         * @return {Boolean}
         */

        Memory.prototype.remove = function(key) {
            delete this.store[key];
            return true;
        };

    }, {
        "bind": 240,
        "clone": 125
    }],
    250: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var bind = require('bind');
        var defaults = require('defaults');
        var store = require('store.js');

        /**
         * Initialize a new `Store` with `options`.
         *
         * @param {Object} options
         */

        function Store(options) {
            this.options(options);
        }

        /**
         * Set the `options` for the store.
         *
         * @param {Object} options
         *   @field {Boolean} enabled (true)
         */

        Store.prototype.options = function(options) {
            if (arguments.length === 0) return this._options;

            options = options || {};
            defaults(options, {
                enabled: true
            });

            this.enabled = options.enabled && store.enabled;
            this._options = options;
        };


        /**
         * Set a `key` and `value` in local storage.
         *
         * @param {string} key
         * @param {Object} value
         */

        Store.prototype.set = function(key, value) {
            if (!this.enabled) return false;
            return store.set(key, value);
        };


        /**
         * Get a value from local storage by `key`.
         *
         * @param {string} key
         * @return {Object}
         */

        Store.prototype.get = function(key) {
            if (!this.enabled) return null;
            return store.get(key);
        };


        /**
         * Remove a value from local storage by `key`.
         *
         * @param {string} key
         */

        Store.prototype.remove = function(key) {
            if (!this.enabled) return false;
            return store.remove(key);
        };


        /**
         * Expose the store singleton.
         */

        module.exports = bind.all(new Store());


        /**
         * Expose the `Store` constructor.
         */

        module.exports.Store = Store;

    }, {
        "bind": 240,
        "defaults": 127,
        "store.js": 256
    }],
    256: [function(require, module, exports) {
        var json = require('json'),
            store = {},
            win = window,
            doc = win.document,
            localStorageName = 'localStorage',
            namespace = '__storejs__',
            storage;

        store.disabled = false
        store.set = function(key, value) {}
        store.get = function(key) {}
        store.remove = function(key) {}
        store.clear = function() {}
        store.transact = function(key, defaultVal, transactionFn) {
            var val = store.get(key)
            if (transactionFn == null) {
                transactionFn = defaultVal
                defaultVal = null
            }
            if (typeof val == 'undefined') {
                val = defaultVal || {}
            }
            transactionFn(val)
            store.set(key, val)
        }
        store.getAll = function() {}

        store.serialize = function(value) {
            return json.stringify(value)
        }
        store.deserialize = function(value) {
            if (typeof value != 'string') {
                return undefined
            }
            try {
                return json.parse(value)
            } catch (e) {
                return value || undefined
            }
        }

        // Functions to encapsulate questionable FireFox 3.6.13 behavior
        // when about.config::dom.storage.enabled === false
        // See https://github.com/marcuswestin/store.js/issues#issue/13
        function isLocalStorageNameSupported() {
            try {
                return (localStorageName in win && win[localStorageName])
            } catch (err) {
                return false
            }
        }

        if (isLocalStorageNameSupported()) {
            storage = win[localStorageName]
            store.set = function(key, val) {
                if (val === undefined) {
                    return store.remove(key)
                }
                storage.setItem(key, store.serialize(val))
                return val
            }
            store.get = function(key) {
                return store.deserialize(storage.getItem(key))
            }
            store.remove = function(key) {
                storage.removeItem(key)
            }
            store.clear = function() {
                storage.clear()
            }
            store.getAll = function() {
                var ret = {}
                for (var i = 0; i < storage.length; ++i) {
                    var key = storage.key(i)
                    ret[key] = store.get(key)
                }
                return ret
            }
        } else if (doc.documentElement.addBehavior) {
            var storageOwner,
                storageContainer
                // Since #userData storage applies only to specific paths, we need to
                // somehow link our data to a specific path.  We choose /favicon.ico
                // as a pretty safe option, since all browsers already make a request to
                // this URL anyway and being a 404 will not hurt us here.  We wrap an
                // iframe pointing to the favicon in an ActiveXObject(htmlfile) object
                // (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
                // since the iframe access rules appear to allow direct access and
                // manipulation of the document element, even for a 404 page.  This
                // document can be used instead of the current document (which would
                // have been limited to the current path) to perform #userData storage.
            try {
                storageContainer = new ActiveXObject('htmlfile')
                storageContainer.open()
                storageContainer.write('<s' + 'cript>document.w=window</s' + 'cript><iframe src="/favicon.ico"></iframe>')
                storageContainer.close()
                storageOwner = storageContainer.w.frames[0].document
                storage = storageOwner.createElement('div')
            } catch (e) {
                // somehow ActiveXObject instantiation failed (perhaps some special
                // security settings or otherwse), fall back to per-path storage
                storage = doc.createElement('div')
                storageOwner = doc.body
            }

            function withIEStorage(storeFunction) {
                return function() {
                    var args = Array.prototype.slice.call(arguments, 0)
                    args.unshift(storage)
                        // See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
                        // and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
                    storageOwner.appendChild(storage)
                    storage.addBehavior('#default#userData')
                    storage.load(localStorageName)
                    var result = storeFunction.apply(store, args)
                    storageOwner.removeChild(storage)
                    return result
                }
            }

            // In IE7, keys may not contain special chars. See all of https://github.com/marcuswestin/store.js/issues/40
            var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")

            function ieKeyFix(key) {
                return key.replace(forbiddenCharsRegex, '___')
            }

            store.set = withIEStorage(function(storage, key, val) {
                key = ieKeyFix(key)
                if (val === undefined) {
                    return store.remove(key)
                }
                storage.setAttribute(key, store.serialize(val))
                storage.save(localStorageName)
                return val
            })
            store.get = withIEStorage(function(storage, key) {
                key = ieKeyFix(key)
                return store.deserialize(storage.getAttribute(key))
            })
            store.remove = withIEStorage(function(storage, key) {
                key = ieKeyFix(key)
                storage.removeAttribute(key)
                storage.save(localStorageName)
            })
            store.clear = withIEStorage(function(storage) {
                var attributes = storage.XMLDocument.documentElement.attributes
                storage.load(localStorageName)
                for (var i = 0, attr; attr = attributes[i]; i++) {
                    storage.removeAttribute(attr.name)
                }
                storage.save(localStorageName)
            })
            store.getAll = withIEStorage(function(storage) {
                var attributes = storage.XMLDocument.documentElement.attributes
                var ret = {}
                for (var i = 0, attr; attr = attributes[i]; ++i) {
                    var key = ieKeyFix(attr.name)
                    ret[attr.name] = store.deserialize(storage.getAttribute(key))
                }
                return ret
            })
        }

        try {
            store.set(namespace, namespace)
            if (store.get(namespace) != namespace) {
                store.disabled = true
            }
            store.remove(namespace)
        } catch (e) {
            store.disabled = true
        }
        store.enabled = !store.disabled

        module.exports = store;
    }, {
        "json": 197
    }],
    255: [function(require, module, exports) {

        module.exports = function(a, b) {
            var fn = function() {};
            fn.prototype = b.prototype;
            a.prototype = new fn;
            a.prototype.constructor = a;
        };
    }, {}],
    243: [function(require, module, exports) {
        module.exports = function isMeta(e) {
            if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return true;

            // Logic that handles checks for the middle mouse button, based
            // on [jQuery](https://github.com/jquery/jquery/blob/master/src/event.js#L466).
            var which = e.which,
                button = e.button;
            if (!which && button !== undefined) {
                return (!button & 1) && (!button & 2) && (button & 4);
            } else if (which === 2) {
                return true;
            }

            return false;
        };
    }, {}],
    245: [function(require, module, exports) {

        /**
         * Module Dependencies.
         */

        var debug = require('debug')('analytics.js:normalize');
        var defaults = require('defaults');
        var each = require('each');
        var includes = require('includes');
        var is = require('is');
        var map = require('component/map');

        /**
         * HOP.
         */

        var has = Object.prototype.hasOwnProperty;

        /**
         * Expose `normalize`
         */

        module.exports = normalize;

        /**
         * Toplevel properties.
         */

        var toplevel = [
            'integrations',
            'anonymousId',
            'timestamp',
            'context'
        ];

        /**
         * Normalize `msg` based on integrations `list`.
         *
         * @param {Object} msg
         * @param {Array} list
         * @return {Function}
         */

        function normalize(msg, list) {
            var lower = map(list, function(s) {
                return s.toLowerCase();
            });
            var opts = msg.options || {};
            var integrations = opts.integrations || {};
            var providers = opts.providers || {};
            var context = opts.context || {};
            var ret = {};
            debug('<-', msg);

            // integrations.
            each(opts, function(key, value) {
                if (!integration(key)) return;
                if (!has.call(integrations, key)) integrations[key] = value;
                delete opts[key];
            });

            // providers.
            delete opts.providers;
            each(providers, function(key, value) {
                if (!integration(key)) return;
                if (is.object(integrations[key])) return;
                if (has.call(integrations, key) && typeof providers[key] === 'boolean') return;
                integrations[key] = value;
            });

            // move all toplevel options to msg
            // and the rest to context.
            each(opts, function(key) {
                if (includes(key, toplevel)) {
                    ret[key] = opts[key];
                } else {
                    context[key] = opts[key];
                }
            });

            // cleanup
            delete msg.options;
            ret.integrations = integrations;
            ret.context = context;
            ret = defaults(ret, msg);
            debug('->', ret);
            return ret;

            function integration(name) {
                return !!(includes(name, list) || name.toLowerCase() === 'all' || includes(name.toLowerCase(), lower));
            }
        }

    }, {
        "debug": 214,
        "defaults": 127,
        "each": 121,
        "includes": 155,
        "is": 122,
        "component/map": 225
    }],
    246: [function(require, module, exports) {

        /**
         * Bind `el` event `type` to `fn`.
         *
         * @param {Element} el
         * @param {String} type
         * @param {Function} fn
         * @param {Boolean} capture
         * @return {Function}
         * @api public
         */

        exports.bind = function(el, type, fn, capture) {
            if (el.addEventListener) {
                el.addEventListener(type, fn, capture || false);
            } else {
                el.attachEvent('on' + type, fn);
            }
            return fn;
        };

        /**
         * Unbind `el` event `type`'s callback `fn`.
         *
         * @param {Element} el
         * @param {String} type
         * @param {Function} fn
         * @param {Boolean} capture
         * @return {Function}
         * @api public
         */

        exports.unbind = function(el, type, fn, capture) {
            if (el.removeEventListener) {
                el.removeEventListener(type, fn, capture || false);
            } else {
                el.detachEvent('on' + type, fn);
            }
            return fn;
        };

    }, {}],
    247: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var canonical = require('canonical');
        var includes = require('includes');
        var url = require('url');


        /**
         * 页面id打点
         */
        var getRandom = function() {
          return parseInt(Math.random() * 100000);
        };
        var getCookie = function(key) {
          if (document.cookie == '') {
            return ''
          }
          var aCookie = document.cookie.split('; ');
          for (var i = 0, l = aCookie.length; i < l; ++i) {
            var arr = aCookie[i].split('=');
            if (arr[0] == key) {
              return arr[1];
            }
          }
          return '';
        };
        var setCookie = function(key, val, option) {
          var str = key.toString() + '=' + val.toString() + ';';
          if (option) {
            for (var i in option) {
              var optionStr = i.toString() + '=' + option[i].toString() + ';';
              str += optionStr;
            }
          }
          document.cookie = str;
        };

        var cookieOption = {
          domain: 'xuetangx.com',
          path: '/'
        };

        var setThisPageCookie = function(getSid) {
          setCookie('frontendUserTrack', getSid, cookieOption);
          setCookie('frontendUserReferrer', location.href, cookieOption);
        };

        var getSid = getCookie('frontendUserTrack');
        if (getSid === '') {
          getSid = getRandom();
        } else {
          getSid = getSid * 1 + 1;
        }
        window._getSid = getSid;

        var frontendUserReferrer = getCookie('frontendUserReferrer');

        setThisPageCookie(getSid);

        document.body.addEventListener('click', function() {
          setCookie('frontendUserTrackPrev', getSid, cookieOption);
          setCookie('frontendUserReferrer', location.href, cookieOption);
        });

        var requestData = {
          frontendUserTrack: getSid,
          frontendUserTrackPrev: parseInt(getCookie('frontendUserTrackPrev')) || getSid,
          frontendUserReferer: frontendUserReferrer,
          rnd: parseInt(Math.random() * 100000)
        };

        var openTime = Date.now();
        window.addEventListener('beforeunload', function(event) {
          var durationTime = Date.now() - openTime;
          analytics.page({
            _sync: true,
            frontendUserTrack: getSid,
            durationTime: durationTime,
            timezone: "GMT" + (new Date()).getTimezoneOffset() / 60, // 新加时区
            pageBeforeUnload: true
          });
        }, false);

        /**
         * Return a default `options.context.page` object.
         *
         * https://segment.com/docs/spec/page/#properties
         *
         * @return {Object}
         */
        var d = new Date()
            //document.write("The local time zone is: GMT "
            //+ d.getTimezoneOffset()/60)
        function pageDefaults() {
            var sequence = getCookie('sequence');
            var json = {
                path: canonicalPath(),
                refer: document.referrer, // 由referrer修改key名称refer
                search: location.search,
                title: document.title,
                url: canonicalUrl(location.search),
                resolution: [window.screen.width, window.screen.height], // 新加网页可视宽高属性
                timezone: "GMT" + d.getTimezoneOffset() / 60, // 新加时区
                seq: sequence * 1

            };

            for (key in requestData) {
              json[key] = requestData[key];
            }

            return json;
        }

        /**
         * Return the canonical path for the page.
         *
         * @return {string}
         */

        function canonicalPath() {
            var canon = canonical();
            if (!canon) return window.location.pathname;
            var parsed = url.parse(canon);
            return parsed.pathname;
        }

        /**
         * Return the canonical URL for the page concat the given `search`
         * and strip the hash.
         *
         * @param {string} search
         * @return {string}
         */

        function canonicalUrl(search) {
            var canon = canonical();
            if (canon) return includes('?', canon) ? canon : canon + search;
            var url = window.location.href;
            var i = url.indexOf('#');
            return i === -1 ? url : url.slice(0, i);
        }

        /**
         * Exports.
         */

        module.exports = pageDefaults;

    }, {
        "canonical": 257,
        "includes": 155,
        "url": 231
    }],
    257: [function(require, module, exports) {
        module.exports = function canonical() {
            var tags = document.getElementsByTagName('link');
            for (var i = 0, tag; tag = tags[i]; i++) {
                if ('canonical' == tag.getAttribute('rel')) return tag.getAttribute('href');
            }
        };
    }, {}],
    248: [function(require, module, exports) {
        'use strict';

        var objToString = Object.prototype.toString;

        // TODO: Move to lib
        var existy = function(val) {
            return val != null;
        };

        // TODO: Move to lib
        var isArray = function(val) {
            return objToString.call(val) === '[object Array]';
        };

        // TODO: Move to lib
        var isString = function(val) {
            return typeof val === 'string' || objToString.call(val) === '[object String]';
        };

        // TODO: Move to lib
        var isObject = function(val) {
            return val != null && typeof val === 'object';
        };

        /**
         * Returns a copy of the new `object` containing only the specified properties.
         *
         * @name pick
         * @api public
         * @category Object
         * @see {@link omit}
         * @param {Array.<string>|string} props The property or properties to keep.
         * @param {Object} object The object to iterate over.
         * @return {Object} A new object containing only the specified properties from `object`.
         * @example
         * var person = { name: 'Tim', occupation: 'enchanter', fears: 'rabbits' };
         *
         * pick('name', person);
         * //=> { name: 'Tim' }
         *
         * pick(['name', 'fears'], person);
         * //=> { name: 'Tim', fears: 'rabbits' }
         */

        var pick = function pick(props, object) {
            if (!existy(object) || !isObject(object)) {
                return {};
            }

            if (isString(props)) {
                props = [props];
            }

            if (!isArray(props)) {
                props = [];
            }

            var result = {};

            for (var i = 0; i < props.length; i += 1) {
                if (isString(props[i]) && props[i] in object) {
                    result[props[i]] = object[props[i]];
                }
            }

            return result;
        };

        /**
         * Exports.
         */

        module.exports = pick;

    }, {}],
    249: [function(require, module, exports) {

        /**
         * prevent default on the given `e`.
         *
         * examples:
         *
         *      anchor.onclick = prevent;
         *      anchor.onclick = function(e){
         *        if (something) return prevent(e);
         *      };
         *
         * @param {Event} e
         */

        module.exports = function(e) {
            e = e || window.event
            return e.preventDefault ? e.preventDefault() : e.returnValue = false;
        };

    }, {}],
    251: [function(require, module, exports) {

        /**
         * Module dependencies.
         */

        var Entity = require('./entity');
        var bind = require('bind');
        var cookie = require('./cookie');
        var debug = require('debug')('analytics:user');
        var inherit = require('inherit');
        var rawCookie = require('cookie');
        var uuid = require('uuid');


        /**
         * User defaults
         */

        User.defaults = {
            persist: true,
            cookie: {
                key: 'ajs_user_id',
                oldKey: 'ajs_user'
            },
            localStorage: {
                key: 'ajs_user_traits'
            }
        };


        /**
         * Initialize a new `User` with `options`.
         *
         * @param {Object} options
         */

        function User(options) {
            this.defaults = User.defaults;
            this.debug = debug;
            Entity.call(this, options);
        }


        /**
         * Inherit `Entity`
         */

        inherit(User, Entity);

        /**
         * Set/get the user id.
         *
         * When the user id changes, the method will reset his anonymousId to a new one.
         *
         * // FIXME: What are the mixed types?
         * @param {string} id
         * @return {Mixed}
         * @example
         * // didn't change because the user didn't have previous id.
         * anonymousId = user.anonymousId();
         * user.id('foo');
         * assert.equal(anonymousId, user.anonymousId());
         *
         * // didn't change because the user id changed to null.
         * anonymousId = user.anonymousId();
         * user.id('foo');
         * user.id(null);
         * assert.equal(anonymousId, user.anonymousId());
         *
         * // change because the user had previous id.
         * anonymousId = user.anonymousId();
         * user.id('foo');
         * user.id('baz'); // triggers change
         * user.id('baz'); // no change
         * assert.notEqual(anonymousId, user.anonymousId());
         */

        User.prototype.id = function(id) {
            var prev = this._getId();
            var ret = Entity.prototype.id.apply(this, arguments);
            if (prev == null) return ret;
            // FIXME: We're relying on coercion here (1 == "1"), but our API treats these
            // two values differently. Figure out what will break if we remove this and
            // change to strict equality
            /* eslint-disable eqeqeq */
            if (prev != id && id) this.anonymousId(null);
            /* eslint-enable eqeqeq */
            return ret;
        };

        /**
         * Set / get / remove anonymousId.
         *
         * @param {String} anonymousId
         * @return {String|User}
         */

        User.prototype.anonymousId = function(anonymousId) {
            var store = this.storage();

            // set / remove
            if (arguments.length) {
                store.set('ajs_anonymous_id', anonymousId);
                return this;
            }

            // new
            anonymousId = store.get('ajs_anonymous_id');
            if (anonymousId) {
                return anonymousId;
            }

            // old - it is not stringified so we use the raw cookie.
            anonymousId = rawCookie('_sio');
            if (anonymousId) {
                anonymousId = anonymousId.split('----')[0];
                store.set('ajs_anonymous_id', anonymousId);
                store.remove('_sio');
                return anonymousId;
            }

            // empty
            anonymousId = uuid();
            store.set('ajs_anonymous_id', anonymousId);
            return store.get('ajs_anonymous_id');
        };

        /**
         * Remove anonymous id on logout too.
         */

        User.prototype.logout = function() {
            Entity.prototype.logout.call(this);
            this.anonymousId(null);
        };

        /**
         * Load saved user `id` or `traits` from storage.
         */

        User.prototype.load = function() {
            if (this._loadOldCookie()) return;
            Entity.prototype.load.call(this);
        };


        /**
         * BACKWARDS COMPATIBILITY: Load the old user from the cookie.
         *
         * @api private
         * @return {boolean}
         */

        User.prototype._loadOldCookie = function() {
            var user = cookie.get(this._options.cookie.oldKey);
            if (!user) return false;

            this.id(user.id);
            this.traits(user.traits);
            cookie.remove(this._options.cookie.oldKey);
            return true;
        };


        /**
         * Expose the user singleton.
         */

        module.exports = bind.all(new User());


        /**
         * Expose the `User` constructor.
         */

        module.exports.User = User;

    }, {
        "./entity": 254,
        "bind": 240,
        "./cookie": 241,
        "debug": 214,
        "inherit": 255,
        "cookie": 207,
        "uuid": 212
    }],
    239: [function(require, module, exports) {
        module.exports = {
            "name": "analytics-core",
            "version": "2.10.0",
            "main": "analytics.js",
            "dependencies": {},
            "devDependencies": {}
        };
    }, {}]
}, {}, {
    "1": ""
});

setTimeout(function() {
    //添加xpath插件 https://github.com/bimech/ellocate.js/blob/master/jquery.ellocate.js
    (function($) {
        $.fn.ellocate = function(uniqueIds) {
            var el = $(this)[0];
            var uniqIds = uniqueIds || [];
            var locator = {
                xpath: '',
                css: ''
            };
            var eloc = {
                isUniqueId: function(id, ids) {
                    return !!($.inArray(id, ids) == -1);
                },
                getClass: function(el) {
                    var formatClass = '';
                    var elementClass = $(el).attr('class');
                    if (typeof elementClass != 'undefined' && elementClass != '') {
                        formatClass = '.' + elementClass.split(/[\s\n]+/).join('.');
                    }
                    return formatClass;
                }
            };
            for (; el && el.nodeType == 1; el = el.parentNode) {
                var idx = $(el.parentNode).children(el.tagName).index(el) + 1;
                if (el.tagName.substring(0, 1) != "/") { //IE oddity: some tagNames can begin with backslash.
                    if (el.id != 'undefined' && el.id != '' && eloc.isUniqueId(el.id, uniqIds)) {
                        uniqIds.push(el.id);
                        var idPath = "[@id=" + "'" + el.id + "'" + "]";
                        locator.xpath = '/' + el.tagName.toLowerCase() + idPath + locator.xpath;
                        locator.css = el.tagName.toLowerCase() + '#' + el.id + ' > ' + locator.css;
                    } else {
                        idx = '[' + idx + ']';
                        locator.xpath = '/' + el.tagName.toLowerCase() + idx + locator.xpath;
                        locator.css = el.tagName.toLowerCase() + eloc.getClass(el) + ' > ' + locator.css;
                    }
                }
            }
            locator.xpath = '/' + locator.xpath;
            locator.css = locator.css.substr(0, locator.css.length - 3);
            return locator;
        };
    })(jQuery);

    (function() {
        var setCookie = function(name) {
            var nowSequence = getCookie(name);
            var ns = parseInt(nowSequence) + 1;
            document.cookie = name + "=" + encodeURIComponent(ns) + ";path=/";
        };

        var getCookie = function(name) {
            var cookieValue = 0;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    //var cookie = jQuery.trim(cookies[i]);
                    var cookie = cookies[i].replace(/\s+/g, "");
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        };

        var hostseq = {
            set: setCookie,
            get: getCookie
        };


        var sequence = "sequence";
        var $logData;
        $logData = $("#loginData");
        var authorUrl = window.location.href;
        var authorArr = authorUrl.split("&");
        var appUuid,appSid,IsPC,appUserId;
        IsPC = function(){
            var userAgentInfo = navigator.userAgent;
            var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "weibo");
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
               if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
            }
           return flag;
        }
        authorArr.map(function(item, i) {
            if(authorArr[i].indexOf("uuid") > -1 && !IsPC()){
                appUuid = authorArr[i].toString().substr(5);
            }
            if(authorArr[i].indexOf("seqId") > -1 && !IsPC()){
                appSid = authorArr[i].toString().substr(6);
            }
            if(authorArr[i].indexOf("userId") > -1 && !IsPC()){
                appUserId = authorArr[i].toString().substr(7);
            }
        });

        //ueditor 插件渲染 单打点
        if ($('.pagename').data('page') === "EDITPOST") {
            setTimeout(function() {
                // var clikcUeditorText = $("body", document.getElementById('ueditor_1').contentWindow.document);
                    var clikcUeditorText = $("body", $('#editor > p'));
                analytics.trackLink(clikcUeditorText, 'OnInput', function(el, event) {
                    hostseq.set(sequence);
                    pointX = event.pageX;
                    pointY = event.pageY;
                    return {
                        page: 'EDITPOST',
                        block: 'FORM',
                        element: '3',
                        point: [pointX, pointY],
                        search: location.search,
                        path: location.pathname,
                        refer: document.referrer,
                        url: location.href,
                        xpath: $(event.toElement).ellocate(),
                        seq: hostseq.get(sequence) * 1,
                        uuid:appUuid,
                        sid:appSid
                    }
                });
            }, 1000);
        }

        if ($('.pagename').data('page') === "POSTDETAIL") {
            if ($logData.data("authenticated")) {
                setTimeout(function() {
                    // var clikcUeditorText = $("body", document.getElementById('ueditor_1').contentWindow.document);
                    var clikcUeditorText = $("body", $('#editor > p'));
                    analytics.trackLink(clikcUeditorText, 'OnIput', function(el, event) {
                        hostseq.set(sequence);
                        pointX = event.pageX;
                        pointY = event.pageY;
                        return {
                            page: 'POSTDETAIL',
                            block: 'ADDCOMMENT',
                            element: 'CONTENT',
                            point: [pointX, pointY],
                            search: location.search,
                            path: location.pathname,
                            refer: document.referrer,
                            url: location.href,
                            xpath: $(event.toElement).ellocate(),
                            seq: hostseq.get(sequence) * 1,
                            uuid:appUuid,
                            sid:appSid
                        }
                    });
                }, 10000);

            }

        }
        //广场一级分页 搜索分页 插件渲染 单打点
        var clickPageBtn = $('#list_pager');
        analytics.trackLink(clickPageBtn, 'OnClick', function(el, event) {
            pointX = event.pageX;
            pointY = event.pageY;
            var x;
            if ($(event.target).hasClass('page-link prev')) {
                hostseq.set(sequence);
                x = 'BACK';
            } else if ($(event.target).hasClass('page-link next')) {
                hostseq.set(sequence);
                x = 'FORWARD';
            } else {
                if (($(event.target)).hasClass('page-link')) {
                    x = $(event.target).text();
                    hostseq.set(sequence);
                } else {
                    return false;
                }
            }
            return {
                page: pageName,
                block: 'PAGINATION',
                element: x,
                point: [pointX, pointY],
                search: location.search,
                path: location.pathname,
                refer: document.referrer,
                url: location.href,
                xpath: $(event.toElement).ellocate(),
                seq: hostseq.get(sequence) * 1,
                uuid:appUuid,
                sid:appSid
            }
        });





        //page参数
        var pageName;
        var sequence = "sequence";
        var lengthLimit = $("[data-length$='limit']").length;

        //页面主体加<section class="pagename hide" data-page="POSTCOLLECT"></section>  data-page里放页面自定义页面名称
        //如不加则不发送page字段
        if ($('.pagename').data('page')) {
            pageName = $('.pagename').data('page');
        }
        //发送analytic_track/i appUserId
        postUserId = appUserId ? appUserId : hostseq.get('user_id');
        analytics.identify(postUserId);

        //绑定带data-click 属性的标签 点击发送
        var manageLog = function(event) {
            hostseq.set(sequence);
            var me = $(this);
            var pointX;
            var pointY;
            var blockID;
            var des = me.data('description');
            var xp = me.ellocate();
            var elementID;
            var elementIDTwo;

            if (me.data('block')) {
                blockID = me.data('block');
            } else {
                blockID = me.parents("[data-block]").data('block');
            }

            if (me.data('element')) {
                elementID = me.data('element');
            } else {
                elementID = me.parents("[data-element]").data('element');
            }

            if (me.data('elementtwo')) {
                elementIDTwo = me.data('elementtwo');
            } else {
                elementIDTwo = me.parents("[data-elementtwo]").data('elementtwo');
            }

            pointX = event.pageX;
            pointY = event.pageY;

            analytics.track('OnClick', {
                page: pageName,
                block: blockID,
                element: elementID,
                elementFirstChild: elementIDTwo,
                describe: des,
                point: [pointX, pointY],
                search: location.search,
                path: location.pathname,
                refer: document.referrer,
                url: location.href,
                limit: lengthLimit,
                xpath: xp,
                frontendUserTrack: window._getSid,
                seq: hostseq.get(sequence) * 1,
                uuid:appUuid,
                sid:appSid,
                timezone: "GMT" + (new Date()).getTimezoneOffset() / 60 // 新加时区
            });
        };
        //监听键盘 发送日志
        var manageLogKeyBoard = function(event) {
            hostseq.set(sequence);
            var me = $(this);
            // var pointX;
            // var pointY;
            var blockID;
            var des = me.data('description');
            var xp = me.ellocate();
            var elementID;
            var elementIDTwo;

            if (me.data('block')) {
                blockID = me.data('block');
            } else {
                blockID = me.parents("[data-block]").data('block');
            }

            if (me.data('element')) {
                elementID = me.data('element');
            } else {
                elementID = me.parents("[data-element]").data('element');
            }

            if (me.data('elementtwo')) {
                elementIDTwo = me.data('elementtwo');
            } else {
                elementIDTwo = me.parents("[data-elementtwo]").data('elementtwo');
            }

            // pointX = event.pageX;
            // pointY = event.pageY;

            analytics.track('OnClick', {
                page: pageName,
                block: blockID,
                element: elementID,
                elementFirstChild: elementIDTwo,
                describe: des,
                search: location.search,
                path: location.pathname,
                refer: document.referrer,
                url: location.href,
                limit: lengthLimit,
                xpath: xp,
                frontendUserTrack: window._getSid,
                seq: hostseq.get(sequence) * 1,
                uuid:appUuid,
                sid:appSid,
                timezone: "GMT" + (new Date()).getTimezoneOffset() / 60 // 新加时区
            });
        };

        //内部某一元素打点 此处为全局绑定a标签 example：内部由运营直接推出 无法操控标签时 给父级绑定data-innerclick属性 如父级不绑定innerclick属性 则默认就是只要是a链接 就发 但是只有xpath，如想发data－element,block等 则走上面添加data－click属性的那套逻辑。
        $('body').on('click', 'a,input,select', function(event) {

            var me = $(this);
            var pointX;
            var pointY;
            var blockID = me.parents("[data-innerclick]").data('block');
            var des = me.parents("[data-innerclick]").data('description');
            var xp = me.ellocate();
            var elementID;
            if (me.parents("[data-innerclick]").data('element')) {
                elementID = me.parents("[data-innerclick]").data('element');
            } else {
                elementID = me.parents("[data-element]").data('element');
            }

            pointX = event.pageX;
            pointY = event.pageY;

            function analyticstrack() {
                hostseq.set(sequence);
                analytics.track('OnClick', {
                    page: pageName,
                    block: blockID,
                    element: elementID,
                    describe: des,
                    point: [pointX, pointY],
                    search: location.search,
                    path: location.pathname,
                    refer: document.referrer,
                    url: location.href,
                    limit: lengthLimit,
                    xpath: xp,
                    frontendUserTrack: window._getSid,
                    seq: hostseq.get(sequence) * 1,
                    uuid:appUuid,
                    sid:appSid,
                    timezone: "GMT" + (new Date()).getTimezoneOffset() / 60 // 新加时区
                });
            }
            if (me.parents("[data-innerclick]").data('innerclick')) {
                analyticstrack();
            } else {
                //纯input包括checkbox radio等 走此逻辑
                if((!me.attr('data-click'))&&(!me.attr('data-input'))){
                analyticstrack();
                }
            }

        });

        $('body').on('click', "[data-click$='onClick']", manageLog);
        //input标签有表单切换可添加data－input属性用focus监听，单独input加data－click属性用click监听
        $('body').on('focus', "[data-input$='onInput']", manageLog);
        $('body').on('submit', 'form', manageLog);
        $('input').on("keydown", function(event) {
            if (event.keyCode == 13) {
               manageLogKeyBoard();
            }
        });
        // 外部调用接口
        $(document).on('goToSendLog', function(event, dataBlock, dataElement, dataFirstChild, datadiscript, pointx, pointy, dataLimit) {

            hostseq.set(sequence);
            analytics.track('OnClick', {
                page: pageName,
                block: dataBlock,
                element: dataElement,
                elementFirstChild: dataFirstChild,
                describe: datadiscript,
                point: [pointx, pointy],
                search: location.search,
                path: location.pathname,
                refer: document.referrer,
                url: location.href,
                limit: dataLimit,
                seq: hostseq.get(sequence) * 1,
                frontendUserTrack: window._getSid,
                uuid:appUuid,
                sid:appSid,
                xpath: $(event.currentTarget.activeElement).ellocate(),
                timezone: "GMT" + (new Date()).getTimezoneOffset() / 60 // 新加时区
            });

        });

        function anony() {
            var aid = hostseq.get('ajs_anonymous_id');
            var aidd = aid.replace(/\"/g, "");
            return aidd;
        }
    })();
}, 500);