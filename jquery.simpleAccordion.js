
(function ($) {
    $.fn.simpleAccordion = function (params) {
        params = $.extend ({
            speed     : 500,
            header    : function (elem) {return elem;},
            container : function (elem) {return elem.next ();},
            cssClass  : 'open'
        }, params);

        var action = function (header) {
            header.on ('click', function (e) {
                e.preventDefault ();
                header = params.header ($(this));
                container = params.container ($(this));
                if (container.is (':hidden')) {
                    header.addClass (params.cssClass);
                    container.slideDown (params.speed);
                } else {
                    header.removeClass (params.cssClass);
                    container.slideUp (params.speed);
                }
            });
        }; // action ();

        $(this).each (function () {action ($(this));});

        return this;
    } // simpleAccordion ();
})(jQuery);
