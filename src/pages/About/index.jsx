import React from "react";
import { Address, OurStory, Sites } from "../../components/about";
import { Service } from "../../components/home";

const About = () => {
  return (
    <div>
      <OurStory />
      <Sites />
      <Address />
      <Service />
    </div>
  );
};

export default About;
