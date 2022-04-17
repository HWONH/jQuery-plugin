$(document).ready(function(){
    // 슬라이드 효과에 대한 조건 세팅
    var coverflowSetting={
        slideShadow : true, // 슬라이드 그림자 효과 : 3d 효과를 강조하기 위해 이미지가 회전되었을 때 흐릿한 효과 부여
        rotate : 40, // 슬라이드의 회전각을 설정 : 값이 클수록 슬라이드 회전반경이 커지는 현상 발생
        stretch : 10, // 슬라이드와 슬라이드 사이의 거리 : 값이 클수록 서로 이미지가 켭치는 현상 발생
        depth : 500, // 효과에 대한 perspective(깊이 : 다음 이미지가 z축 방향에서 진입하는 깊이)에 접근하는 효과를 조정 : 값이 클수록 멀리서 진입하는 효과가 발생
        modifier : 1, // 효과에 대한 배수 : 위 모든 효과의 설정값을 곱하여 효과의 강도를 조정
    };

    // 초기값 세팅(전역변수)
    var $swiper=null;

    // 브라우저가 로딩이 완료되면 함수를 호출하면서 슬라이드 파트에 대한 세팅
    function init(){
        if($swiper!=null){$swiper.destory()} // 이미지가 전환되는 과정에서 화면 밖으로 넘어간 경우 이미지를 제거
        $swiper=new Swiper('.swiper-container', {
            effect : 'coverflow', // swiper.js에서 지정된 3d 효과 중 하나
            coverflowEffect : coverflowSetting, // 상단에서 선언된 효과 세팅값을 가져와서 적용
            loop : true,
            autoplay : {
                delay : 500
            },
            speed : 2000,
            pagination : {
                el : '.swiper-pagination',
                clickable : true
            },
            navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev'
            },
            scrollBar : {
                el : '.swiper-scrollbar'
            }
        });
    };

    init();
});