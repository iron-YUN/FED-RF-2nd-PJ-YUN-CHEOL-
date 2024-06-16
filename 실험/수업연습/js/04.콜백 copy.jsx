

return (
  <div className="banner">
    <div>
      {selData.map((v, i) => (
        <div key={i}>
          {v.sale_imgsrc && <img src={v.sale_imgsrc} alt={v.sale_txt} />}
          {v.newarr_imgsrc && <img src={v.newarr_imgsrc} alt={v.newarr_txt} />}
        </div>
      ))}
    </div>
    <div>
      {selData.map((v, i) => (
        <div key={i}>
          {/* {v.sale_imgsrc && <img src={v.sale_imgsrc} alt={v.sale_txt } />}
            {v.newarr_imgsrc && <img src={v.newarr_imgsrc} alt={v.newarr_txt } />} */}
          {v.first_imgsrc && <img src={v.first_imgsrc} alt={v.first_txt} />}
          {v.second_imgsrc && <img src={v.second_imgsrc} alt={v.second_txt} />}
          {v.third_imgsrc && <img src={v.third_imgsrc} alt={v.third_txt} />}
        </div>
      ))}
    </div>
  </div>
);
//gnb클릭시 들어가는 배너 데이터
export const banner_data = {
  womanData: [
    { 
      sale_imgsrc: "images/banner_img/woman_sale.jpg",
      sale_txt: "",
    },
    {
      newarr_imgsrc: "images/banner_img/woman_new.jpg",
      newarr_txt: "",
    },
    {
      first_imgsrc: "images/banner_img/woman_first.jpg",
      first_txt: "",
    },
    {
      second_imgsrc: "images/banner_img/woman_second.jpg",
      second_txt: "",
    },
    {
      third_imgsrc: "images/banner_img/woman_third.jpg",
      third_txt: "",
    },
  ],
  manData: [
    {
      sale_imgsrc: "images/banner_img/man_sale.jpg",
      sale_txt: "",
    },
    {
      newarr_imgsrc: "images/banner_img/man_new.jpg",
      newarr_txt: "",
    },
    {
      first_imgsrc: "images/banner_img/man_first.jpg",
      first_txt: "",
    },
    {
      second_imgsrc: "images/banner_img/man_second.jpg",
      second_txt: "",
    },
    {
      third_imgsrc: "images/banner_img/man_third.jpg",
      third_txt: "",
    },
  ],
  kidsData: [
    {
      sale_imgsrc: "images/banner_img/kids_sale.jpg",
      sale_txt: "",
    },
    {
      newarr_imgsrc: "images/banner_img/kids_new.jpg",
      newarr_txt: "",
    },
    {
      first_imgsrc: "images/banner_img/kids_first.jpg",
      first_txt: "",
    },
    {
      second_imgsrc: "images/banner_img/kids_second.jpg",
      second_txt: "",
    },
    {
      third_imgsrc: "images/banner_img/kids_third.jpg",
      third_txt: "",
    },
  ],
  homeData: [
    {
      sale_imgsrc: "images/banner_img/home_sale.jpg",
      sale_txt: "(160 GXM²) 워시드 린넨 침구",
    },
    {
      newarr_imgsrc: "images/banner_img/home_new.jpg",
      newarr_txt: "STOOL 03",
    },
    {
      first_imgsrc: "images/banner_img/home_first.jpg",
      first_txt: "페이크 시어링 반려동물 침대",
    },
    {
      second_imgsrc: "images/banner_img/home_second.jpg",
      second_txt: "주방 휴지통",
    },
    {
      third_imgsrc: "images/banner_img/home_third.jpg",
      third_txt: "언이븐 아카시아 커피 테이블",
    },
  ],
 
};
