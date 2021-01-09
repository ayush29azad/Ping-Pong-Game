var paddleHeight = 20;
var paddleLength = 250;
var ballRadius = 20;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 600;  // from left
var positionOfPaddle2 = 600;  // frommleft
var topPositionOfBall = 770;
var leftPositionOfBall = 700;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;
var k=false;

var x=1;




function startBall()
{


  while(x>0)
  {
   alert ('Instructions Player 1 (top):Play with keys A and S  and Player 2 (bottom)  Play with keys  arrow-left  and arrow-right to move paddle left and right . ');
   x--;
  
  }
	topPositionOfBall = 770;
  leftPositionOfBall = 700;
	if (Math.random() < 0.5) {
		var side = 1
	} else {
		var side = -1
	}
	topSpeedOfBall = (Math.random() * -5 -6);
	leftSpeedOfBall = side*(Math.random() *7+8 );
}

ply1= document.getElementById("ply1");
ply2 =document.getElementById("ply2");
var start = document.getElementById("start");


start.addEventListener("click", function() {
 k=true;
 startBall();


  start.style.display = 'none';
 form.style.display = 'none';
 scorebox.style.display = 'block';

 ply1.innerHTML=document.getElementById("p1").value;
 ply2.innerHTML=document.getElementById("p2").value
 
    
});
    















document.addEventListener('keydown', function (e) 
{
     if (e.keyCode == 65 || e.which == 65) { // A key
      speedOfPaddle1 = -10;
     }
     if (e.keyCode == 83 || e.which == 83) { // S Key
      speedOfPaddle1 = 10;
     }
     if (e.keyCode == 37 || e.which == 37) { // left arrow
      speedOfPaddle2 = -10;
     }
     if (e.keyCode == 39 || e.which == 39) { // right arrow
      speedOfPaddle2 = 10;
     }
}, false);

document.addEventListener('keyup', function (e) 
{
     if (e.keyCode == 65 || e.which == 65) { // A key
      speedOfPaddle1 = 0;
     }
     if (e.keyCode == 83 || e.which == 83) { // S Key
      speedOfPaddle1 = 0;
     }
     if (e.keyCode == 37 || e.which == 37) { // left arrow
      speedOfPaddle2 = 0;
     }
     if (e.keyCode == 39 || e.which == 39) { // right arrow
      speedOfPaddle2 = 0;
     }
}, false);


window.setInterval(function show() 
{  if(topPositionOfBall>window.innerHeight)
  {
   
    topPositionOfBall=window.innerHeight-47;
    return ;
  }

  if(k===true)
  {
  
  
    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;


    topPositionOfBall += topSpeedOfBall;
    leftPositionOfBall += leftSpeedOfBall;
    

    if (positionOfPaddle1 <= 1) 
    {
		positionOfPaddle1 = 1;
    }
    
    if (positionOfPaddle2 <= 1) 
    {
		positionOfPaddle2 = 1;
    }

    if (positionOfPaddle1 >= window.innerWidth-paddleLength) 
    {
		positionOfPaddle1 = window.innerWidth-paddleLength;
	}
    
    if (positionOfPaddle2 >= window.innerWidth-paddleLength) 
    {
		positionOfPaddle2 = window.innerWidth-paddleLength ;
    }
    
    if (leftPositionOfBall <= 0 || leftPositionOfBall >= window.innerWidth - ballRadius) 
    {
		leftSpeedOfBall = -leftSpeedOfBall;
    }

    if (topPositionOfBall <= paddleHeight) {
		if (leftPositionOfBall > positionOfPaddle1 && leftPositionOfBall < positionOfPaddle1 + paddleLength) {
			topSpeedOfBall = -topSpeedOfBall;
		} else {
     score2++;
		startBall();
		}
    }
    
    if (topPositionOfBall >= window.innerHeight - ballRadius - paddleHeight) 
    {
        if (leftPositionOfBall > positionOfPaddle2 && leftPositionOfBall < positionOfPaddle2 + paddleLength) 
        {
			topSpeedOfBall = -topSpeedOfBall;
        }

        else 
		{
   
			score1++
	   
			startBall();
		}
  }








    
	//change the left
	document.getElementById("paddle1").style.left = (positionOfPaddle1) + "px";
	document.getElementById("paddle2").style.left = (positionOfPaddle2) + "px";
    
	document.getElementById("ball").style.top = (topPositionOfBall) + "px";
	document.getElementById("ball").style.left = (leftPositionOfBall) + "px";

    document.getElementById('score1').innerHTML = score1;
	document.getElementById('score2').innerHTML = score2;
}}, 1000/50);





















