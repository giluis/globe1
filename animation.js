  var counter=-1;
  var Name = ["Andres Davalos", "Luis Gil", "Vu Le Trong","Diego Pinto","Francesco Argentati","Laura Kruchen","Kevin Leriche"];
  var study = ["Elektronic-ict", "IT", "IT","Sport science","Electronic Engineering","Medical Information Management","Sport science"];
  var background = ["andres", "luis", "Vu","Diego Pinto","Francesco Argentati","Laura Kruchen","Kevin Leriche"];
  var country = ["Belgium", "Portugal", "Germany","France","Italy","Germany","France"];
  var ects = ["6", "18", "10","10","6","9","10"];
  var contacts = ["andres_el_davalos@hotmail.com", "1170727@isep.it", "trongvul@hochsttrier.de","diego.pinto@etu.univ-orleans.fr","francescoargentati@libero.it","laura.kruchen@web.de","keleriche@gmail.com"];
  var pic= ["andres.jpg","luis.jpg","vu.jpg","diego.jpg","francesco.jpg","laura.jpg","kevin.jpg"];
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
    toggleRotation();
    selectNextTag();
    updateinfo(counter,div,div2);
  });
  btn3.addEventListener("click", function(){
    if(counter <=0){
      counter=7;
    }
    counter--;
    console.log(counter)
    selectPrevTag();
    updateinfo(counter,div,div2)
  });
  btn2.addEventListener("click", function(){
    div.style.display="none";
    div2.style.display = "block";
    toggleRotation();
    div.classList.add("fadeInRight");
  });

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