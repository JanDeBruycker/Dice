var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Create bg-color
canvas.width = 150;
canvas.height = 150;

function drawCircle(locX, locY) {
    ctx.beginPath();
    ctx.arc(locX, locY, 15, 0, Math.PI*2);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.closePath();
}

var locOne = [canvas.width/2, canvas.height/2]
var locTwo =    [[30, 30],
                [canvas.width-30,canvas.height-30]];
var locFour =   [[30, canvas.height-30],
                [canvas.width-30, 30]];
var locSix =    [[30,canvas.height/2],
                [canvas.width-30,canvas.height/2]]


function drawOne() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle(locOne[0], locOne[1])
}
function drawTwo() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (var i=0; i<=1; i++) {
        drawCircle(locTwo[i][0], locTwo[i][1]);
    }
}
function drawThree() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawTwo();
    drawCircle(locOne[0],locOne[1]);
}
function drawFour() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawTwo();
    for (var i=0; i<=1; i++) {
        drawCircle(locFour[i][0], locFour[i][1]);
    }
}
function drawFive() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawFour();
    drawCircle(locOne[0],locOne[1]);
}
function drawSix() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawFour();
    for (var i=0; i<=1; i++) {
        drawCircle(locSix[i][0], locSix[i][1]);
    }
}

var btn
var currNum
function rollDice() {
    btn = document.getElementById('btn');

    currNum = setInterval(getNumber, 150);
    btn.style.visibility = "hidden";
    setTimeout(stopDice, 2000);
    
}
function stopDice() {
    clearInterval(currNum);
    btn.style.visibility = "visible";
    btn.value = "Roll again!";
}

function getNumber() {
        var randNum = Math.floor(Math.random() * 6);
        switch (randNum) {
            case 0:
                drawOne();
                break;
            case 1:
                drawTwo();
                break;
            case 2:
                drawThree();
                break;
            case 3:
                drawFour();
                break;
            case 4:
                drawFive();
                break;
            case 5:
                drawSix();
                break;
            default:
                window.alert("oops");
                break;
        }
}