let detailX;
let img;
const detail = 40;
const radius = 150;
let button;
let autoRotate = false;
let rotateCount = 0;
let stopTime = 0;
let face;
let bg;
let globe;
let points = [
  [6.0012300000000005, 3.63922],
  [5.73703, 3.49077],
  [5.93844, 3.61422],
  [5.93844, 3.61422]

];

let nextTagBtn;

function setup() {
  let cnv = createCanvas(900, 500, WEBGL);
  cnv.style("position:absolute;bottom:0;left:0");
  cnv.parent("globe");
  bg = loadImage('stars.jpg');
  img = loadImage('map4.png');
  face = loadImage('face1.png')
  globe = new Globe(radius, [12, 110, 190], [0.29, 3.5, 0], detail);
  // nextTagBtn = createButton('Next Tag');
  // nextTagBtn.position(19, 19);
  // nextTagBtn.mousePressed(e => globe.selectNextTag());

  globe.start();
  points.forEach(p => globe.addTag(20, 30, p))
}


function draw() {
  clear();
  ambientLight(200);
  let camX = map(mouseX, 0, width, -400, 400);
  let camZ = (height / 2) / tan(PI / 6);
  let fov = PI / 3;
  globe.update();
  globe.render();
  globe.markPoint(PI/2,-PI/2)
};



function saveCoors() {
  points.push([latSlider.value() + latPreciseSlider.value(), lonSlider.value() + lonPreciseSlider.value()])
}
function createSliders() {
  return {
    latSlider: createSlider(0, 2 * Math.PI, 0, 0.00001),
    lonSlider: createSlider(0, 2 * Math.PI, 0, 0.00001),
    latPreciseSlider: createSlider(0, 0.1, 0, 0.001),
    lonPreciseSlider: createSlider(0, 0.1, 0, 0.001)
  }
}

function createButtons() {
  toggleBtn = createButton('Toggle rotation');
  toggleBtn.position(19, 19);
  toggleBtn.mousePressed(e => globe.toggleRotation());

  saveCoorsBtn = createButton('Save coors');
  saveCoorsBtn.mousePressed(e => saveCoors());

  return {toggleBtn,saveCoorsBtn}
}
function selectNextTag() {
  console.log("Inside slect next tag function")
  globe.selectNextTag();
}

function stopAtHome(){
  globe.stopAtHome();
}

function selectPrevTag() {
  debugger;
  globe.selectPrevTag();
}

function toggleRotation() {
  globe.toggleRotation();
}
function startGlobe(){
  globe.start();
}
function isGlobeMoving(){
  return globe.rotationVel.filter(v=>v==0).length !== 0;
}