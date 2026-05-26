const btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('#sub-nav');

btn.addEventListener('click',() => {
    console.log('ボタンが押されました');
    nav.classList.toggle('active');
})

var animation = lottie.loadAnimation({
  container: document.getElementById('lottie-anim'), // 表示させる要素のID
  renderer: 'svg',        // 描画形式（svgが最も綺麗です）
  loop: false,            // 1回だけ再生なら false
  autoplay: true,         // サイトを開いた瞬間に再生開始
  path: 'json/me_illust_movie_1300x1100.json'       // JSONファイルへのパス（同じ階層ならファイル名だけでOK）
});