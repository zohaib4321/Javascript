// Generate random color
const randomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        console.log(color)
    }
    return color;
}

function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
}

let intervalId;
function startChangingColor() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
}

function stopChangingColor() {
    
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
