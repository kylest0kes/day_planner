var timeAndDay = $("#currentDay");
var rowElements = $(".row")
var currentDate = moment().format('MMMM Do YYYY');
var timeBlock = $('.hour');

var currentDayAndTime = moment().format('dddd | MMMM Do YYYY | h:mm:ss a');
    timeAndDay.text(currentDayAndTime)

setInterval(function() {
    var currentDayAndTime = moment().format('dddd | MMMM Do YYYY | h:mm:ss a');
    timeAndDay.text(currentDayAndTime)
}, 1000);

getValue()

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


$(document).ready(function(){
    //function for on click of save button to save everything to localstorage
    $(".saveBtn").on("click", function() {
        $(this).siblings('.hour')
        //console.log($(this).siblings('.hour').attr('data-hour'))
        $(this).siblings('textarea').val()
        //console.log($(this).siblings('textarea').val())

        localStorage.setItem(JSON.stringify($(this).siblings('.hour').attr('data-hour')), $(this).siblings('textarea').val());
    });
})

function renderTodos() {
    
}

