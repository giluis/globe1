let detailX;
let img;
const detail = 40;
const radius = 167;
let button;
let autoRotate = false;
let rotateCount = 0;
let stopTime = 0;
let face;
let bg;
let globe;
let latoffset = 6.0012300000000005;
let lonoffset = 3.63922;

let imagesSrc = [
    "luis.jpg",
    "diego.jpg",
    "kevin.jpg",
    "andres.jpg",
    "laura.jpg",
    "vu.jpg",
    "francesco.jpg",
]

let images = [];
let absolutePoints = [
  [5.7212300000000065, 3.489220000000003],//Luis
  [5.891230000000003, 3.579220000000001],//Diego
  [5.921230000000002, 3.6092200000000005],//Leriche
  [5.951230000000002, 3.6492199999999997],//Andres
  [6.0012300000000005, 3.63922],//Laura
  [5.991230000000001, 3.6692199999999993],//Vu
  [6.01123, 3.489220000000003] // Francesco,
];

let absoluteHome = [0.43, 3.5, 0];
let home = [0.43,3.5,0];
let points = absolutePoints.map(p=>p);
// let newPoint = [latoffset,lonoffset];
// points.push(newPoint);

function preload(){
  images = imagesSrc.map(i=>loadImage(i));
}

function setup() {
  
  let cnv = createCanvas(900, 500, WEBGL);
  cnv.style("position:absolute;bottom:0;left:0");
  cnv.parent("globe");
  img = loadImage('map4.png');
  face = loadImage('face1.png')
  globe = new Globe(radius, [12, 82, 190], home, detail);
 
  // saveCoorsBtn = createButton('Save coors');
  // saveCoorsBtn.mousePressed(e => saveCoors());
  points.forEach((p,i)=>globe.addTag(20,30,p,images[i]));
  images = imagesSrc.map(i=>loadImage(i));
}

function keyPressed() {
  if(keyCode === 37){
    latoffset  += -0.01
  } else if(keyCode === 38){
    lonoffset  += 0.01;
  } else if(keyCode === 39) {
    latoffset  += 0.01;
  } else if(keyCode === 40){
    lonoffset  += -0.01;
  }
}


function draw() {
  clear();
  ambientLight(200);
  globe.update();
  globe.render();
  // globe.tags = [];
  // points.forEach(p => {
  //   globe.addTag(20, 30, p);
  // })
  // newPoint[0] = latoffset;
  // newPoint[1] =lonoffset;
};



function saveCoors() {
  points.push([])
}

function createButtons() {
  toggleBtn = createButton('Toggle rotation');
  toggleBtn.position(19, 19);
  toggleBtn.mousePressed(e => globe.toggleRotation());

  return { toggleBtn, saveCoorsBtn }
}
function selectNextTag() {
  console.log("Inside slect next tag function")
  globe.selectNextTag();
}

function stopAtHome() {
  globe.stopAtHome();
}

function selectPrevTag() {
  globe.selectPrevTag();
}

function toggleRotation() {
  globe.toggleRotation();
}
function startGlobe() {
  globe.start();
}
function isGlobeMoving() {
  return globe.rotationVel.filter(v => v == 0).length !== 0;
}