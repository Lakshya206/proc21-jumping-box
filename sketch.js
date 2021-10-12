var canvas;
var music;

var box1,box2,box3,box4;
var ball

var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

 box1 = createSprite(0,580,350,30);
 box1.shapeColor = "blue"

box2 = createSprite(300,580,200,30);
box2.shapeColor = "orange";

box3 = createSprite(515,580,200,30);
box3.shapeColor = "maroon";

box4 = createSprite(730,580,200,30);
box4.shapeColor = "green"

ball = createSprite(random(20,750),300,50,50);
ball.shapeColor = "white";
ball.velocityX=4
ball.velocityY=9


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));


    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    drawSprites();


//add condition to check if box touching surface and make it box
if(box1.isTouching(ball)&& ball.bounceOff(box1)){
ball.shapeColor = "blue";
music.play();
}

if(box2.isTouching(ball)){
ball.shapeColor = "orange";
music.stop();
ball.velocityX=0;
ball.velocityY=0;
}

if(box3.isTouching(ball)&& ball.bounceOff(box3)){
ball.shapeColor = "maroon"
}

if(box4.isTouching(ball)&& ball.bounceOff(box4)){
ball.shapeColor = "green";
}


}


