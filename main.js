canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var previous_x,previous_y;
var mouse_event="empty"
var color="orange" ;
var line_width=3 ;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouse_event="mouseDown"
    console.log("i have clicked Mouse down")
    radius=document.getElementById("radius").value ;
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    console.log("i have clicked Mouse down")
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;
        ctx.arc(current_x , current_y , radius , 0 , 2*Math.PI)
        ctx.stroke()
    }
    previous_x=current_x;
    previous_y=current_y
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
     mouse_event="mousedown"   
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
     mouse_event="mouseleave"   
}
function clearscreen()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
