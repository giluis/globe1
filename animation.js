  var counter=-1;
  var Name = ["Andres Davalos", "Luis Gil", "Vu Le Trong","Diego Pinto","Francesco Argentati","Laura Kruchen","Kevin Leriche"];
  var study = ["Elektronic-ict", "IT", "IT","Sport science","Electronic Engineering","Medical Information Management","Sport science"];
  var country = ["Belgium", "Portugal", "Germany","France","Italy","Germany","France"];
  var ects = ["6", "18", "10","10","6","9","10"];
  var contacts = ["andres_el_davalos@hotmail.com", "1170727@isep.it", "trongvul@hochsttrier.de","diego.pinto@etu.univ-orleans.fr","francescoargentati@libero.it","laura.kruchen@web.de","keleriche@gmail.com"];
  var pic= ["andres.jpg","luis.jpg","vu.jpg","diego.jpg","francesco.jpg","laura.jpg","kevin.jpg"];
  var cv = ["andres.pdf","luis.pdf","vu.pdf","diego.pdf","francesco.pdf","laura.pdf","kevin.pdf"];
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
  function toggleInfoText(){
    if(currentInfoText === teamInfoText){
      currentInfoText = elementsInfoText;
    }else if(currentInfoText ===  elementsInfoText){
      currentInfoText = teamInfoText;
    }
  }
  nextbtn.addEventListener("click", function(){
    if(counter >=6){
      counter=-1;
    }
    if(isGlobeMoving()){
      stopAtHome();
    }
    counter++;
    selectNextTag();
    updateinfo(counter,div,div2);
  });
  prevbtn.addEventListener("click", function(){
    if(counter <=0){
      counter=7;
    }
    if(isGlobeMoving()){
      stopAtHome();
    }
    counter--;
    selectPrevTag();
    updateinfo(counter,div,div2)
  });
  infobtn.addEventListener("click", function(){
    div.style.display="none";
    div2.style.display = "block";
    // toggleInfoText();
    // let i = document.querySelector(".Info");
    // i.innerHTML = currentInfoText;
    startGlobe();
    div.classList.add("fadeInRight");
  });

  function updateinfo(count,d,d2){  
    d2.style.display="none";
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