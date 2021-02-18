let detailX;
let img;
const detail = 24;
const radius = 100;
let button;
let autoRotate = false;
let rotateCount = 0;
let stopTime = 0;
let bg;
// const cameraCoordinates = [
//   0,0,(height/2)/tan(PI/6),
//   0,0,0,
//   0,1,0
// ];



function setup() {
  bg=loadImage('stars.jpg');
  createCanvas(800,800,WEBGL);
  detailX = createSlider(3,24,3);
  detailX.position(10,height+5);
  detailX.style('width','80px');
  img = loadImage('map4.png');
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(e=>autoRotate = !autoRotate);

}




function draw() {
  //camera(...cameraCoordinates)
  ambientLight(200);
  background(0);
  translate(-35,90,535)

  if(autoRotate){
    rotateY(rotateCount);
    rotateCount++;
  }  else
    rotateY(rotateCount);
  texture(img);
  strokeWeight(0);
  sphere(radius,detail,detail);
};