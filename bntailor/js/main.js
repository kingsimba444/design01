$(document).ready(function(){
    const swiper = new Swiper('.visual .popup', { /* 팝업을 감싼는 요소의 class명 */
    
        effect: "fade", /* fade 효과 */
    
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.btn_paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    
    }); // visual swiper

    /*
        visual popup의 정지버튼/재생버튼
        하나의 버튼이 두 가지 기능
        정지와 재생 기능을 구분하는 값...
        btn_stop 버튼에 play 클래스가 없으면 일시정지
        play 클래스가 있으면 재생
    */
    $('.visual .popup .btn_stop').on('click', function(){
        let popStatus = $(this).hasClass('play'); // true면 play가 있다는 이야기 - 재생기능실행
        if(popStatus == true) { // 버튼의 상태가 play 모양 - 현재 정지상태 - 재생 기능을 실행
            swiper.autoplay.start();
            $(this).removeClass('play');
            $(this).text('일시정지')
        }
        else { // 버튼의 상태가 일시정지 모양 - 현재 재생상태 - 일시정지 기능을 실행
            swiper.autoplay.stop();
            $(this).addClass('play');
            $(this).text('재생')
        }
    });

})

