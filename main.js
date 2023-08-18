var MouseEvent = "empty";
var last_position_of_x, last_position_of_y;


    canvas = document.getElementById('myCanvas')
    ctx = canvas.getContext("2d")

    color = "black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e){

        MouseEvent = "mouseDown"
    }

    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e){
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if(MouseEvent == "mouseDown"){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line

            console.log("Last position of X and Y coordinates were:")
            console.log("x= " + last_position_of_x + " and y= " + last_position_of_y)
            ctx.moveTo(last_position_of_x, last_position_of_y)

            console.log("Current position of X and Y coordinates are:")
            console.log("x= " + current_position_of_mouse_x + " and y= " + current_position_of_mouse_y)
            ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
            ctx.stroke();
        }
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
    }

    canvas.addEventListener("mouseup",my_mouseup);
    function my_mouseup(e)
    {
        MouseEvent = "mouseUp";
    }

    canvas.addEventListener("mouseleave",my_mouseleave)
    function my_mouseleave(e)
    {
        MouseEvent = "mouseLeave";
    }

    function clearArea() {
        ctx.clearRect(0,0, ctx.canvaswidth, ctx.canvasheight)
    }