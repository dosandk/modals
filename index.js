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
        createModal(this.modals.config);
    }

    function createModal(config) {
        var mainContainer = document.createElement('div');

        mainContainer.classList.add('modal');
        mainContainer.setAttribute('id', 'myModal');

        var modalContent = document.createElement('div');

        modalContent.classList.add('modal-content');

        var closeBtn = document.createElement('span');
        var closeBtnTxt = document.createTextNode('x');

        closeBtn.classList.add('close');
        closeBtn.appendChild(closeBtnTxt);

        var content = document.createElement('p');
        var contentTxt = document.createTextNode(config.content);

        content.appendChild(contentTxt);

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(content);
        mainContainer.appendChild(modalContent);

        document.body.appendChild(mainContainer);

        closeBtn.addEventListener('click', function() {
            mainContainer.classList.add('hide');
        });
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
                element.modals = {};
                element.modals.config = currentConfig;
                element.addEventListener('click', handler);
            });
        },
        destroyModal: function(config) {
            var selector = config.selector;
            var elements = document.querySelectorAll(selector);
            var elementsArr = Array.prototype.slice.call(elements);

            elementsArr.forEach(function(element) {
                element.modals = {};
                element.removeEventListener('click', handler);
            });
        }
    };
}());

//gulp-server-livereload