console.log("Tejas' Codes :)");

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', () => {
        navigator.vibrate(50);
    });
});