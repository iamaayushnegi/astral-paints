import React from "react";
import Subtitle from "../subtitle";
import Title from "../title";
type PropsType = {
  homePageData: any;
};

const Category = ({ homePageData }: PropsType) => {
  return (
    <div id="category" className="aayush-h-[calc(100vh-100px)]">
      <Subtitle text={homePageData.homeCategorySubtitle} />
      <Title text={homePageData.homeCategoryTitle} color="#FF9119" />
    </div>
  );
};

export default Category;
