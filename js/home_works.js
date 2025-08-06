// gmail
const gmailInput = document.getElementById("gmail_input").value.trim();
const resultSpan = document.getElementById("gmail_result");

document.getElementById("gmail_button").addEventListener("click", function () {

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(gmailInput)) {
        resultSpan.textContent = "good Gmail!";
        resultSpan.style.color = "lime";
    } else {
        resultSpan.textContent = "bad bro. Используйте @gmail.com";
        resultSpan.style.color = "red";
    }
});

//block
const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let positionX = 0;
let positionY = 0;

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight;

const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++;
    } else if (positionX === offsetWidth && positionY < offsetHeight) {
        positionY++;
    } else if (positionY === offsetHeight && positionX > 0) {
        positionX--;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
    } else {
        return;
    }

    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    requestAnimationFrame(moveBlock);
};

moveBlock();


// stopwatch
const secondsNum = document. querySelector("#seconds")
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let seconds = 0;
let interval = null;

startBtn.addEventListener("click", function (event) {
    if (interval === null) {
        interval = setInterval(function () {
            seconds ++;
            secondsNum.textContent = seconds;
        },1000);
    }
})

stopBtn.addEventListener("click", function (event) {
    clearInterval(interval);
    interval = null;
})

resetBtn.addEventListener("click", function (event) {
    clearInterval(interval);
    interval = null;
    setTimeout(() => {
        seconds = 0;
        secondsNum.textContent = seconds;
    },300)
})