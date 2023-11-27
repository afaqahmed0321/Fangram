import React from "react";
import { Button, Image } from "react-bootstrap";
import Pic1 from "../Assets/Images/3.png";

function ProfileCard(props) {
  return (
    <div>
      <div className="card py-3 bg-grey text-light mx-2 w-75" style={{ width: "18rem" }}>
        <Image src={Pic1} className="card-img-top profile-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button className="bg-light text-pink custom-buton-radius">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
