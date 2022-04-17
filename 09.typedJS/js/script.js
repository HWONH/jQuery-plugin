$(document).ready(function(){
    var typed = new Typed('.typed', {
        strings: ["This First sentence.", "This Second sentence.", "This third sentence."],
        // stringsElement : null,
        typeSpeed: 50,
        backSpeed: 50,
        smartBackspace : 'This', // 공통의 특정 값을 backspace로 제거하지 않은 상태에 다음 값으로 이동
        startDelay : 1000, // 쓰여지는 시간
        backDelay : 50, // 지워지는 시간
        loop : false, // 반복
        // loopCount: Infinity, // 반복 횟수

        fadeOut: false,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 400,

        showCursor: true,
        cursorChar: '｜',
        autoInsertCss: true, // 자동으로 스타일 적용
      });

      $(".text_type span").addClass("typed-cursor--blink")
});