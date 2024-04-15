  // 개별박스 li가로크기 계산
  let listW = collSlide.querySelectorAll("li")[0].offsetWidth;

  // 2. 버튼별 분기하기
  // 2-1.오른쪽 버튼일 경우 ///
  if (isRbtn) {
    // (1) 먼저 왼쪽으로 이동하기
    collSlide.style.left = `calc(${-listW}px - 2rem)`;
    collSlide.style.transition = ".6s ease-in-out";
    // (2) 이동하는 시간  0.6초간 기다림
    setTimeout(() => {
      // (2-1) 맨앞 li 맨뒤로이동
      collSlide.appendChild(collSlide.querySelectorAll("li")[0]);
      // 슬라이드 left 값이 -100% 이므로
      // (2-2) left값을 0으로 변경
      collSlide.style.left = "0";
      // (2-3) left 트랜지션 없애기
      collSlide.style.transition = "none";
    }, 600);


      // 개별박스 li가로크기 계산
      let listW = collSlide.querySelectorAll
      ("li")[0].offsetWidth;
      
      // gap값 과 이미지 자동계산
      if (isRbtn) {
        collSlide.style.left = `calc(${-listW}px - 2rem)`;
        collSlide.style.transition = ".6s ease-in-out";
       
    

        setTimeout(() => {
          collSlide.appendChild(collSlide.querySelectorAll("li")[0]);
         
          collSlide.style.left = "0";
         
          collSlide.style.transition = "none";
        }, 600);}