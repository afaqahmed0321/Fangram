import React from "react";
import Pic1 from "../Assets/Images/1.png";
import Pic2 from "../Assets/Images/2.png";
import Pic3 from "../Assets/Images/3.png";
import Pic4 from "../Assets/Images/4.png";
import { Button, Col, Image, Row } from "react-bootstrap";

import "../Assets/css/card.css";

const Card = (props) => {
  return (
    <section className="pt-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Row className="row">
                    <Col
                      xs="12"
                      sm="12"
                      md="12"
                      lg="12"
                      xl=" 12"
                      className=" mb-3"
                    >
                      <div className="card bg-pink text-light">
                        <Image
                          className="img-fluid"
                          alt="100%x280"
                          src={props.pic}
                        />
                        <div className="card-body custom-radius">
                          <h4 className="card-title d-flex justify-content-start">
                            {props.title}
                          </h4>
                          <Row>
                            <Col xs="7" sm="7" md="7" lg="7" xl="7" className="p-1">
                              <p className="d-flex justify-content-start ">
                                Starting From ₹9999
                              </p>
                            </Col>
                            <Col className="p-0">
                              <Button className="btn btn-outline-none bg-light custom-buton-radius w-100 text-pink border-pink">
                                Book Now
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
