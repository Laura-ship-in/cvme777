
import $ from 'jquery';
global.$ = global.jQuery = $;

$(document).ready(function () {
    var $skills = $('#skills');

    if ($skills.length) { // verifică dacă elementul există
        var offsetTop = $skills.offset().top;

        $(window).on("scroll", function () {
            var height = $(window).height();
            var multiply = 4;

            if ($(window).scrollTop() + height > offsetTop) {
                $('.bar-container').each(function () {
                    $(this).find('.progressbar').animate({
                        width: $(this).attr('data-percent'),
                    }, 2000);

                    var $this = $(this);
                    setTimeout(function () {
                        $this.parent('li')
                            .children(".progressbar-title")
                            .children('.percent')
                            .html($this.attr('data-percent'));
                    }, 500 * multiply);

                    multiply++;
                });
            }
        });
    }
});
