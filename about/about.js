const btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('#sub-nav');

btn.addEventListener('click',() => {
    console.log('ボタンが押されました');
    nav.classList.toggle('active');
})

let currentSlide = 0;
const totalSlides = 2;

function slideNext() {
    const slider = document.getElementById('slider');
    const slideWidth = slider.children[0].offsetWidth;
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        slider.style.transform = `translateX(-${slideWidth}px)`;
        updateButtonStates();
    }
}

function slidePrev() {
    const slider = document.getElementById('slider');
    const slideWidth = slider.children[0].offsetWidth;
    if (currentSlide > 0) {
        currentSlide--;
        slider.style.transform = 'translateX(0)';
        updateButtonStates();
    }
}

function updateButtonStates() {
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    if (currentSlide === totalSlides - 1) {
        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
    } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
    }

    if (currentSlide === 0) {
        prevBtn.classList.add('disabled');
        prevBtn.disabled = true;
    } else {
        prevBtn.classList.remove('disabled');
        prevBtn.disabled = false;
    }
}

window.addEventListener('load', updateButtonStates);
window.addEventListener('resize', () => {
    const slider = document.getElementById('slider');
    const slideWidth = slider.children[0].offsetWidth;
    slider.style.transform = currentSlide === 0 ? 'translateX(0)' : `translateX(-${slideWidth}px)`;
});