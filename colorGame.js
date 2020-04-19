var numSquares= 6;
var colors = generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click", function () {

    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares=3;
    colors = generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.innerHTML=pickedColor;
    for(var i=0;i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";    
        }
        
    }
});

hardButton.addEventListener("click", function () {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares=6;
    colors = generateRandomColors(numSquares);
    for(var i=0;i<squares.length; i++){
       
            squares[i].style.backgroundColor=colors[i];
       
            squares[i].style.display="block";    
       
        
    }
});

resetButton.addEventListener("click", function () {

    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new correct color
    pickedColor = pickColor();
    //show the new picked color in the title
    colorDisplay.innerHTML = pickedColor;
    //change the colors in the square

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelBlue";
    messageDisplay.innerHTML="";
    resetButton.innerHTML="New Colors";
});









colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listners to squares
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColor) {
            alert("Correct!");
            messageDisplay.innerHTML = "Correct";
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
            changedColors(pickedColor);




        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.innerHTML = 'Try Again';
        }
    });
}

function changedColors(colors) {
    //loop through all the squares
    for (var i = 0; i < colors.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = colors;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //run loop 'num' number of times
    for (var i = 0; i < num; i++) {
        //get random color and push into array  
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    //generate random r code
    var r = Math.floor(Math.random() * 256);
    //generate random g code
    var g = Math.floor(Math.random() * 256);
    //generate random g code
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}