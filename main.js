var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width=screen.width;

    if(width<992)
    {
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touch_start", my_touch_start);
    
    function my_touch_start(e)
    {
       
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        

        console.log("my_touch_start");

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

    }



    canvas.addEventListener("touch_move", my_touch_move);
    function my_touch_move(e)
    {

        current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
        current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;


        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

