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
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
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
