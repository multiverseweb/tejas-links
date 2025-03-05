console.log("Tejas' Codes :)");

// Function to copy text to clipboard and update button text
function copy() {
    navigator.clipboard.writeText("tejas-links.netlify.app");
    document.getElementById("copy").innerHTML = "Link Copied!✓";
}

// Function to move elements to random positions on the screen
function moveElementRandomly(element) {
    const screenWidth = window.innerWidth - element.clientWidth;
    const screenHeight = window.innerHeight - element.clientHeight;

    const randomX = Math.random() * screenWidth;
    const randomY = Math.random() * screenHeight;

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}

// Function to start the random movement of elements
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

// Add event listener to the "Softwares" link when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the link element with the "Softwares" text
    const softwaresLink = document.querySelector('.links .link:nth-child(4) a');
    if (softwaresLink) {
        // Attach the click event listener
        softwaresLink.addEventListener('click', handleSoftwaresClick);
    }
});

window.onload = startRandomMovement;
