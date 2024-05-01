const container = document.getElementById('container');
const section = document.querySelectorAll('.section');
let currentIndex = 0;
let scrollable = false;

window.addEventListener('wheel', function (e) {
  if (scrollable) return;
  scrollable = true;

  setTimeout(() => {
    scrollable = false;
  }, 500);

  // 내리면 양수, 올리면 음수
  const deltaY = e.deltaY || e.wheelDeltaY;

  // 마우스 휠 내림
  if (deltaY > 0 && scrollable) {
    currentIndex += 1;
    if (currentIndex >= section.length) {
      currentIndex = section.length - 1;
      scrollable = true;
      return;
    }
    container.style.transform = `translateY(-${
      currentIndex * window.innerHeight
    }px)`;
  }
  // 마우스 휠 올림
  else if (deltaY < 0 && scrollable) {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = 0;
      scrollable = true;
      return;
    }
    container.style.transform = `translateY(-${
      currentIndex * window.innerHeight
    }px)`;
  }
});

