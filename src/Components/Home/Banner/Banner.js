import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/banner/banner-1.png";
import banner2 from "../../../Images/banner/banner-2.png";
import banner3 from "../../../Images/banner/banner-3.png";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
