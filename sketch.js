var ball,img1, img2, paddle, gamestate, score, promptfor;
function preload() {
  img1 = loadImage("ball.png");
  img2 = loadImage("paddle.png")
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(25, 200, 10, 10)
  paddle = createSprite(385, 200, 50, 10);
  gamestate = 0
  ball.addAnimation("ball", img1);
  paddle.addAnimation("paddle", img2);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;
  score = 0;
}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites()
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle, randomVelocity);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
   paddle.collide(edges);
  /* Prevent the paddle from going out of the edges */ 
  
  if (gamestate == 0) {
  if(keyDown(UP_ARROW))
  {
    paddle.y-=20 /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.y+=20
  }
  if (ball. x > 410) {
    gamestate = 1;
  }
  }
  if (gamestate == 1) {
     promptfor = prompt("Game Over! Want to restart? [y/n]")
    if (promptfor == "y") {
      gamestate = 0;
      reset();
    } else {
      remove();
      
    }
  }
  drawSprites();
  text("Score:"+score, 100, 50);
}

function randomVelocity()
{
  ball.velocityY = random(-9, 9) 
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  score++;
}

function reset() {
  ball.x = 25;
  ball.y = 200;
  score = 0;
  ball.velocityX = 9;
  ball.velocityY = 0
}

