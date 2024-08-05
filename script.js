console.log("Tejas' Codes :)");

function copy() {
    navigator.clipboard.writeText("tejas-links.netlify.app");
    document.getElementById("copy").innerHTML = "Link Copied!✓";
}

function moveElementRandomly(element) {
    const screenWidth = window.innerWidth - element.clientWidth;
    const screenHeight = window.innerHeight - element.clientHeight;

    const randomX = Math.random() * screenWidth;
    const randomY = Math.random() * screenHeight;

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}

function startRandomMovement() {
    const element1 = document.querySelector('.element1');
    const element2 = document.getElementById('e2');
    moveElementRandomly(element1);
    moveElementRandomly(element2);

    setInterval(() => {
        moveElementRandomly(element1);
        moveElementRandomly(element2);
    }, 3000); // move every 3 seconds
}

window.onload = startRandomMovement;
