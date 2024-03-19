// 메인 JS - main.js

// 메인 동영상 파트 클릭시 이미지 보이기 숨기기

const banArea = document.querySelector('#ban-area');
const banImg = document.querySelector('.eve-ban');
const banMv = document.querySelector('.eve-video');

banArea.addEventListener('click', () => {
  banImg.classList.toggle('on');
});