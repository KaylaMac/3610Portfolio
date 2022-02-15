var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
    {name:"Kiwi", quantity:3, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
    {name:"Grapes", quantity:8, color:"purple"}
];

var can= document.getElementById("myCanvas");
var c= can.getContext("2d");

var i;
var x=0;  //x position of rectangles
var textX=25;
var numX=40;
for(i=0; i<fruit.length; i++){
  c.fillStyle= fruit[i].color;
  //height for rectangle is negative so that it may be drawn from bottom to top instead of top to bottom
  c.fillRect(x,500,100,-(fruit[i].quantity)*25);  
  x+=100; //draw next rectangle 100 pixels away from previous rectangle because they each have a width of 100 pixels
  c.fillStyle="black";
  c.font="20px Georgia";
  c.fillText(fruit[i].quantity,numX,460);
  c.fillText(fruit[i].name,textX,490);
  textX+= (92+ fruit[i].name.length); //add a few pixels depending on length of name
  numX+= 100;
}

