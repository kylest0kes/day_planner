var timeAndDay = $("#currentDay");
var currentDayAndTime = moment().format('MMMM Do YYYY, h:mm:ss a');
//console.log(currentDayAndTime)

timeAndDay.text(currentDayAndTime)

$(document).ready(function(){
    //function for on click of save button to save everything to localstorage
    $(".saveBtn").on("click", function() {

    });
    
})