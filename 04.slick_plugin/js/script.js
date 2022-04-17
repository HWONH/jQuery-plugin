$(document).ready(function(){
    // ※ "slick js"는 최초 로딩시에 본인이 구조를 구성. 만약, "display:none" 이 적용된 상태에서 로딩이 되었다면 구조를 구성할 수 없음

    $("#case_01 .slick_group").slick({
        infinite : true, // 초기슬라이드로 회전(append 또는 prepend 방식으로 써클링)
        slidesToShow : 1, // 현재 화면상에서 몇개의 슬라이드 파트를 보여줄 것인가를 결정
        slidesToScroll : 1, // 한번씩 넘길때 이동하는 슬라이드 개수를 결정
        autoplay : true,  // 자동 슬라이드 여부를 결정
        speed : 500, // 슬라이드 전환속도
        dots : true, // 슬라이드 네비게이션을 보여주는 것에 대한 결정
        responsive : [  // 반응형 파트
            {
                breakpoint : 1024, // 반응형 시점
                settings : {       // 반응형에 따른 변경사항
                    slidesToShow : 2,
                    slidesToScroll : 2,
                    dots : false
                }
            },
            {
                breakpoint : 768,
                settings : {
                    fade : true,
                    slidesToShow : 1,
                    slidesToScroll : 1,
                    autoplay : false,
                    dots : false
                }
            }
        ]
    });

    $("#case_02 .slick_02").slick({
        infinite : true, // 무한 루프
        autoplay : true, // 자동 전환
        pauseOnHover : true, // 마우스 오버시 일시 정지
        vertical : true, // 수직방향으로 슬라이드 전환
        slidesToShow : 3, // .slick_02이라는 공간에 몇장의 슬라이드 이미지를 보여줄 것인가를 결정
        slidesToScroll : 1, // 이동 전환시 몇장이 넘어갈 것인지에 대한 결정
        dots : true,
        centerMode : true, // 슬라이드의 중앙 파트를 인식(.slick-center)
        centerPadding : '0px',
        autoplaySpeed : 2000 // 슬라이드가 자동 회전되는 과정상 대기시간
    });
});