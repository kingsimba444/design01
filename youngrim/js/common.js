$(document).ready(function() {

    let winW;
    let pcMobile;

    $(window).resize(function(){
        deviceChk()
    });

    function deviceChk(){
        winW = $(window).width;

        if(winW > 640){
            pcMobile = 'pc';
        }
        else {
            pcMobile = 'mobile';
        }

    } // function deviceChk


    /*
        브라우저가 스크롤을 할때 스크롤값이 0보다 크면
        header에 fixed라는 클래스를 줄 예정
        스크롤값이 0이면 header에 fixed라는 클래스 삭제
    */
    let scrolling;
    scrollChk();

    $(window).scroll(function(){
        scrollChk();
    });

    function scrollChk(){
        scrolling = $(window).scrollTop();
        console.log(scrolling);
        if (scrolling > 0){
            $('header').addClass('fixed')
        }
        else {
            $('header').removeClass('fixed')
        }

    }
    

}); // document.ready