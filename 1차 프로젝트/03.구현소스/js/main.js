// 메인 JS - main.js

// 메인 동영상 파트 클릭시 이미지 보이기 숨기기

const banArea = document.querySelector('#ban-area');
const banImg = document.querySelector('.baner');
const banMv = document.querySelector('.ban-video');

banArea.addEventListener('click', () => {
  banImg.classList.toggle('on');
});

const partnerMv = document.querySelector('.partner-mv');
const partnerImg = document.querySelector('.partner-mv');
const partnerBtn = document.querySelector('.ptmv-btn');

partnerMv.addEventListener('click', () => {
  partnerImg.classList.toggle('on');
  partnerBtn.classList.toggle('on');
}
);
