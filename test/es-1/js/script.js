// stampo i div nelle 3 colonne

const colOne = document.getElementById("one");
const colTwo = document.getElementById("two");
const colThree = document.getElementById("three");

function makeDivOne() {
    for (let i=0; i < 5; i++) {
        let div = document.createElement("div");
        colOne.appendChild(div).className = "grid-item background to-split";
    }
}

function makeDivTwo() {
    for (let i=0; i < 4; i++) {
        let div = document.createElement("div");
        colTwo.appendChild(div).className = "grid-item background to-split";
    }
}

function makeDivThree() {
    for (let i=0; i < 25; i++) {
        let div = document.createElement("div")
        colThree.appendChild(div).className = "grid-item background to-split";
    }
}

makeDivOne();
makeDivTwo();
makeDivThree();








// creo un colore rgb random per ogni elemento
const background = document.getElementsByClassName('background');
const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};
 
const getRandomColor = () => {
  const r = getRandomNumber(360);
  const g = getRandomNumber(100);
  const b = getRandomNumber(100);
 
  return `hsl(${r}deg, ${g}%, ${b}%)`;
};

const setBackgroundColor = () => {
for (let i = 0; i < background.length; i++) {
    const randomColor = getRandomColor();
    background[i].style.backgroundColor = randomColor;
  }
};
 



// BONUS

var el = document.getElementsByClassName("to-split");
for(var i=0;i < el.length;i++) {
    let il = el[i];
    il.addEventListener("click", function() {
    for(let i=0; i<4; i++) {
        let spl = document.createElement('div');
        il.appendChild(spl);
        il.classList.remove("to-split");
        spl.classList.add("background", "splitted", "to-split");
        const randomColor = getRandomColor();
        spl.style.backgroundColor = randomColor;
    }
        
    });
}




// let els = document.getElementsByClassName("splitted");
// const setBackìColorSplitted = () => {
//     for (let i = 0; i < els.length; i++) {
//         const randomColor = getRandomColor();
//         els[i].style.backgroundColor = randomColor;
//       }
//     };
setBackgroundColor();



