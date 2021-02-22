var counter = -1;
var Name = [
  "Luis Gil",
  "Diego Pinto",
  "Kevin Leriche",
  "Andres Davalos",
  "Laura Kruchen",
  "Vu Le Trong",
  "Francesco Argentati",
];
var study = [
  "IT",
  "Sport science",
  "Sport science",
  "Elektronic-ict",
  "Medical Information Management",
  "IT",
  "Electronic Engineering",
];
var country = [
  "Portugal",
  "France",
  "France",
  "Belgium",
  "Germany",
  "Germany",
  "Italy",
];
var ects = [
  "18",
  "10",
  "10",
  "6",
  "9",
  "10",
  "6",
];
var contacts = [
  "1170727@isep.it",
  "diego.pinto@etu.univ-orleans.fr",
  "keleriche@gmail.com",
  "andres_el_davalos@hotmail.com",
  "laura.kruchen@web.de",
  "trongvul@hochsttrier.de",
  "francescoargentati@libero.it",
]
  ;
var pic = [
  "luis.jpg",
  "diego.jpg",
  "kevin.jpg",
  "andres.jpg",
  "laura.jpg",
  "vu.jpg",
  "francesco.jpg",
];
var cv = [
  "luis.pdf",
  "diego.pdf",
  "kevin.pdf",
  "andres.pdf",
  "laura.pdf",
  "vu.pdf",
  "francesco.pdf",
];
var div = document.querySelector(".item");
var div2 = document.querySelector(".info");
div.style.display = "none";
div2.style.display = "none";
var nextbtn = document.querySelector(".Next");
var infobtn = document.querySelector(".Info");
var prevbtn = document.querySelector(".Prev");
let teamInfoText = "About the Team";
let elementsInfoText = "About the People";
let currentInfoText = elementsInfoText;
function toggleInfoText() {
  if (currentInfoText === teamInfoText) {
    currentInfoText = elementsInfoText;
  } else if (currentInfoText === elementsInfoText) {
    currentInfoText = teamInfoText;
  }
}
nextbtn.addEventListener("click", function () {
  if (counter >= 6) {
    counter = -1;
  }
  if (isGlobeMoving()) {
    stopAtHome();
  }
  counter++;
  selectNextTag();
  updateinfo(counter, div, div2);
});
prevbtn.addEventListener("click", function () {
  if (counter <= 0) {
    counter = 7;
  }
  if (isGlobeMoving()) {
    stopAtHome();
  }
  counter--;
  selectPrevTag();
  updateinfo(counter, div, div2)
});
infobtn.addEventListener("click", function () {
  div.style.display = "none";
  div2.style.display = "block";
  // toggleInfoText();
  // let i = document.querySelector(".Info");
  // i.innerHTML = currentInfoText;
  startGlobe();
  div.classList.add("fadeInRight");
});

function updateinfo(count, d, d2) {
  d2.style.display = "none";
  d.style.display = "block";
  d.classList.add("fadeInRight");
  document.getElementById("img").src = pic[count];
  document.getElementById("Name").innerHTML = Name[count];
  document.getElementById("country").innerHTML = country[count];
  document.getElementById("study").innerHTML = study[count];
  document.getElementById("ects").innerHTML = ects[count];
  document.getElementById("contacts").innerHTML = contacts[count];
  document.getElementById("cv").href = cv[count];


}