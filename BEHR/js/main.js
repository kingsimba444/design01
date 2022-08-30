$(document).ready(function(){
    let winW = $(window).width()
    let docW = $(document).width()
    
    console.log(winW)
    console.log(docW)
    
    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')


    // TOP 버튼을 클릭했을 때 상단으로 스크롤
    $('aside button').on('click', function(){
        console.log('눌렀어')
        // $(window).scrollTop(100)
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })

    /*
        header에
        조건 1 - 스크롤 값이 0보다 크면 header에 fixed 클래스 추가
        조건 2 - 스크롤 값이 0이면 header에 fixed 클래스를 삭제
    */
    /* 로딩했을 때 맨 처음 */
    let scrolling = $(window).scrollTop()
    console.log(scrolling)
    
    /* 스크롤 할 때마다 실행 */
    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if (scrolling > 100){
            $('header').addClass('fixed')
        }
        else {
            $('header').removeClass('fixed')
        }
    })
})
