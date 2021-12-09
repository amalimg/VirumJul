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
function albeBody(centerX, centerY){ 
    push()
    fill(255,0,0);
    ellipse(350,400,80,80);
    
    fill(246,225,10);
    ellipse(330,390,30,30);
    ellipse(350,400,20,20);

    fill(1,86,225);
    ellipse(450,600,80,80);

    fill(246,225,10);
    ellipse(430,590,30,30);
    ellipse(450,600,20,20);

    fill(225, 1,205);
    ellipse(350,750,80,80);

    fill(246,225,10);
    ellipse(330,740,30,30);
    ellipse(350,750,20,20);   

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
    drawDannebrog(xMid+100, yMid-100);
    drawGodJul(xMid, yMid+50);
    
    
    //testLocator();
    //testSize();
    // call you method here below
    testLocator();
    testSize();
    albeBody();
    
}

/**
 * Replace dannebrog with you function to test location
 */
function testLocator(){
    albeBody(400, 500) // should a Dannebrog in the middle
    albeBody(50,50) // should draw Dannebrog in top left corner
    albeBody(750, 50) //should draw Dannebrog in top right corner
}

/**
 * The item should be in the middle of square, and nothing should point out.
 */
function testSize(){
    rect(100, 300, 100, 100);
    albeBody(150, 350); //replace with you function
}

    
console.log("JS finished.")