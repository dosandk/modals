window.modals = (function() {
    var defaultConfig = {
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

            return mergeConfig(config);
        }
    };
}());