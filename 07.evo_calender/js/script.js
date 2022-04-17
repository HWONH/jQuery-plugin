$(document).ready(function(){
    // theme options : Default, Midnight Blue, Orange Coral, Royal Navy
    $("#calendar").evoCalendar({
        theme : 'Royal Navy',
        todayHighlight : true,
        formate : 'yyy/mm/dd',
        sidebarToggler :false,
        calendarEvents : [
            {id:'홍길동', name:'my birthday', date:'August/20/2020', type:'birthday', everyYear : true},
            {id:'홍영만', name:'interview', date:new Date(), type:'work'},
            {id:'홍영만', name:'meeting', date:new Date(), type:'work'}
        ]
    });
    $(".calendar-day").click(function(){
        var $theDay=$(this).find(".day").attr("data-date-val");
        $("#reservation").val($theDay);
    });
});