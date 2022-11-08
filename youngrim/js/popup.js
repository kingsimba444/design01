$(document).ready(function(){
    let pagingTxt = ['Beautiful place', 'Utilitarian place', 'Excellent place']
    const swiper = new Swiper('.popup', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {
            el: ".btn_paging",
            clickable: true,
            renderBullet: function (index, className) {
              return '<button class="swiper-pagination-bullet btn' + (index + 1) + '"><span>' + (index + 1) + '</span><strong>'+ pagingTxt[index] +'</strong></button>';
            },
        },


        // pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        //     el: '.btn_paging', /* 해당 요소의 class명 */
        //     clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        //     /* type: 'fraction', type fraction을 주면 paging이 숫자로 표시됨 */
        // },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.btn_prev',  
        },

    }); // swiper 세팅

    /*
        같은 팝업에 두 가지 효과
        현재 팝업이 움직일 때는 - 일시정지
        일시정지 중에는 - 재생

        1. class명을 조정해서 상태에 따라 완전히 선택자를 다르게 해서 이벤트를 두 번 주는 경우
        .popup .btn_stop.stop   .popup .btn_stop.play
        2. if문으로 현재 play 상태인지 stop 상태인지 구분해서 적용하는 방법
            하나의 이벤트로
    */
    $('.popup .btn_stop').on('click', function(){
        if($(this).hasClass('play') == true) { // 만약에 현재 play 클래스를 가지고 있다면 (일시정지)
            swiper.autoplay.start();  /* 재생 기능 */
            $(this).removeClass('play');
            $(this).text('일시정지');
        }
        else { // 재생중
            swiper.autoplay.stop();  /* 일시정지 기능 */
            $(this).addClass('play');
            $(this).text('재생');
        }
        console.log('누름');

    }); // 일시정지 버튼



    /*
        swiper를 하나의 페이지에 여러개 적용하는 경우
        반드시 const swiper의 이름을 변경해야 함
    */
    const swiper_banner1 = new Swiper('.banner1', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            500: {    /* 500px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            800: {    /* 800px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1000: {    /* 1000px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },

    });

    const swiper_banner2 = new Swiper('.banner2', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 30, 
            },
            1024: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 40,
            },
        },
    });



}); // document.ready