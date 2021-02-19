let detailX;
let img;
const detail = 24;
const radius = 100;
let button;
let autoRotate = false;
let rotateCount = 0;
let stopTime = 0;
let bg;
var counter=-1;
// const cameraCoordinates = [
//   0,0,(height/2)/tan(PI/6),
//   0,0,0,
//   0,1,0
// ];
var Name = ["Andres Davalos", "Luis Gil", "Vu Le Trong","Diego Pinto","Francesco Argentati","Laura Kruchen","Kevin Leriche"];
var study = ["Elektronic-ict", "IT", "IT","Sport science","Electronic Engineering","Medical Information Management","Sport science"];
var background = ["andres", "luis", "Vu","Diego Pinto","Francesco Argentati","Laura Kruchen","Kevin Leriche"];
var country = ["Belgium", "Portugal", "Germany","France","Italy","Germany","France"];
var ects = ["6", "18", "10","10","6","9","10"];
var contacts = ["andres_el_davalos@hotmail.com", "1170727@isep.it", "trongvul@hochsttrier.de","diego.pinto@etu.univ-orleans.fr","francescoargentati@libero.it","laura.kruchen@web.de","keleriche@gmail.com"];
var pic= ["andres.jpg","luis.jpg","vu.jpg","diego.jpg","francesco.jpg","laura.jpg","kevin.jpg"];

function setup() {
  var div = document.querySelector(".item");
  var div2 = document.querySelector(".info");
  div.style.display = "none";
  div2.style.display = "none";
  var btn = document.querySelector(".Me");
  var btn2 = document.querySelector(".Info");
  var btn3 = document.querySelector(".Prev");

  btn.addEventListener("click", function(){
    if(counter >=6){
      counter=-1;
    }
    counter++;
    console.log(counter)
    updateinfo(counter,div,div2);
  });
  btn3.addEventListener("click", function(){
    if(counter <=0){
      counter=7;
    }
    counter--;
    console.log(counter)
    updateinfo(counter,div,div2)
  });

  btn2.addEventListener("click", function(){
    div.style.display="none";
    div2.style.display = "block";
    div.classList.add("fadeInRight");
  });

  bg=loadImage('stars.jpg');
  createCanvas(800,800,WEBGL);
  detailX = createSlider(3,24,3);
  detailX.position(10,height+5);
  detailX.style('width','8px');
  img = loadImage('map4.png');
  button = createButton('click me');
  button.position(19, 109);
  button.mousePressed(e=>autoRotate = !autoRotate);

}

function updateinfo(count,d,d2){  
    d2.style.display="none";
    d.style.display = "block";
    d.classList.add("fadeInRight");
    document.getElementById("img").src = pic[count];
    document.getElementById("Name").innerHTML = Name[count];
    document.getElementById("study").innerHTML = study[count];
    document.getElementById("background").innerHTML = background[count];
    document.getElementById("country").innerHTML = country[count];
    document.getElementById("ects").innerHTML = ects[count];
    document.getElementById("contacts").innerHTML = contacts[count];


  
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