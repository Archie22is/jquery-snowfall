/**
 * Plugin		: jQuery Snowfall 
 * Plugin Author	: Archie Makuwa (Archie22is)
 * Website		: https://archie.makuwa.co.za
 * Repo			: https://github.com/Archie22is/jquery-snowfall
 * Docs			: 
 * Issues		: https://github.com/Archie22is/jquery-snowfall/issues
 *
 *
 * Version		: (beta)
 *
 */

(function ($) {
    $.fn.snowfall = function (options) {
        var settings = $.extend({
            intensity: 100,
            direction: 'down',
            size: 5,
        }, options);

        return this.each(function () {
            var $element = $(this);
            var flakes = [];
            var directions = {
                'down': { x: 0, y: 1 },
                'left': { x: -1, y: 0 },
                'right': { x: 1, y: 0 },
                'up': { x: 0, y: -1 }
            };
            var direction = directions[settings.direction];

            function createFlake() {
                var flake = $('<div class="snowflake">❄</div>').css({
                    'position': 'absolute',
                    'top': Math.random() * $element.height(),
                    'left': Math.random() * $element.width(),
                    'font-size': settings.size + 'px',
                    'color': '#fff',
                    'pointer-events': 'none',
                    'z-index': 1000
                }).appendTo($element);
                flakes.push(flake);
            }

            function animateFlakes() {
                for (var i = 0; i < flakes.length; i++) {
                    var flake = flakes[i];
                    var top = parseFloat(flake.css('top'));
                    var left = parseFloat(flake.css('left'));
                    var newTop = top + direction.y;
                    var newLeft = left + direction.x;

                    if (newTop > $element.height() || newTop < 0 || newLeft > $element.width() || newLeft < 0) {
                        flake.remove();
                        flakes.splice(i, 1);
                        createFlake();
                    } else {
                        flake.css({
                            'top': newTop + 'px',
                            'left': newLeft + 'px'
                        });
                    }
                }
            }

            for (var i = 0; i < settings.intensity; i++) {
                createFlake();
            }

            setInterval(animateFlakes, 30);
        });
    };
}(jQuery));

