const btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('#sub-nav');

btn.addEventListener('click',() => {
    console.log('ボタンが押されました');
    nav.classList.toggle('active');
})