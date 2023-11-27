import React, { useState } from "react";
import "../Assets/css/Hero.css";
import { Col, Image, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Text from "../Assets/Images/Text.png";
import "react-slideshow-image/dist/styles.css";
import Pic1 from "../Assets/Images/1.png";
import Pic2 from "../Assets/Images/2.png";
import Pic3 from "../Assets/Images/3.png";
import Pic4 from "../Assets/Images/4.png";

function HeroSection() {
  const slides = [
    {
      img: Pic1,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      img: Pic2,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      img: Pic3,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      img: Pic4,
      title: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <Row className="px-15 py-5 h-full d-flex container-fluid relative align-items-center">
      <Col className="">
        <span className="d-flex justify-content-start"><Image src={Text} /></span>
        <div className="text-white fw-bold fs-1 text-start">
          We make your favourite celebriiestalk to yoy, personally.
        </div>
        <div className="mt-5">
          <div className=" row height d-flex justify-content-center align-items-center ">
            <div className="w-100 col-md-8">
              <div className="search">
                <i className="fa fa-search" />
                <input
                  type=""
                  className="text-light form-control text-light"
                  placeholder="Search Your Favourite creator"
                />
                <button className="btn btn-transparent text-light">Search</button>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col className="slide-container">
        <Carousel
          controls={false}
          indicators={false}
          interval={3000}
          data-aos="fade-left"
        >
          {slides.map((slide, index) => {
            return (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={slide.img} alt="Slide" />
                <div class="overlay"></div>
                <Carousel.Caption className="slide-caption">
                  <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-description">{slide.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Col>
    </Row>
  );
}

export default HeroSection;
