var c= document.getElementById("myCanvas");
var ctx= c.getContext("2d");

let img= new Image();
img.src= "numbersImg.jpg";

let canWidth= 155;
let canHeight= 215;

let frameWidth= 319;
let frameHeight= 310;

let numCols= 5;

let currentFrame=0;

function animate(){
	let maxFrame=10;

	let col= currentFrame % numCols;
	let row= Math.floor(currentFrame/numCols);

	ctx.clearRect(0,0,c.width,c.height);
	if(currentFrame == maxFrame){
		ctx.drawImage(img,1*frameWidth,0,canWidth,canHeight,0,0,canWidth,canHeight);
		ctx.drawImage(img,0,0,canWidth,canHeight,115,0,canWidth,canHeight);
		clearInterval(inter);
		currentFrame=0;
	}else{
		ctx.drawImage(img,col*frameWidth,row*frameHeight,canWidth,canHeight,70,0,canWidth,canHeight);
	}
	
	currentFrame++;
}

start.onclick= function(){inter = setInterval(animate, 500);}


