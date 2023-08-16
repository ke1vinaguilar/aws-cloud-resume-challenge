// JavaScript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://7qknnked7azand75undetun3ay0pbcsh.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();