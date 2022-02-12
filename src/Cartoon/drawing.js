var can= document.getElementById("myCanvas");
var l= can.getContext("2d");

//sky
var grad= l.createLinearGradient(0,0,1000,260);
grad.addColorStop(0, "#a8b2fd");
grad.addColorStop(1, "white");
l.fillStyle= grad;
l.fillRect(0,0,1350,800);

//cables
var begX=310;
var begY=300;
var ctX=500;
var ctY=120;
var endY= 58
var n;

l.beginPath();
l.strokeStyle="white";

for(n=0; n<4; n++){
	l.moveTo(begX, begY);
	l.quadraticCurveTo(ctX,ctY,ctX,endY);
	begX+=(5*(n+1));
	begY+=(80/(n+2));
	ctX+= 75;
	ctY+=5;
	endY+=5;	
}

l.stroke();
l.closePath();

l.strokeStyle="black";
//street
var grad2= l.createLinearGradient(0,605,668,800);
grad2.addColorStop(0, "#777878");
grad2.addColorStop("0.74", "#8f8686");
grad2.addColorStop(1, "#dfdfdf");
l.fillStyle= grad2;
l.fillRect(0,605,668,800);

var grad3= l.createLinearGradient(668,800,1350,355);
grad3.addColorStop(0, "#dfdfdf");
grad3.addColorStop("0.45", "#777878");
l.fillStyle= grad3;
l.fillRect(668,605,1350,800);

//building (left side)
var grad4= l.createLinearGradient(0,0,350,0);
grad4.addColorStop(0, "#b84d0d");
grad4.addColorStop("0.6", "#6a1c04");

l.beginPath();
l.moveTo(260,0);
l.lineTo(310, 120);
l.lineTo(310, 300);
l.lineTo(350,300);
l.lineTo(350,600);
l.lineTo(0,720);
l.lineTo(0,0);
l.closePath();
l.fillStyle=grad4;
l.fill();
l.stroke();

l.fillStyle="#a0b0ff";
l.font="30px Georgia";
l.fillText("Manhattan Bridge", 60,380);

l.beginPath();
l.moveTo(350,600);	//sidewalk
l.lineTo(380,600);
l.lineTo(160,713);
l.lineTo(120,740);
l.quadraticCurveTo(100, 750, 88,750);
l.lineTo(75,746);
l.lineTo(0,750);
l.lineTo(0,720);
l.closePath();
l.fillStyle="grey";
l.fill();
l.stroke();

l.beginPath();
l.moveTo(380,600);	//curb
l.lineTo(380,605);
l.lineTo(120,740);
l.lineTo(160,713);
l.closePath();
l.fillStyle="#1d1f20";
l.fill();
l.stroke();

l.beginPath();	//continuation of curb
l.moveTo(88,750);
l.lineTo(0,754);
l.lineTo(0,750);
l.lineTo(75,746);
l.closePath();
l.stroke();
l.fillStyle="#1d1f20";
l.fill();


//building (right side)
var grad5= l.createLinearGradient(880,0,1350,0);
grad5.addColorStop("0.1", "#ba441b");
grad5.addColorStop("0.4", "#a7340b");
grad5.addColorStop(1, "#c82409");

l.beginPath();
l.moveTo(1000,0);
l.lineTo(880,150);
l.lineTo(880,600);
l.lineTo(1350,720);
l.lineTo(1350,0);
l.stroke();
l.closePath();
l.fillStyle=grad5;
l.fill();

l.beginPath();	//curb continuation
l.moveTo(1240,760);
l.quadraticCurveTo(1275, 766, 1350,765);
l.lineTo(1350,758);
l.closePath();	
l.stroke();
l.fillStyle="#1d1f20";
l.fill();

l.beginPath();	//sidewalk
l.moveTo(880,600);
l.lineTo(845,600);
l.lineTo(1174,728);
l.lineTo(1210,750);
l.quadraticCurveTo(1230, 760, 1240,760);
l.lineTo(1260,758);
l.quadraticCurveTo(1300,760,1350,758);
l.lineTo(1350,720);
l.closePath();
l.stroke();
l.fillStyle="grey";
l.fill();

