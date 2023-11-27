import React from "react";
import { Button, Image } from "react-bootstrap";
import NavigationLeft from "./NavigationLeft";
import NavigationRight from "./NavigationRight";
import CustomButton from "./CustomButton";
import ProfileCard from "./ProfileCard";

function PopularCategories() {
  return (
    <div className="bg-black text-white px-10">
      <div className="">
        <h4 className="-5 d-flex justify-content-start">
          Popular Categories to explore
        </h4>
        <div className="d-flex pt-3">
        <CustomButton title="Popular"/>
        <CustomButton title="Trending"/>
        <CustomButton title="Movie Star"/>
        <CustomButton title="TV Star"/>
        <CustomButton title="Model"/>
        <CustomButton title="Charity"/>
        <CustomButton title="Sport man"/>
        <CustomButton title="Singer"/>
        <CustomButton title="Prime Time"/>
        <CustomButton title="More"/>
        </div>
      </div>
      <div className="d-flex justify-content-between pt-4">
        <div className=" d-flex pt-5">
          <h1 className="-5 d-flex justify-content-start ">
          Next Day DeliverySee All
          </h1>
          <Button className="mt-2 ms-2 px-2 bg-transparent custom-buton-radius border-pink ">
            See All
          </Button>
        </div>
        <div className="d-flex me-5 justify-content-around">
          <NavigationLeft />
          <NavigationRight />
        </div>
      </div>
        <div className="d-flex justify-content-around">
          <ProfileCard/>
          <ProfileCard/>
          <ProfileCard/>
          <ProfileCard/>
          <ProfileCard/>
        </div>
    </div>
  );
}

export default PopularCategories;
