import React, { useState} from "react";
import { CarouselData } from "../assets/CarouselData.js";
import Slider from "react-slick";
import "../css/TalentCarousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TalentCarousel() {

  const [selectedItem, setSelectedItem] = useState(CarouselData[0]);

  const settings = {
    className: "carousel",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    afterChange: (index) => {
      setSelectedItem(CarouselData[index]);
    },
  };

  return (
    <>
      <Slider {...settings}>
        {CarouselData.map((d) => (
          <div className="carousel-img" key={d.name}>
            <img src={d.img} alt={d.name}/>
          </div>
        ))}
      </Slider>
      <div className="selected-talent">
        <div className="talent-description">
          <p className="talent-name">{selectedItem.name}</p>
          <p>{selectedItem.about}</p>
        </div>
      </div>
    </>
  );
}
