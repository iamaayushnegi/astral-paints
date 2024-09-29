import React from "react";
import Subtitle from "../subtitle";
import Title from "../title";
import Button from "../button";
type PropsType = {
  homePageData: any;
};

const About = ({ homePageData }: PropsType) => {
  return (
    <div className="aayush-grid aayush-grid-cols-2 aayush-gap-3">
      <div>
        <Subtitle text={homePageData.homeAboutSubtitle} />
        <Title text={homePageData.homeAboutTitle} color="#E70000" />
        <div className="aayush-text-[#656565] aayush-text-base aayush-mt-[31px] aayush-mb-[25px]">
          <p>
            Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
            phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
            posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
            in pharetra velit luctus id pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
            phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
            posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
            in pharetra velit luctus id pellentesque.
          </p>
        </div>
        <Button
          link={homePageData.homeAboutButton.url}
          variant="outlined"
          color="#E70000"
          text={homePageData.homeAboutButton.title}
        />
      </div>
      <video className="aayush-h-full aayush-w-full" controls>
        <source src={homePageData.homeAboutVideoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default About;
