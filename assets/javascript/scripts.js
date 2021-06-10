var timeOfDay = moment().format("HH");

var timeInteger = parseInt(timeOfDay);
var saveBtn = $('.saveBtn');

$("#9Row").attr("data-time", moment("9:00am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00am", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00am", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00am", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00am", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00am", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00am", "h:mm a").format("HH"));
$("#6Row").attr("data-time", moment("6:00am", "h:mm a").format("HH"));


$(document).ready(function() {

    renderPlans();


    var currentDay = moment().format('dddd, MMMM Do');

    $("#currentDay").text(currentDay);



    for (var j = 1; j <= 12; j++) {
        var inputTime = $('#' + j + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTime);


        if (timeInteger === inputTimeInt) {
            $("#" + j + "Row").addClass("present");       
        
        }

        if (timeInteger > inputTimeInt) {
            $("#" + j + "Row").addClass("past");
        }

        if (timeInteger < inputTimeInt) {
            $("#" + j + "Row").addClass("future");
        }
    };

    saveBtn.on("mouseenter", function () {
        $(this).addClass('hover');
    });  

    saveBtn.on("mouseleave", function () {
        $(this).removeClass('hover');
    });



    saveBtn.on("click", function () {
        
        var hour = $(this).attr("data-hour");

      
        var plan = $("#" + hour + "Row").val();

        
        localStorage.setItem(hour, plan);

    });


    
    function renderPlans() {
        
        for (var i = 1; i <= 12; i++) {
            
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }



});