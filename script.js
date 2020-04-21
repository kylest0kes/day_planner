var timeAndDay = $("#currentDay");

//console.log(currentDayAndTime)

setInterval(function() {
    var currentDayAndTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeAndDay.text(currentDayAndTime)
    console.log(currentDayAndTime)
}, 1000);


$(document).ready(function(){
    //function for on click of save button to save everything to localstorage
    $(".saveBtn").on("click", function() {

    });
    
})