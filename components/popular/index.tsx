import React from "react";
import Subtitle from "../subtitle";
import Title from "../title";
import Button from "../button";
import { useQuery } from "@apollo/client";
import { GET_COLOUR_CATEGORY_DATA } from "@/api/color-category";
import client from "../../lib/apolloClient";

type PropsType = {
  homePageData: any;
};

const PopularColors = ({ homePageData }: PropsType) => {
  const { loading, error, data } = useQuery(GET_COLOUR_CATEGORY_DATA, {
    client,
  });

  const renderContent = (item: any) => {
    return (
      <div
        key={item.slug}
        style={{
          backgroundColor: item.colourInfo.selectColor,
        }}
      >
        <p>{item.date}</p>
        <p>{item.title}</p>
      </div>
    );
  };

  return (
    <div>
      <Subtitle text={homePageData.homeColoursSubtitle} />
      <Title text={homePageData.homeColoursTitle} />
      <Button
        link={homePageData.homeColoursButton.url}
        text={homePageData.homeColoursButton.title}
      />

      {!loading &&
        data.allColourCategory.nodes[0].colours.nodes.map(renderContent)}
    </div>
  );
};

export default PopularColors;
