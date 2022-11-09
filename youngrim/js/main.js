$(document).ready(function(){

    /* 
        비전 strong 고정 jquery
        css로 fixed 고정일 때, end - fixed 종료 후 css를 줘야함
    */
    let fixObj = $('.vision .inner .tit strong');
    let fixArea = $('.vision .list');
    let fixTop = 130;
    let fixBtm = 10;
    let fixStart;
    let fixEnd;
    let fixScroll = $(window).scrollTop();

    objFixed();

    $(window).scroll(function(){
        fixScroll = $(window).scrollTop();
        objFixed();
    });

    $(window).scroll(function(){
        objFixed();
    });

    function objFixed(){
        fixStart = fixArea.offset().top - fixTop;
        fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop;
        
        if(fixScroll < fixStart) {
            fixObj.removeClass('fixed');
            fixObj.removeClass('end');
        }
        else if((fixScroll >= fixStart) && (fixScroll < fixEnd)) {
            fixObj.addClass('fixed');
            fixObj.removeClass('end');
        }
        else {
            fixObj.removeClass('fixed');
            fixObj.addClass('end');
        }
    };

});