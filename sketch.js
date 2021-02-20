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
let points = [
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
  let cnv = createCanvas(800, 800, WEBGL);
  cnv.style("position:absolute;top:0;left:0");
  bg = loadImage('stars.jpg');
  createCanvas(800, 800, WEBGL);
  img = loadImage('map4.png');
  face = loadImage('face1.png')
  button = createButton('Toggle rotation');
  button.position(19, 19);
  button.mousePressed(e => globe.toggleRotation());
  globe = new Globe(radius, [10, 40, 300], [0.43, 3.5, 0], detail);
  latSlider = createSlider(0, 2 * Math.PI, 0, 0.00001);
  lonSlider = createSlider(0, 2 * Math.PI, 0, 0.00001);
  latPreciseSlider = createSlider(0, 0.1, 0, 0.001);
  lonPreciseSlider = createSlider(0, 0.1, 0, 0.001);
  saveCoorsbtn = createButton('Save coors');
  saveCoorsbtn.mousePressed(e => saveCoors());
  // globe.start();
  points.forEach(p => globe.addTag(20, 30, p))
  let nextBtn = createButton('Next tag');
  nextBtn.mousePressed(e=>globe.selectNextTag());
}

// tag1.startRotation();


function saveCoors() {
  points.push([latSlider.value() + latPreciseSlider.value(), lonSlider.value() + lonPreciseSlider.value()])
}


function draw() {
  //camera(...cameraCoordinates)
  background(0)
  ambientLight(200);
  let camX = map(mouseX, 0, width, -400, 400);
  let camZ = (height / 2) / tan(PI / 6);
  let fov = PI / 3;
  perspective(fov, width / height, 0, 2000);
  camera(0, 0, camZ - 120, 0, 0, 0, 0, 1, 0);
  let coors = [latSlider.value() + latPreciseSlider.value(), lonSlider.value() + lonPreciseSlider.value()]
  globe.update();
  globe.render();
};
// 6.11638