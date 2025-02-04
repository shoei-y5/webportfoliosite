const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open'); // メニューを開閉する
  menuToggle.classList.toggle('open'); // ハンバーガーアイコンを変更
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('open'); // メニューを閉じる
  menuToggle.classList.remove('open'); // ハンバーガーアイコンを元に戻す
});
