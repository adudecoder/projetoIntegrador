$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 6,
        loop: true,
        margin: 10,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

});