// current date at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

console.log(moment().hours());
var currentHour = moment().hours();

var allTimeBlocks = document.querySelectorAll("textarea");
var allSaveButtons = document.querySelectorAll("button");

// console.log(allTimeBlocks);

for( i=0; i<allTimeBlocks.length; i++){
    console.log(allTimeBlocks[i].id);
    if(parseInt(allTimeBlocks[i].id) < currentHour){
        // allTimeBlocks[i].className+=" past";
        allTimeBlocks[i].classList.add("past");
    }
    else if(parseInt(allTimeBlocks[i].id) === currentHour){
        // allTimeBlocks[i].className+=" past";
        allTimeBlocks[i].classList.add("present");
    }
    else{
        // allTimeBlocks[i].className+=" past";
        allTimeBlocks[i].classList.add("future");
    }
}

for( let i=0; i<allSaveButtons.length; i++){
    console.log(allSaveButtons[i].id);
    allSaveButtons[i].onclick = function(){
    console.log(allTimeBlocks[i].value)
    localStorage.setItem("text" + [i], allTimeBlocks[i].value)
    };
}

for( i=0; i<allTimeBlocks.length; i++){
    allTimeBlocks[i].value = localStorage.getItem("text" + [i])
}