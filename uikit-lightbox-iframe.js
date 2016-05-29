(function () {

    "use strict";

    UIkit.on('beforeready.uk.dom', function () {

        UIkit.plugin("lightbox", "iframe", {

            init: function (lightbox) {

                lightbox.on("showitem.uk.lightbox", function (e, data) {

                    var resolve = function (source, width, height) {

                        data.meta = {
                            'content': '<iframe class="uk-responsive-width" src="' + source + '" width="' + 1125 + '" height="' + height + '"></iframe>',
                            'width': 1125,
                            'height': 775
                        };

                        data.type = 'iframe';

                        data.promise.resolve();
                    };

                    if (data.type === 'iframe' || data.source.match(/\.(html|php)$/)) {
                        resolve(data.source, (lightbox.options.width || 800), (lightbox.options.height || 600));
                    }
                });

            }
        });
    });
}());