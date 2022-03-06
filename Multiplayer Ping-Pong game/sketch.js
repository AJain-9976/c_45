var BG_1
var player_1IMG, player_2IMG
var player_1
var ball;
var edges;
var player_1score = 0
var player_2score = 0
var gameState = 'play'


function preload() {
  BG_1 = loadImage('BG_2.jpeg');
  player_1IMG = loadImage('Racket1.png');
  player_2IMG = loadImage('Racket2.png');
  ballIMG = loadImage('Ball.png');
}

function setup() {
  createCanvas(1500, 800);
  player_1 = createSprite(windowWidth/2-150, windowHeight/2, 50, 50);
  player_1.addImage(player_1IMG);
  player_1.scale = 0.3;
player_1.debug = false;
player_1.setCollider('rectangle',0, 0, 50, 50)

  player_2 = createSprite(windowWidth/2+500, windowHeight/2, 50, 50);
  player_2.addImage(player_2IMG);
  player_2.scale = 0.2;
player_2.debug = false;
player_2.setCollider('rectangle', 0, 0, 50, 50)

  ball = createSprite(windowWidth/2, windowHeight/2,);
  ball.addImage(ballIMG);
  ball.scale = 0.3
  ball.velocityX = 10;
  ball.velocityY = 10;
  ball.debug = false;
  ball.setCollider('circle', 0, 0,50)

  edges = createEdgeSprites();

}

function draw(){
  background(BG_1);

if(gameState == 'play') {




if(keyDown(LEFT_ARROW)) {
  player_1.x -= 5
} 
if(keyDown(RIGHT_ARROW)) {
  player_1.x += 5
}
if(keyDown(UP_ARROW)) {
  player_1.y -= 5
}
if(keyDown(DOWN_ARROW)) {
  player_1.y += 5
}

if(keyDown('A')) {
  player_2.x -= 5
} 
if(keyDown('D')) {
  player_2.x += 5
}
if(keyDown('W')) {
  player_2.y -= 5
}
if(keyDown('S')) {
  player_2.y += 5
}

if(ball.position.x == 10) {
player_2score += 1;
}
if(ball.position.x == 1490) {
  player_1score += 1;
  }

  if(player_1score == 10 || player_2score == 10) {
    gameState = 'end'
  }

ball.bounceOff(player_1);
ball.bounceOff(player_2);
ball.bounceOff(edges);
ball.bounceOff(edges);

}
if(gameState == 'end') {
  ball.velocityX = 0;
  ball.velocityY = 0;
  player_1.remove();
  player_2.remove();
}

  drawSprites();
  textSize(30);
  fill('red');
  text(player_1score, 700, 90)

  textSize(30);
  fill('red');
  text(player_2score, 780, 90)
}
   
        
      
    

    
  

  
 
    
    
  
    
    

  
  
  
 





