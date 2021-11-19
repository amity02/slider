$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        appendArrows: $('.arrows'),
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet arrow"><img src="img/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet arrow"><img src="img/arrow-next.svg" alt=""></button>',

        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });
});