import React from "react";
import { useQuery } from "@apollo/client";
import client from "../../lib/apolloClient";
import Subtitle from "../subtitle";
import Title from "../title";
import { GET_BLOGS_DATA } from "@/api/blog";

type PropsType = {
  blogData: any;
};

const Blogs = ({ blogData }: PropsType) => {
  const { loading, error, data } = useQuery(GET_BLOGS_DATA, { client });

  const renderContent = (item: any) => {
    return (
      <div
        key={item.slug}
        style={{
          backgroundImage: `url(${item.featuredImage.node.sourceUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p>{item.date}</p>
        <p>{item.title}</p>
      </div>
    );
  };
  return (
    <div>
      <Subtitle text={blogData.blogSubtitle} />
      <Title text={blogData.blogTitle} />

      {!loading && data.blogs.nodes.map(renderContent)}
    </div>
  );
};

export default Blogs;
