import React from "react";
import { Button, Image } from "react-bootstrap";

function CustomButton(props) {
  return (
    <div>
      <Button className="bg-grey custom-buton-radius Border-none text-light mx-2">
            {props.title}
      </Button>
    </div>
  );
}

export default CustomButton;
