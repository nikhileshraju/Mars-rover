Mars_images=["http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631290305226E03_DXXX.jpg",
"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
,"https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG",
"https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg"]

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext('2d')

rover_width= 100;
rover_height= 90;

rover_x=10;
rover_y=10;

rand_num = Math.floor(Math.random()*4)

var background_img = Mars_images[rand_num];
var rover_img="rover.png";

function add(){
background_imgtag=new Image();
background_imgtag.onload= upload_background;
background_imgtag.src=background_img;

rover_imgtag=new Image();
rover_imgtag.onload= upload_rover;
rover_imgtag.src=rover_img;
}

function upload_background(){
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function upload_rover(){
ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypressed=e.keyCode;
console.log("keypressed is "+keypressed);
if (keypressed=='38'){
up();
console.log("up arrow is pressed")
}
if(keypressed=='40'){
down();
console.log("down arrow is pressed");
}
if(keypressed=='37'){
left();
console.log("left arrow is pressed");
}
if (keypressed=='39'){
right();
console.log("right arrow is pressed");
}
}

function up() {
    if (rover_y>=0){
    rover_y = rover_y-10;
    console.log("when up arrow is pressed,x="+rover_x+" y ="+rover_y);
    upload_background();
    upload_rover();
    }
}

function down() {
    if (rover_y<=500){
    rover_y = rover_y+10;
    console.log("when up arrow is pressed,x="+rover_x+" y ="+rover_y);
    upload_background();
    upload_rover();
    }
}

function left() {
    if (rover_x>=0){
    rover_x = rover_x-10;
    console.log("when up arrow is pressed,x="+rover_x+" y ="+rover_y);
    upload_background();
    upload_rover();
    }
}

function right() {
    if (rover_x<=500){
    rover_x = rover_x+10;
    console.log("when up arrow is pressed,x="+rover_x+" y ="+rover_y);
    upload_background();
    upload_rover();
    }
}

