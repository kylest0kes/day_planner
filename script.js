var timeAndDay = $("#currentDay");
var rowElements = $(".row")
var currentDate = moment().format('MMMM Do YYYY');
var timeBlock = $('.hour');
var taskInput = $("#taskInput");

var currentDayAndTime = moment().format('dddd | MMMM Do YYYY | h:mm:ss a');
    timeAndDay.text(currentDayAndTime);

//function to set the calender date and the time
setInterval(function() {
    var currentDayAndTime = moment().format('dddd | MMMM Do YYYY | h:mm:ss a');
    timeAndDay.text(currentDayAndTime)
}, 1000);

$(document).ready(function(){
    //function for on click of save button to save everything to localstorage
    $(".saveBtn").on("click", function() {
        $(this).siblings('.hour')
        $(this).siblings('textarea').val()

        localStorage.setItem(JSON.stringify($(this).siblings('.hour').attr('data-hour')), $(this).siblings('textarea').val());
    });
})

getValue()

renderTodos()

//function to get the value of the row
function getValue() {
    for(var i = 0; i < rowElements.length; i++) {
        var timeBlockValue = parseInt($(timeBlock[i]).attr('data-hour'));
        var currentRow = $(rowElements[i])
        var hourValue = moment().hours();
        if (timeBlockValue < hourValue){
            currentRow.addClass('past')
        } else if (timeBlockValue === hourValue){
            currentRow.removeClass('past')
            currentRow.addClass('present')
        } else {
            currentRow.removeClass('past')
            currentRow.removeClass('present')
            currentRow.addClass('future')
        }     
    }
}

//function to render todos on the page on refresh
function renderTodos() {
    for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var task = localStorage.getItem(key);
        console.log(key, "|", task);
        
        
    }
}

