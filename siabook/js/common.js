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
        console.log(pcMobile);
    }

    $('.header .gnb .gnb_wrap > ul > li').on('mouseenter focusin', function(){
        if(pcMobile == 'pc') {
            $('.header').addClass('menu_open');
        }
    });

    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_open');
    });

    $('.header .gnb .gnb_wrap > ul > li:last-child > ul > li:last-child > a').on('focusout', function(){
        $('.header').removeClass('menu_open');
    });


    
    
    
    let gnbStu;
    $('.header .gnb .gnb_open').on('click', function(){
        gnbStu = $('header').hasClass('mobile_open');
        if (gnbStu == true) {
            $('.header').removeClass('mobile_open');
            $('.header .gnb .gnb_open strong').text('메뉴열기');
        }
        else {
            $('.header').addClass('mobile_open');
            $('.header .gnb .gnb_open strong').text('메뉴닫기');
        }
    });
    
    $('.header .gnb .gnb_wrap > ul > li').on('click', function(e){
        console.log('click');
        console.log(pcMobile);
        if(pcMobile == 'mobile') {
            e.preventDefault();
            $(this).toggleClass('sub_open');
        }
    });

});