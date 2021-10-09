// declare date on page load as a variable and print to page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// delcare the hour on page load as a variable
var currentHour = moment().hours();

// declare the array of textareas as a variable
var allTimeBlocks = document.querySelectorAll("textarea");

// declare the array of buttons as a variable
var allSaveButtons = document.querySelectorAll("button");

// add classes to hours based on relation to current hour so we can style them in color-coded fashion using CSS
for( i=0; i<allTimeBlocks.length; i++){
    if(parseInt(allTimeBlocks[i].id) < currentHour){
        allTimeBlocks[i].classList.add("past");
    }
    else if(parseInt(allTimeBlocks[i].id) === currentHour){
        allTimeBlocks[i].classList.add("present");
    }
    else{
        allTimeBlocks[i].classList.add("future");
    }
}

// set textarea contents to local storage on "Save" button click
for( let i=0; i<allSaveButtons.length; i++){
    allSaveButtons[i].onclick = function(){
    localStorage.setItem("text" + [i], allTimeBlocks[i].value)
    };
}

// get textarea contents from local storage on page load
for( i=0; i<allTimeBlocks.length; i++){
    allTimeBlocks[i].value = localStorage.getItem("text" + [i])
}