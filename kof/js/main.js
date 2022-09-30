$(document).ready(function(){
    /*
        공지사항 보도자료 탭 교체
        탭 제목을 클릭하면 해당 탭이 보여야함.
        보이는 탭의 li에만 active 클래스가 추가되어야함

        클릭대상 : .notice ul li 
        실행 : 클릭한 li에 active 클래스 추가 = $(this)
        --> 내가 클릭하지 않은 다른 li에 active 클래스를 삭제해야함
            모든  li의 active 클래스를 지우고,
            내가 클릭한 li에만 active를 다시 줌
    */

    $('.notice ul li').on('click', function(){
        $('.notice ul li').removeClass('active');
        $(this).addClass('active');
    });
}); // document.ready 종료