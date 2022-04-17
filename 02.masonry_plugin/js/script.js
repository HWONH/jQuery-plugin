$(document).ready(function(){
    //2차 배열 패턴 = ["이미지", "이미지 타이틀", "이미지 내용", "링크주소"];
    var $arr = [
        ["img_01.jpg", "타이틀-01", "내용-01", "https://www.pinterest.com"],
        ["img_02.jpg", "타이틀-02", "내용-02", "https://www.pinterest.com"],
        ["img_03.jpg", "타이틀-03", "내용-03", "https://www.pinterest.com"],
        ["img_04.jpg", "타이틀-04", "내용-04", "https://www.pinterest.com"],
        ["img_05.jpg", "타이틀-05", "내용-05", "https://www.pinterest.com"],
        ["img_06.jpg", "타이틀-06", "내용-06", "https://www.pinterest.com"],
        ["img_07.jpg", "타이틀-07", "내용-07", "https://www.pinterest.com"],
        ["img_08.jpg", "타이틀-08", "내용-08", "https://www.pinterest.com"],
        ["img_09.jpg", "타이틀-09", "내용-09", "https://www.pinterest.com"],
        ["img_10.jpg", "타이틀-10", "내용-10", "https://www.pinterest.com"]
    ];
    $(".grid").masonry({
        itemSelector : ".grid_item" //그리드를 적용할 대상(필수 사항)
    });

    $(".grid_item").each(function(index){
        $(this).css("background-image", "url(img/"+$arr[index][0]+")");
        $(this).find("p").text($arr[index][1]);
    });

    $(".grid_item").click(function(){
        var $index = $(this).index();  //배열 데이터와 연동하여 적용시키기 위함
        $(".popup_img").css("background-image", "url(img/"+$arr[$index][0]+")");
        $(".title").text($arr[$index][1]);
        $(".cont").text($arr[$index][2]);
        $(".link").attr("href", $arr[$index][3]);
        $(".dark").addClass("active");
        $(".popup").addClass("active");
    });
    $(".close, .dark").click(function(){
        $(".dark").removeClass("active");
        $(".popup").removeClass("active");
    });
});