l.beginPath();	//curb
l.moveTo(845,600);
l.lineTo(845,605);
l.lineTo(1210,750);
l.lineTo(1174,728);
l.closePath();
l.stroke();
l.fillStyle="#1d1f20";
l.fill();

//bridge
l.beginPath();	//base
l.moveTo(350,365);
l.lineTo(350, 425);
l.lineTo(880,360);
l.lineTo(879,245);
l.closePath();
l.stroke();
l.fillStyle="#184264";	//darker blue
l.fill();

l.beginPath();	//bottom shadow
l.moveTo(500,355);
l.lineTo(725,360);
l.lineTo(725,385);
l.lineTo(500,380);
l.closePath();
l.fillStyle="#082833";
l.fill();

var startX= 500;
var startY =360;
var width= 20;
var height=245;
var k;
var m;

for(k=0; k<4; k++){
	l.beginPath();		//more columns
	l.fillStyle="#3b98b8";
	l.fillRect(startX,startY,width,height);
	l.closePath();
	startX+=74;
}

startX=564;
width=10;
for(m=0; m<3; m++){
	l.beginPath();		//more columns
	l.fillStyle="#184264";
	l.fillRect(startX,startY,width,height);
	l.stroke();
	l.closePath();
	startX+=74;
}


l.beginPath();	//bottom
l.moveTo(500,350);
l.lineTo(743,355);
l.lineTo(743,380);
l.lineTo(500,375);
l.closePath();
l.fillStyle="#3b89a3";
l.fill();

l.beginPath();	//top shadow
l.moveTo(500,60);
l.lineTo(725,80);
l.lineTo(725,115);
l.lineTo(500,95);
l.closePath();
l.fillStyle="#284868";
l.fill();

/********** columns **********/
l.beginPath();
l.moveTo(500,52);
l.lineTo(490,64);
l.lineTo(490,605);
l.lineTo(500,605);
l.closePath();
l.fillStyle="#184264";	//darker blue
l.fill();
l.stroke();

startX=500;
startY =80;
height=250;
width=20;
var i;
var j;

for(i=0; i < 4; i++){
	l.beginPath();
	height-=5;
	l.fillStyle="#3b98b8";
	l.fillRect(startX,startY,width,height);
	l.closePath();
	startX+=74;
}


startX= 564;
width= 10;
for(j=0; j < 3; j++){
	l.beginPath();
	l.fillStyle="#184264";
	l.fillRect(startX,startY,width,height);
	l.stroke();
	l.closePath();
	startX+=74;
}

/********** columns **********/

l.beginPath();	//top
l.transform(1,0.1,0,1,0,0);
l.fillStyle="#3b89a3";
l.fillRect(500, 0, 242,35);
l.closePath();

//more cables
begX=310;
begY=300;
ctX=500;
ctY=120;
endY= 58
var o;

l.beginPath();
l.strokeStyle="white";

l.moveTo(510,10);
l.quadraticCurveTo(800, 90, 879,70);
l.moveTo(580,20);
l.quadraticCurveTo(810, 85, 879,80);
l.moveTo(655,25);
l.quadraticCurveTo(800, 80, 880,60);
l.moveTo(725,25);
l.quadraticCurveTo(820, 70, 885,55);

l.stroke();
l.closePath();

l.strokeStyle="black";

//base
l.beginPath();
l.moveTo(350,320)
l.lineTo(880,150);
l.lineTo(880,205);
l.lineTo(350,345)
l.closePath();
l.stroke();
l.fillStyle="black";
l.fill();

l.beginPath();
l.moveTo(350,320);
l.lineTo(879,150);
l.lineTo(879,165);
l.lineTo(350,325);
l.closePath();
l.fillStyle="#3b89a3";	//primary color
l.fill();

l.beginPath();
l.moveTo(350,345);
l.lineTo(879,205);
l.lineTo(879,180);
l.lineTo(350,335);
l.closePath();
l.fillStyle="#72bfd9";	//lighter blue
l.fill();
//base