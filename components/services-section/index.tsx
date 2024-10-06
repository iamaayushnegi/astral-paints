import React from "react";
import Subtitle from "../subtitle";
import Title from "../title";
type PropsType = {
  homePageData: any;
};

const Services = ({ homePageData }: PropsType) => {
  return (
    <div id="services" className="aayush-h-[calc(100vh-100px)]">
      <Subtitle text={homePageData.homeServicesSubtitle} />
      <Title text={homePageData.homeServicesTitle} color="#FFE710" />
    </div>
  );
};

export default Services;
