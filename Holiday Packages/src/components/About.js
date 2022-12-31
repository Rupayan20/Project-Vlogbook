import React from "react";
import "./About.css";
import BgImage from "../assets/background2.jpg";

function About() {
  return (
    <div>
      <div class="main">
        <div className="about-content" style={{ width: "100%" }}>
          <img
            src={BgImage}
            alt=""
            style={{ width: "100%", height: "40%" }}
          ></img>

          <h5
            className="about-contenth2"
            style={{ marginLeft: "30%", marginTop: "10px", color: "#656565" }}
          >
            Travel is a continuous adventure, where there is no place for
            worries about everyday life.
          </h5>
          <h2 style={{ marginTop: "30" }}>Day 1</h2>
          <p className="co">
            While you are traveling without a guide or group, you fully control
            where and how to spend your time. It's so wonderful to do, what you
            want. Is not it? Travel gives you an excellent excuse to discover
            and explore new interests in yourself. Traveling is a great way to
            meet new people. If you are from the category of tourists, it is
            often very easy to find groups of people who follow the same route
            as you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
