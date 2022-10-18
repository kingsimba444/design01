$(document).ready(function(){
    
    // const myFullpage = new fullpage('#fullpage', {}); 이렇게만 써도 fullpage는 기본 동작함
    
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'right', /* 위치 */
		navigationTooltips: ['메인', '보건통계', '사업소개', '현장소식', '지원사업'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

		responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
	});
});
