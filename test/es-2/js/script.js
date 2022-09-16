const arrayColors = [1,2,3,4,5,6,1,2,3,4,5,6];
let elementFind = document.getElementsByClassName("find");
let modal = document.getElementById("modal-w");
let modalL = document.getElementById("modal-l");


// Creo una funzione per mischiare le carte
function shuffle(a) {
    let currentIndex = a.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue
    }
    return a;
}

// creo una funzione per un countdown
function countdown() {

  // durata timer
  let seconds = 60;
  function tick() {
    let counter = document.getElementById("counter");
    seconds--;
    counter.innerHTML = (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      if (elementFind.length == 12){
      } else {
        document.getElementById("counter").innerHTML = 0;
        modalL.classList.add("active");
      }    
    }
  }
  tick();
 
}

// funzione per far partire il gioco
function startGame(){

    // mischiole carte
    let arrayShuffle = shuffle(arrayColors);

    // faccio partire il countdown
    countdown();

    // creo l'array per i numeri selezionati
    arrayComparison = [];

    // stampo gli elementi
    let lista = document.getElementById('griglia');
    while (lista.hasChildNodes()) {  
      lista.removeChild(lista.firstChild);
    }
    let colors = document.getElementsByClassName("color");
  
    for(let i = 0; i < 12; i++){    
      let box = document.createElement('div');
      let element = document.createElement('div');
      element.className = "color disabled";  // AGGIUNGO CLASSE DISABLED CHE ANDRò A TOGLIERE CON L'OPACITY
      document.getElementById('griglia')
         .appendChild(box).appendChild(element);
      element.innerHTML = arrayShuffle[i];
    }
    
    for (let i = 0; i < colors.length; i++){
      colors[i].addEventListener("click", displaycolor);
      colors[i].addEventListener("click", openModal);
    }

    //   LASCIARE 5 SECONDI E SETTARE OPACITY A 0 E RIMUOVERE LA CLASSE DISABLED
    const box = document.getElementsByClassName("color");  

    setTimeout(function setOpacity(){
        for (let i=0; i < box.length; i++) {
            box[i].style.opacity = "0";
            box[i].classList.remove("disabled");
        }
      }
    ,4000)    
  }

  // Aggiungo una classe find agli elementi abbinati
  function displaycolor(){

    let color = document.getElementsByClassName("color");
    let colors = [...color];
    this.classList.toggle("show");
    arrayComparison.push(this);

    // aggiunge opacity negli elementi dentro arrayComparison
    for(let i = 0; i < arrayComparison.length; i++){
        arrayComparison[i].style.opacity = "100";
      }
    
    
    // creo una funzione che controlla se i due elementi in arrayComparison sono uguali
    let number = arrayComparison.length;
    if(number === 2){
      if(arrayComparison[0].innerHTML == arrayComparison[1].innerHTML){
        arrayComparison.forEach(function(elemento){
            // se i due elementi sono uguali aggiungo classi find e disabled
            elemento.classList.add("find","disabled");
        });
        arrayComparison = [];               
      } else {
        colors.forEach(function(item){
          item.classList.add('disabled');
        });
        // Quando rimuovo la classe show setto opacity a 0
        setTimeout(function(){
          arrayComparison.forEach(function(elemento){
              elemento.classList.remove("show");
              elemento.style.opacity = "0";
          });
          // rimuovo la classe disabled agli elementi che non si accoppiano 
          colors.forEach(function(item){
            item.classList.remove('disabled');
            for(let i = 0; i < elementFind.length; i++){
                // aggiugo la classe disabled a ogni elemento dento elementFind
                elementFind[i].classList.add("disabled");
              }
          });
          // svuoto arrayComparison
          arrayComparison = [];
        },700); 
       }
    }
  }

  // funzione per aprire la modale quando tutti gli elementi sono stati abbinati
function openModal(){  
  if (elementFind.length == 12){
      modal.classList.add("active");
  }
}

// STAR ONLOAD
document.body.onload = startGame();

// GIOCA ANCORA
function playAgain(){
    modalL.classList.remove("active");
    startGame();
  }




  
  