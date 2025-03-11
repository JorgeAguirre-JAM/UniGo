function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(0px)';
        items[i].style.opacity = stt > 2 ? 0 : 10;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(0px)';
        items[i].style.opacity = stt > 2 ? 0 : 100;
    }
}
loadShow();
next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

let startX = 0;
let endX = 0;

const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

slider.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        // Swipe left
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    } else if (startX + 50 < endX) {
        // Swipe right
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
});


window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { 
        navbar.style.backgroundColor = "#000"; /* Cambia a negro (o el color que quieras) */
    } else {
        navbar.style.backgroundColor = "transparent"; /* Regresa a transparente */
    }

    let enlace = this.document.querySelector("#enlace");
    if (window.scrollY > 50) {
        enlace.style.color = "#fff"; /* Cambia a blanco */
    } else{
        enlace.style.color = "#000"; /* Regresa a negro */
    }

    let enlace2 = this.document.querySelector("#enlace2");
    if (window.scrollY > 50) {
        enlace2.style.color = "#fff"; /* Cambia a blanco */
    } else{
        enlace2.style.color = "#000"; /* Regresa a negro */
    }


    let enlace3 = this.document.querySelector("#enlace3");
    if (window.scrollY > 50) {
        enlace3.style.color = "#fff"; /* Cambia a blanco */
    } else{
        enlace3.style.color = "#000"; /* Regresa a negro */
    }


    let enlace4 = this.document.querySelector("#enlace4");
    if (window.scrollY > 50) {
        enlace4.style.color = "#fff"; /* Cambia a blanco */
    } else{
        enlace4.style.color = "#000"; /* Regresa a negro */
    }

    let unigo = this.document.querySelector("#unigo");
    if (window.scrollY > 50) {
        unigo.style.color = "#fff"; /* Cambia a blanco */
    } else{
        unigo.style.color = "#000"; /* Regresa a negro */
    }
});