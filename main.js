var mouseEvent = "";
var last_position_of_x, last_position_of_y;

var ink="black";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

line_width = 1;
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e){
    ink = document.getElementById("colors").value;
    line_width = document.getElementById("widthLine").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent =="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = ink;
        ctx.lineWidth = line_width;

        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

var width = screen.width;
var height = screen.height;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (width<992){
document.getElementById("myCanvas").width = newWidth;
document.getElementById("myCanvas").height = newHeight;
document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    ink = document.getElementById("colors").value;
    line_width = document.getElementById("widthLine").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{

     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

  
    ctx.beginPath();
    ctx.strokeStyle = ink;
    ctx.lineWidth = line_width;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}

function clearCanvas(){
ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}
