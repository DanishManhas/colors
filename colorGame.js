var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var spanRGB = document.querySelector("#RGB");
var modeButtons = document.querySelectorAll(".mode");





init();


function init(){

	//modeButtons setup
	 setUpModeButtons();

//modify squares
	setUpSquares();
}
function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		if (this.textContent==="Easy") {
			numSquares=3;
		}else
			numSquares=6;
		reset();
	});
}
}

function setUpSquares(){
	squares.forEach(function(item, index){
	item.addEventListener("click", function(){
		var clickedColor = item.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"

		}

		else{
			item.style.backgroundColor = "#232323";
		  	messageDisplay.textContent = "Try Again";
		  }
		});
	});
 reset();

}






function changeColor( color){
 for (var i = 0; i < squares.length; i++) {
 	squares[i].style.backgroundColor = h1.style.backgroundColor = color;
 }
}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random]
}
function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
	 arr[i] = randomColor();
	}
	return arr;
}

function randomColor(){
	var r = Math.ceil(Math.random()*255);
	var g = Math.ceil(Math.random()*255);
	var b = Math.ceil(Math.random()*255);
	return ("rgb("+r+", "+g+", "+b+")");
}
resetButton.addEventListener("click",function(){

	reset();
});



function reset(){
	resetButton.textContent= "New Colors";

		
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		spanRGB.textContent = pickedColor;
		squares.forEach(function(item, index){

			if (colors[index]) {
				item.style.display="block";
				item.style.backgroundColor =colors[index];
			}
			else
				item.style.display="none";
		
		h1.style.backgroundColor ="steelBlue";
		
		messageDisplay.textContent="";
		});
}
