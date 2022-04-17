$(document).ready(function(){
    $("#date_01").datepicker({
        dateFormat : 'yy-mm-dd'
        /* 
        yy : 4자리수 연도
        mm : 01~12
        dd : 01~31
        */
    })
    /* ---------------------------------------------------------------------------------------------------- */
    $("#date_02").datepicker({
        dateFormat : 'yy-mm-dd',
        prevText : '이전달', // title="이전달"
        nextText : '다음달', // title="다음달"
        monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames : ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], // Monday
        dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'], // Mon
        dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'], // M
        showMonthAfterYear : true,
        yearSuffix : '년',
        changeMonth : true,
        changeYear : true
    });
    /* ---------------------------------------------------------------------------------------------------- */
    $.datepicker.setDefaults({
        dateFormat : 'yy-mm-dd',
        prevText : '이전달',
        nextText : '다음달',
        monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames : ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayNamesShort : ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear : true,
        yearSuffix : '년',
        changeMonth : true,
        changeYear : true
    });
    $("#date_03_01, #date_03_02").datepicker();
    /* ---------------------------------------------------------------------------------------------------- */
    $("#date_04_01").datepicker({
        dateFormat : 'yy-mm-dd',
        minDate : new Date('2020-08-18'),
        maxDate : new Date('2020-10-07'),
        // minDate : 0,
        // maxDate : 30,
        onClose : function(){
            $("#date_04_02").datepicker({
                dateFormat : 'yy-mm-dd',
                minDate : new Date('2020-08-19'),
                maxDate : new Date('2020-10-08'),
                // minDate : 0,
                // maxDate : 30
            });
        }
    });
    /* ---------------------------------------------------------------------------------------------------- */
    $("#today").text(new Date().toLocaleDateString());
    $("#fromDate").datepicker({
        showOn : "both", // 달력을 표시하는 시간을 양분시킴
        buttonImage : "img/calendar.png",
        buttonImageOnly : true, // 버튼 이미지만 보여줄지에 대한 판단
        dateFormat : 'yy-mm-dd',
        changeMonth : true,
        minDate : 0, // 현재 날짜 기준 최소날짜
        onClose : function(selectedDate){ // 시작일 datepicker가 선택되면 최소 종료일 지정
            $("#toDate").datepicker('option', 'minDate', selectedDate); // 시작일을 선택하면 최소 종료일로 시작되도록 활성화 // check!
        }
    });

    var searchMax='+1m';

    $("#toDate").datepicker({
        showOn : "both",
        buttonImage : "img/calendar.png",
        buttonImageOnly : true,
        dateFormat : 'yy-mm-dd',
        changeMonth : true,
        maxDate : searchMax, // 현재 날짜 기준 최대날짜 '+1m' '+1y'
        numberOfMonths : [1,2], // 보여질 달력의 개수 지정 [행,열]
        onClose : function(selectedDate){  // 종료일 datepicker가 선택되면 최대 종료일 지정
            $("#fromDate").datepicker('option', 'maxDate', selectedDate); // 종료일을 선택하면 최대 종료일로 시작되도록 활성화 // check!
        }
    })
    /* ---------------------------------------------------------------------------------------------------- */
    /* 
        [개발자 모드]
        1. .datepicker td의 클래스명
        ui-datepicker-today : 현재 날짜
        ui-datepicker-current-day : 선택 날짜
        2. .datepicker td a의 클래스명
        ui-state-active : 선택 날짜
     */
    $(".datepicker").datepicker({
        onSelect : function(selectedDate, inst){ // 특정 날짜를 선택했을 때, 선택된 날짜를 추출
            $("input[name='dp_selected']").val(selectedDate); // 추출한 날짜를 입력 상자의 value값으로 넣어줌
        }
    });
    $("#date_form_05 .ui-datepicker-today a").append("<p>오늘의 스케줄</p>").attr("sc", "오늘의 스케줄");
    $(".datepicker td").click(function(){
        var $sc_data=$(this).find("a").attr("sc");
        console.log($sc_data);
        return false;
    });

});