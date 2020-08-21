$(document).ready(function() {

    $(window).scroll(function() {

        let position = $(this).scrollTop();

        if (position >= 350) {
            $('.gallery').addClass('change')
        } else {
            $('.gallery').removeClass('change')
        }
    });

    $('.writers-accordion').click(function(e) {

        if (e.target.id.split('-')[0] === 'button') {

            $('#book1').attr('src', 'img/writers/' + e.target.id.split('-')[1] + '-book1.jpg')
            $('#book2').attr('src', 'img/writers/' + e.target.id.split('-')[1] + '-book2.jpg')

        }
    });

    $('.hamburger-menu').click(function() {

        $('.navigation').toggleClass('change');

    });

});
































