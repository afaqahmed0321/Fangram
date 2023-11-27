import React from "react";
import CardSlider from "react-card-slider-component";
// import 'react-card-slider-component/lib/styles.css';
import Pic1 from "../Assets/Images/1.png";
import Pic2 from "../Assets/Images/2.png";
import Pic3 from "../Assets/Images/3.png";
import Pic4 from "../Assets/Images/4.png";
import Pic5 from "../Assets/Images/5.png";
import Pic6 from "../Assets/Images/6.png";
import Pic7 from "../Assets/Images/7.png";
import Pic8 from "../Assets/Images/8.png";
import { Col, Image, Row } from "react-bootstrap";
import Card from "./Card";

import "../Assets/css/featured.css";
import NavigationLeft from "./NavigationLeft";
import NavigationRight from "./NavigationRight";

const Featured = () => {
  const cards = [
    { id: 1, content: "Card 1", imageUrl: Pic1 },
    { id: 2, content: "Card 2", imageUrl: Pic2 },
    { id: 3, content: "Card 3", imageUrl: Pic3 },
    { id: 4, content: "Card 3", imageUrl: Pic4 },
  ];
  return (
    <div className="bg-black text-white">
      {/* <NavigationLeft /> */}
      <div className="p-4">
        <h1 className="pt-5">Featured Celebrity</h1>
        <span>
          Get personalised video messages from your favourite celebrity! What's
          more? The price you see is the price you pay!
        </span>
        <Row className="px-10">
          <Col>
            <Card pic={Pic5} title="Sunny Leone" />
            <Card pic={Pic5} title="Sunny Leone" />
          </Col>
          <Col>
            <Card pic={Pic6} title="Shankar Mahadevan" />
            <Card pic={Pic6} title="Shankar Mahadevan" />
          </Col>
          <Col>
            <Card pic={Pic7} title="Salim Marchant" />
            <Card pic={Pic7} title="Salim Marchant" />
          </Col>
          <Col>
            <Card pic={Pic8} title="Priya Mani Raj" />
            <Card pic={Pic8} title="Priya Mani Raj" />
          </Col>
        </Row>
      </div>
      {/* <NavigationRight /> */}
    </div>
  );
};

export default Featured;
