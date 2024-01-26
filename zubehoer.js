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
