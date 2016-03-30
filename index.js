window.modals = (function() {
    var defaultConfig = {
        selector: '.modal',
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

    function CreateModal() {
        console.error('someFunction1');
    }

    function handler(e) {
        console.log(e.target.innerHTML);
        console.log(this.modal);
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
                element.modal = {};
                element.modal.config = currentConfig;
                element.addEventListener('click', handler);
            });

            return elementsArr;
        },
        destroyModal: function(config) {
            var elements = document.querySelectorAll(config.selector);
            var elementsArr = Array.prototype.slice.call(elements);

            elementsArr.forEach(function(element) {
                element.removeEventListener('click', handler);
            });

            return elementsArr;
        }
    };
}());