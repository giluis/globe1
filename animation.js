  var counter=-1;
  var Name = ["Andres Davalos", "Luis Gil", "Trong Vu Le","Diego Pinto","Francesco Argentati","Laura Kruchen","Kevin Leriche"];
  var study = ["Elektronic-ict", "IT", "IT","Sport science","Electronic Engineering","Medical Information Management","Sport science"];
  var country = ["Belgium", "Portugal", "Germany","France","Italy","Germany","France"];
  var ects = ["6", "18", "10","10","6","9","10"];
  var contacts = ["andres_el_davalos@hotmail.com", "1170727@isep.it", "trongvul@hochschule-trier.de","diego.pinto@etu.univ-orleans.fr","francescoargentati@libero.it","laura.kruchen@web.de","keleriche@gmail.com"];
  var pic= ["andres.jpg","luis.jpg","vu.jpg","diego.jpg","francesco.jpg","laura.jpg","kevin.jpg"];
  var cv = ["andres.pdf","luis.pdf","vu.pdf","diego.pdf","francesco.pdf","laura.pdf","kevin.pdf"];
  var me = [" Hey I’m an Belgian student who was born in Ecuador.I’ve been since my 2years in Belgium. I’m currently studying Elektronic-ict. My passion are sport; software and hardware. I like to create myown projects and hardware and play with it. ",
            " I am creative and work well in a team. I take great pride in a job well done and like to do everything as close to perfect as I possibly can",
            " Hey! i'm an student from Germany who study computer science at Trier University. My programming skills are: Java, Python, Javascript, MATHLAB, Racket HTML5, CSS3, Node.js, Express, PHP, Bootstrap and Machine Learning /Big Data",
            " I'm 22 years-old and I’m from France near Orleans. I’ve always lived here since my childhood. I practice basket-ball since I was 5 years-old, so I can tell it’s my passion. I’m studying at the University of Orleans in Sport and Science. I’m specialized inathletes reahbilitation after one or many injuries. I am therefore very happy to participate to this project with everyone of us",
            " I'm a electronic engineer (master's degree) and I'm a student of a university masters called ' Innovation, development and management of energy networks based on renewable energies'.",
            " I'm 20 years old German student from Dusseldorf, I studie Medical information Management at the Fliedner. I got good knowledge of MS-Office, basics java programming,basics SAS programming",
            " Curious and eager to know,i want to understand how our body works,it’s for me a daily quest that i try to analyse through different approaches (physiology,anatomy,posturology). Passionate about my work, i like to pass on my knowledge and this allow everyone to obtain a part of truth about this complex machine that is the human body."];
  var hobbies = ["Football and Fitness",
                 "Music (trombone, piano, guitar),Meditation, Programming, Philosophy",
                 "Football, Jogging, Gymnastics, Walking, Travelling, Photography, Meditation, Mindfulness, Reading",
                 "Sport and Basket",
                 "Music, Football and traveling",
                 "Partying, travelling, horse riding",
                 "Sport, Music, Scientifical Reading, Graphism design"];

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
    document.getElementById("me").innerHTML = me[count];
    document.getElementById("hobbies").innerHTML = hobbies[count];
    document.getElementById("cv").href = cv[count];

    
  }