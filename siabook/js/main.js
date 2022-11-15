$(document).ready(function(){

    let winW;
    let pcMobile;
    deviceChk();

    $(window).resize(function(){
        deviceChk()
    });

    function deviceChk() {
        winW = $(window).width();

        if(winW > 640) {
            pcMobile = 'pc';
        }
        else {
            pcMobile = 'mobile';
        }
    }

    $('.header .gnb .gnb_wrap > ul > li').on('mouseenter focusin', function(){
        if(pcMobile = 'pc') {
            $('header').addClass('menu_open')
        }
    });

    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_open')
    });

    $('.header .gnb .gnb_wrap > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header').removeClass('menu_open')
    });

});