import React from "react";
import Title from "../title";
import Subtitle from "../subtitle";
import Button from "../button";

type PropsType = {
  homePageData: any;
};

const Dealer = ({ homePageData }: PropsType) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        margin: "0px -80px",
        width: "calc(100vw - 15)",
        height: "358px",
        backgroundImage: `url(/dealer-banner.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Subtitle text={homePageData.homeJoinSubtitle} />
      <Title text={homePageData.homeJoinTitle} stroke={false} />
      <p className="aayush-text-base aayush-w-[483px] aayush-text-center">
        Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi in ornare.
        Nec in tristique et ultrices sit ullamcorper massa tempor et.
      </p>
      <Button text="Read More" link="#" />
    </div>
  );
};

export default Dealer;
