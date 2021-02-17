let detailX;
function setup() {
  createCanvas(100,100,WEBGL);
  detailX = createSlider(3,24,3);
  detailX.position(10,height+5);
  detailX.style('width','80px');
}

function draw() {
  background(25,123,255);  
  rotateY(millis()/100);
  sphere(40,detailX.value(),16);
}