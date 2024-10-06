import React from "react";
import { useQuery } from "@apollo/client";
import client from "../../lib/apolloClient";
import Subtitle from "../subtitle";
import Title from "../title";
import { GET_BLOGS_DATA } from "@/api/blog";
import dayjs from "dayjs";
import Loader from "../loader";

type PropsType = {
  blogData: any;
};

const Blogs = ({ blogData }: PropsType) => {
  const { loading, error, data } = useQuery(GET_BLOGS_DATA, { client });

  const renderContent = (item: any) => {
    return (
      <div
        key={item.slug}
        className="aayush-relative aayush-bg-cover aayush-bg-center aayush-h-[209px] aayush-text-white aayush-flex aayush-flex-col aayush-justify-end aayush-p-[20px] aayush-gap-[13px]"
        style={{
          backgroundImage: `url(${item.featuredImage.node.sourceUrl})`,
        }}
      >
        <div className="aayush-absolute aayush-inset-0 aayush-bg-black aayush-opacity-50" />
        <div className="aayush-relative aayush-z-10">
          <p className="aayush-text-sm aayush-font-medium aayush-italic">
            {dayjs(item.date).format("DD MMM YYYY")}
          </p>
          <p className="aayush-text-xl aayush-font-semibold">{item.title}</p>
        </div>
      </div>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div id="blogs" className="aayush-h-[calc(100vh-100px)]">
      <Subtitle text={blogData.blogSubtitle} />
      <Title text={blogData.blogTitle} color="#00C1DE" />

      {!loading && (
        <div className="aayush-grid aayush-grid-cols-3 aayush-gap-x-[17px] aayush-gap-y-[20px]">
          {data.blogs.nodes.map(renderContent)}
        </div>
      )}
    </div>
  );
};

export default Blogs;
