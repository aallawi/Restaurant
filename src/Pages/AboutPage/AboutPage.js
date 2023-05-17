import React from "react";

import Basic from "../../components/Basic/Basic";
import SubHeading from "../../components/SubHeading/SubHeading";

import "./AboutPage.css";

import Intro from "../../container/Intro/Intro";
import Founder from "./../../container/Founder/Founder";
import Footer from "./../../container/Footer/Footer";
import Laurels from "./../../container/Laurels/Laurels";
import History from "../../container/History/History";

const AboutPage = () => (
  <div className="aboutPage bg_black">
    <div className="aboutPage bg_black">
      <Basic pageName={"About"} url={"main"} />

      <div className="SubHeading">
        <SubHeading parag={"Our History"} title={"Serving Customers For Over A Decade"} posion={"center"} />
      </div>

      <History />

      <div className="SubHeading">
        <SubHeading parag={"About Us"} title={"Happy Hours With Us"} posion={"center"} />
        <div className="about_text">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. </p>
        </div>
      </div>

      <Intro />
      <Founder />
      <Laurels />
      <Footer />
    </div>
  </div>
);

export default AboutPage;
