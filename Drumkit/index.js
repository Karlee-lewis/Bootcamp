

var numOfButtons = document.querySelectorAll(".drum").length;
var buttonArray = document.querySelectorAll(".drum");
var audio = new Audio('sounds/tom-1.mp3');

for (var i = 0; i < numOfButtons; i++) {
  buttonArray[i].addEventListener("click", function (){
    console.log.(this);
    //--- What to do when clicked
  });
}


//  audio.play();
