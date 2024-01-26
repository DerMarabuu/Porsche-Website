/****************

const TestButton = document.querySelector(".js-testbutton");
const testOutput = document.querySelector(".js-output");
let Counter = 0;
console.log(TestButton);

function UpdateCounter(){
    Counter = Counter + 1;
    testOutput.innerHTML = Counter
}

function ButtonDrehen(){
    const Drehung = Math.random()*100;
    TestButton.style = `transform: rotate(${Drehung}deg)`;
}

TestButton.addEventListener("click", ButtonDrehen);


****************/



const drehkreis = document.querySelector(".js-drehkreis");
const ArrowForward = document.querySelector(".js-pfeilforward")

let DrehKreisDegrees = 0;
console.log(DrehKreisDegrees);

function Drehen(){
    DrehKreisDegrees = DrehKreisDegrees + 60;
    drehkreis.style = `transform: translate(4.4791666vw, 22.5vh) rotate(${DrehKreisDegrees}deg)`;
}

ArrowForward.addEventListener("click", Drehen)