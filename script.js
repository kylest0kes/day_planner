var timeAndDay = $("#currentDay");
var rowElements = $(".row")
var currentDayAndTime;



//getting current day and time
setInterval(function() {
    currentDayAndTime = moment().format('dddd | MMMM Do YYYY | h:mm a');
    timeAndDay.text(currentDayAndTime)
}, 1000);

//changing styles based on the current hour (isSame, isBefore, isAfter)



$(document).ready(function(){
    //function for on click of save button to save everything to localstorage
    $(".saveBtn").on("click", function() {

    });
    
})

// Use moment to get current time (hours) and compare to 8AM-6PM hardcoded
    // Compare the time you get to the 8AM-6PM
    // highlight those before the hour grey
    // highlight current hour red
    // highlight after hour green
    // add or remove classes with jQuery
    
// Saving stuff
    // correlate what you save to the date it was saved
    // on initial load, get today's date, compare with what's in local storage, and save that in localstorage
    // when to wipe the events (when the date in localstorage is different from today's date)