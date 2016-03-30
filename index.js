window.modals = (function() {
    var defaultConfig = {
        selector: '.modals',
        title: 'title',
        content: 'content',
        closeBtn: 'close'
    };

    function mergeConfig(customConf) {
        var mergedConf = {};

        for (var i in defaultConfig) {
            if (typeof customConf[i] !== 'undefined') {
                mergedConf[i] = customConf[i];
            }
            else {
                mergedConf[i] = defaultConfig[i];
            }
        }

        return mergedConf;
    }

    function handler(e) {
        console.log(e.target);
    }

    function createModal() {
        console.error('someFunction1');
    }

    return {
        someMethod1: function() {
            console.error(1);
        },
        someMethod2: function() {
            console.error(2);
        },
        someMethod3: function() {
            console.error(3);
        },
        getConfig: function() {
            return defaultConfig;
        },
        initModal: function(config) {
            var currentConfig = mergeConfig(config);
            var selector = currentConfig.selector;
            var elements = document.querySelectorAll(selector);
            var elementsArr = Array.prototype.slice.call(elements);

            elementsArr.forEach(function(element) {
                element.addEventListener('click', handler);
            });
        },
        destroyModal: function(config) {
            var selector = config.selector;
            var elements = document.querySelectorAll(selector);
            var elementsArr = Array.prototype.slice.call(elements);

            elementsArr.forEach(function(element) {
                element.removeEventListener('click', handler);
            });
        }
    };
}());

//gulp-server-livereload