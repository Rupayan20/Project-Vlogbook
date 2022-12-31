import React from "react";
import Img from "../assets/tokyo.jpg";
import img2 from "../assets/london.jpg";
import "./Container.css";
const Container = () => {
  return (
    <div class="clearfix">
      <div class="img-container">
        <img src={Img} alt="Italy" style={{ width: "100%", height: "25" }} />
        <div class="text-block">
          <h4>London</h4>
          <p>34 Second Street King Street Kingston United Kingdom</p>
        </div>
      </div>
      <div class="img-container">
        <img src={img2} alt="" style={{ width: "100%", height: "7=25" }} />
        <div class="text-block2">
          <h4>California</h4>
          <p>78 Collective Street Manhattan Kingston United State</p>
        </div>
      </div>
    </div>
  );
};

export default Container;
