$(document).ready(function(){
    //touchaction - touchstart, touchend, touchmove

    var $t_start, $t_end, $t_move;
    //$t_start : 터치가 시작된 X 좌표
    //$t_end : 터치가 종료된 X 좌표
    //$t_move : $t_start의 값과 $t_end의 값이 연산된 최종값

    function prev(){ //터치의 방향이 좌측 이동시
        var $active_index = $(".touch_box .active").index();
        $(".touch_box .slide").removeClass("active");
        if($active_index == 0){
            $(".touch_box .slide").eq(2).addClass("active");
        }else{
            $(".touch_box .slide").eq($active_index).prev().addClass("active");
        }
    }
    function next(){ //터치의 방향이 우측 이동시
        var $active_index = $(".touch_box .active").index();
        $(".touch_box .slide").removeClass("active");
        if($active_index == 2){
            $(".touch_box .slide").eq(0).addClass("active");
        }else{
            $(".touch_box .slide").eq($active_index).next().addClass("active");
        }
    }

    function touchmove(){
        $t_move = $t_start - $t_end;
        if($t_move < -100){
            $(".touch_box p").text("터치 방향은 오른쪽으로 이동");
            next();
        }else if($t_move > 100){
            $(".touch_box p").text("터치 방향은 왼쪽으로 이동");
            prev();
        }else{
            $(".touch_box p").text("터치 이동 범위 유효하지 않음");
        }
    }

    $(".touch_box").on("touchstart", function(event){
        console.log("터치시작 ", event); //event.changedTouches[0].pageX
        $t_start = event.changedTouches[0].pageX;
        console.log($t_start);
        //touchmove();
    });

    $(".touch_box").on("touchend", function(event){
        console.log("터치 종료 ", event);
        $t_end = event.changedTouches[0].pageX;
        console.log($t_end);
        touchmove();
    });
    /*
    setTimeout(function(){
        $(".touch_box").on("touchmove", function(event){
            console.log("터치 이동", event.changedTouches[0]);


        
            touchmove();
        

        
        });
    }, 500);
    */
});