import React from "react";
import Subtitle from "../subtitle";
import Title from "../title";
import Button from "../button";
import { useQuery } from "@apollo/client";
import { GET_COLOUR_CATEGORY_DATA } from "@/api/color-category";
import client from "../../lib/apolloClient";
import Loader from "../loader";

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
        className="aayush-group aayush-flex aayush-flex-col aayush-justify-center aayush-cursor-pointer hover:aayush-shadow-[0px_4px_20px_0px_#0000004D] aayush-rounded-[20px] aayush-py-5"
      >
        <p className="aayush-invisible group-hover:aayush-visible aayush-text-xs aayush-font-semibold aayush-text-center">
          Astral Paints
        </p>
        <div
          className="aayush-relative aayush-h-[158px]"
          style={{
            backgroundColor: item.colourInfo.selectColor,
          }}
        >
          <div className="aayush-absolute aayush-inset-0 aayush-m-1 aayush-border-[1px] aayush-border-white" />
        </div>
        <p className="aayush-text-[15px] aayush-text-center">Colour Name</p>
        <p className="aayush-text-sm aayush-text-center aayush-text-[#656565]">
          {item.colourInfo.selectColor}
        </p>
      </div>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Subtitle text={homePageData.homeColoursSubtitle} />
      <div className="aayush-flex aayush-justify-between aayush-items-center">
        <Title text={homePageData.homeColoursTitle} color="#00AE44" />
        <Button
          color="#00AE44"
          variant="outlined"
          link={homePageData.homeColoursButton.url}
          text={homePageData.homeColoursButton.title}
        />
      </div>

      {!loading && (
        <div className="aayush-py-[25px] aayush-grid aayush-gap-x-[14px] aayush-grid-cols-3">
          {data.allColourCategory.nodes[0].colours.nodes.map(renderContent)}
        </div>
      )}
    </div>
  );
};

export default PopularColors;
