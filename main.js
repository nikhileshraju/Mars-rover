canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width= 100;
rover_height= 90;

rover_x=10;
rover_y=10;

background_img="mars.jpg"
rover_img="rover.png";

function add(){
background_img_tag=new Image();
background_img_tag.onload= upload_background;
background_img_tag.src=background_img;

rover_img_tag=new Image();
rover_img_tag.onload= upload_rover;
rover_img_tag.src=rover_img;
}

function upload_background(){
ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}

function upload_rover(){
ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log("keypressed is "+keypressed);
if (keypressed='38'){
up();
console.log("up arrow is pressed")
}
if(keypressed='40'){
down();
console.log("down arrow is pressed");
}
if(keypressed='37'){
left ();
console.log("left arrow is pressed");
}
if (keypressed='39'){
right();
console.log("right arrow is pressed");
}
}