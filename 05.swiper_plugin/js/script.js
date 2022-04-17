$(document).ready(function(){
    var swiper = new Swiper(".swiper-container", {
        direction : 'horizontal', // 수평방향 이동 : horizontal(기본값) 수직방향 이동 : vertical
        loop : true, // 반복여부를 판단 : true 또는 false(기본값)
        
        /* 하단의 슬라이드 페이저 설정 */
        pagination : {
            el : '.swiper-pagination', // 슬라이드 페이저가 설치될 공간을지정
            clickable : true // 페이지 클릭시 해당하는 이미지로 이동하도록 설정 : 클릭 불가능(기본값) 또는  클릭 가능
        },

        /* 슬라이드 방향키 설정 */
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev'
        },

        /* 슬라이드 스크롤바 설정 */
        scrollBar : {
            el : '.swiper-scrollbar'
        },
        spaceBetween : 0, // 각 개별 슬라이드의 간격 설정
        autoplay : {
            delay : 1000 // 한 장의 슬라이드가 머무르는 시간
        },
        speed : 2000 // 슬라이드 속도

    });
});