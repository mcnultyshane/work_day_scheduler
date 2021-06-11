// establish variable for time with moment()
var timeOfDay = moment().format("HH");
console.log(timeOfDay);
// establishing variable for only the numerical value of the hour from the time of day
var timeInteger = parseInt(timeOfDay);
console.log(timeInteger);
// establishing jquery to access the 'saveBtn' on the html via its class.
var saveBtn = $('.saveBtn');


// setting the data attributes for each hour row and we will use to compare to time of day for css styling
$("#9Row").attr("data-time", moment("9:00am", "h:mm a").format("HH"));
$("#10Row").attr("data-time", moment("10:00am", "h:mm a").format("HH"));
$("#11Row").attr("data-time", moment("11:00am", "h:mm a").format("HH"));
$("#12Row").attr("data-time", moment("12:00pm", "h:mm a").format("HH"));
$("#1Row").attr("data-time", moment("1:00pm", "h:mm a").format("HH"));
$("#2Row").attr("data-time", moment("2:00pm", "h:mm a").format("HH"));
$("#3Row").attr("data-time", moment("3:00pm", "h:mm a").format("HH"));
$("#4Row").attr("data-time", moment("4:00pm", "h:mm a").format("HH"));
$("#5Row").attr("data-time", moment("5:00pm", "h:mm a").format("HH"));
$("#6Row").attr("data-time", moment("6:00pm", "h:mm a").format("HH"));


$(document).ready(function() {
    // local storage function.  see below
    planData();

    var currentDay = moment().format('dddd, MMMM Do');
    console.log(currentDay);

    $("#currentDay").text(currentDay);



    for (var j = 1; j <= 12; j++) {
        var inputTime = $('#' + j + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTime);
        //  if loop for setting CSS styles based on the time of day and what applies to 'past', 'present', 'future'
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


// setting up mouse event for saving the data (first setting up the new class to do hover)
    saveBtn.on("mouseenter", function () {
        $(this).addClass('hover');
    });  

    saveBtn.on("mouseleave", function () {
        $(this).removeClass('hover');
    });

// saving the plans for each row into local storage
    saveBtn.on("click", function () {
        
        var hour = $(this).attr("data-hour");

        var plan = $("#" + hour + "Row").val();

        localStorage.setItem(hour, plan);

    });

// function for pulling the local storage and populating in the proper time slot.
    function planData() {
        
        for (var i = 1; i <= 12; i++) {
            
            $("#" + i + "Row").val(localStorage.getItem(i));
        }
    }

});