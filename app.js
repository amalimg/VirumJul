console.log("Js called");
var w = 800;
var h = 1000;
xMid = w/2;
yMid = h/2;
var drawTree = function(centerX, centerY){
    push();
    var baseW = 600;
    var baseH = 0.5*baseW;
    var spacing = 120;
    // stem
    fill(150,100,50);
    rect(centerX-25, centerY+275, 50, 75);

    // leaves
    var slim = 50;
    fill(0, 153, 0); 
    for(var i = 0; i < 4; i++){
        triangle(
            centerX-baseW/2+i*slim,
            centerY+280-i*spacing, 
            centerX, 
            centerY+300-baseH-i*spacing,
            centerX+baseW/2-i*slim,
            centerY+280-i*spacing
            )
    }
    pop();
 }
var drawGodJul = function(centerX, centerY){
    push();
    textSize(45);
    fill((Date.now()/5 % 255), 0, 0)
    text("God Jul VG",centerX-110, centerY);
    pop();
}
var drawDannebrog = function(centerX, centerY){
    push();
    var hei = 56*1;
    var wid = 75*1;
    fill(255,0,0);
    rect(centerX-wid/2,centerY-hei/2,wid,hei);
    noStroke();
    fill(255);
    rect(centerX-wid/2,centerY-1/14*hei,wid,hei/7);
    rect(centerX-wid/2+3*hei/7, centerY-hei/2,hei/7, hei);
    pop();
}

/**
 * Draw you function here: It should contain:
 * 3 colors, 3 different shapes, something personal
 * It should be centered accoding to the parameters
 * Should contain at least one loop and one if statement
 * It should be named according to your git name
 */
function Sophabbr(centerX, centerY){ 
    push()
    var wid = 100
    var hei = 100
    fill(0, 98, 255);
    ellipse(centerX,centerY,wid,hei);
    fill(255, 255, 255);
    ellipse(centerX,centerY,wid-(0.10*wid),hei-(0.10*hei));
    fill(255, 0, 0);
    ellipse(centerX,centerY,wid-(0.20*wid),hei-(0.20*wid));
    fill(255, 255, 255);
    ellipse(centerX,centerY,wid-(0.45*wid),hei-(0.45*hei));
    fill(0, 98, 255);
    ellipse(centerX,centerY,wid-(0.55*wid),hei-(0.55*wid));    
    fill(255,255,255)
    text("FCB",centerX-12,centerY+5)
    pop()
}


/**
 * Should draw a pretty but neutral background the tree
 */
function drawBackground(){
    background(200,200,200);
}

function setup(){
    createCanvas(w,h);
    drawBackground();
    drawTree(xMid,yMid+50);
    //drawDannebrog(xMid+100, yMid-100);
    drawGodJul(xMid, yMid+50);    
    //testLocator();
    //testSize();
    // call you method here below
    drawDannebrog(400,180)
    Sophabbr(300,400)
    testLocator()
}

/**
 * Replace dannebrog with you function to test location
 */
function testLocator(){
    Sophabbr(400, 500) // should a Dannebrog in the middle
    Sophabbr(50,50) // should draw Dannebrog in top left corner
    Sophabbr(750, 50) //should draw Dannebrog in top right corner
}

/**
 * The item should be in the middle of square, and nothing should point out.
 */
function testSize(){
    rect(100, 300, 100, 100);
    drawDannebrog(150, 350); //replace with you function
}

    
console.log("JS finished.")