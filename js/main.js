$(document).ready(function () {
    $(".header-contacts__button").on("click", function () {
        $(".overlay").show()
    }),
        $(".contacts-block__cta").on("click", function () {
            $(".overlay").show()
        }),
        $(".products-block__buttons button:odd( 1 )").on("click", function () {
            $(".overlay").show()
        }),
        $(".popup-close").on("click", function () {
            $(".overlay").hide()
        }),
        $(".form").submit(function () {
            return event.preventDefault(), $.ajax({
                type: "post",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function () {
                $(this).find("input").val(""),
                    $(".form").trigger("reset"),
                    $(".overlay").hide(),
                    $(".overlaythanks").show()
            }),
                $('.popupthanks-close').on("click", function () {
                    $(".overlaythanks").hide();
                })
        }),
        (new WOW).init(),
        $(".production-slider__top").slick({
            arrows: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".production-slider__bottom",
            prevArrow: '<div class="slider-arrow slider-arrow_left" id="topLeft"></div>',
            nextArrow: '<div class="slider-arrow slider-arrow_right" id="topRight"></div>'
        }), $(".production-slider__bottom").slick({
        arrows: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".production-slider__top",
        centerMode: !0,
        centerPadding: "10px",
        prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_right"></div>'
    }), $(".feedback-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_left">',
        nextArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow_right">',
        responsive: [{
            breakpoint: 1200,
            settings: {slidesToShow: 1, slidesToScroll: 1, infinite: !1, dots: !1}
        }, {breakpoint: 992, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: !1, dots: !1}}, {
            breakpoint: 767,
            settings: {slidesToShow: 1, slidesToScroll: 1, infinite: !1, dots: !1}
        }, {breakpoint: 576, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: !1, dots: !1}}, {
            breakpoint: 321,
            settings: {slidesToShow: 1, slidesToScroll: 1, infinite: !0, arrows: !0, dots: !1}
        }, {breakpoint: 320, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: !0, arrows: !0, dots: !1}}]
    })

    jQuery(function ($) {
        $("#offerInput").mask("+7(999) 999-99-99");
        $("#mainInput").mask("+7(999) 999-99-99");
        $("#phoneNumber").mask("+7(999) 999-99-99");
    });

});