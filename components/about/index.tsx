import React from "react";
import Subtitle from "../subtitle";
import Title from "../title";
type PropsType = {
  homePageData: any;
};

const About = ({ homePageData }: PropsType) => {
  return (
    <div>
      <Subtitle text={homePageData.homeAboutSubtitle} />
      <Title text={homePageData.homeAboutTitle} color="#E70000" />{" "}
      {/* homeAboutButton */}
    </div>
  );
};

export default About;
