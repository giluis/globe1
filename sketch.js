let detailX;
let img;
const detail = 40;
const radius = 140;
let button;
let autoRotate = false;
let rotateCount = 0;
let stopTime = 0;
let face;
let bg;
// const cameraCoordinates = [
//   0,0,(height/2)/tan(PI/6),
//   0,0,0,
//   0,1,0
// ];
let xa = 5000;
let globe;
/**
 * {Tag}
 */
let tag1;
let points= [
  [6.0012300000000005, 3.63922],
  [5.73703, 3.49077],
  [5.93844, 3.61422],
  [5.93844, 3.61422]
  
];
let latSlider;
let lonSilder;
let latPreciseSlider;
let lonPreciseSlider;
let saveCoorsbtn;
function setup() {
  let cnv = createCanvas(700,windowHeight/2, WEBGL);
  cnv.style("position:absolute;bottom:0;left:0");
  bg=loadImage('stars.jpg');
  createCanvas(800,800,WEBGL);
  img = loadImage('map4.png');
  face = loadImage('face1.png')
  button = createButton('Toggle rotation');
  button.position(19, 19);
  button.mousePressed(e => globe.toggleRotation());
  globe = new Globe(radius, [0, 60, 0], [0.43,3.5,0], detail);
  tag1 = new Tag(70,10,[0,0,radius+1],[0,3,0],24);
  latSlider = createSlider(0,2*Math.PI,0,0.00001);
  lonSlider = createSlider(0,2*Math.PI,0,0.00001);
  latPreciseSlider = createSlider(0,0.1,0,0.001);
  lonPreciseSlider = createSlider(0,0.1,0,0.001);
  saveCoorsbtn = createButton('Save coors');
  saveCoorsbtn.mousePressed(e => saveCoors());
}

  // tag1.startRotation();


function saveCoors(){
  points.push([latSlider.value()+latPreciseSlider.value(),lonSlider.value()+lonPreciseSlider.value()])
}


function draw() {
  //camera(...cameraCoordinates)
  ambientLight(200);
  let camX = map(mouseX,0,width,-400,400);
  let camZ = (height/2)/tan(PI/6);
  let fov = PI/3;
  perspective(fov,width/height,0,2000);
  camera(0, 0, camZ -120, 0, 0,0, 0, 1, 0);
  background(0);
  point(10,10);
  let coors = [latSlider.value()+latPreciseSlider.value(),lonSlider.value()+lonPreciseSlider.value()]
  globe.update();
  globe.render();
  points.forEach(([la,lo])=> globe.markPoint(la,lo));
  globe.markPoint(...coors);
  
  // console.log(...coors);
  // tag1.update();
  // tag1.render();
};

// 6.11638 