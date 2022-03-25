var lastpositionX, lastpositionY;
color= "green";
width_line= 2.5;
canvas=document.getElementById("micanvas");
ctx = canvas.getContext("2d");
var ancho= screen.width;
nuevo_ancho= screen.width - 70;
nuevo_alto= screen.height - 300;

if(ancho < 992)
{
    document.getElementById("micanvas").width = nuevo_ancho;
    document.getElementById("micanvas").height = nuevo_alto;
    document.body.style.overflow ="hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e)
{
console.log("mytouchstart");
color= document.getElementById("color").value ;
width_line = document.getElementById("width_line").value ;
lastpositionX= e.touches[0].clientX - canvas.offsetLeft;
lastpositionY= e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e)
{
    console.log("mytouchmove");
    current_positionX = e.touches[0].clientX-canvas.offsetLeft;
    current_positionY = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;
    console.log("ultima posicion de x y coordenadas = ");
    console.log("x = " + lastpositionX + "y =" + lastpositionY);
    ctx.moveTo(lastpositionX, lastpositionY);
    console.log("actual posicion de x y coordenadas = ");
    console.log("x = " + current_positionX + "y =" + current_positionY);
    ctx.lineTo(current_positionX,current_positionY);
    ctx.stroke ();
    lastpositionX = current_positionX;
    lastpositionY = current_positionY;
}

function limpiar()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

var mouseevent = "empty";
var lastpositionX, lastpositionY;
canvas=document.getElementById("micanvas");
ctx = canvas.getContext("2d");
color = "black";
width_line = 3;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value ;
    width_line = document.getElementById("width_line").value ;
    mouseevent = "mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
current_positionX = e.clientX-canvas.offsetLeft;
current_positionY = e.clientY-canvas.offsetTop;
if (mouseevent == "mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;  
    console.log("ultima posicion de x y coordenadas = ");
    console.log("x = " + lastpositionX + "y =" + lastpositionY);
    ctx.moveTo(lastpositionX, lastpositionY);
    console.log("actual posicion de x y coordenadas = ");
    console.log("x = " + current_positionX + "y =" + current_positionY);
    ctx.lineTo(current_positionX,current_positionY);
    ctx.stroke ();
}
lastpositionX = current_positionX;
lastpositionY = current_positionY;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseevent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseevent = "mouseleave";
}

function limpiar()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
