import { useQuery } from "@apollo/client";
import client from "../lib/apolloClient";
import { GET_HOMEPAGE_DATA } from "@/api/homepage";
import PopularColors from "@/components/popular";
import Loader from "@/components/loader";
import Blogs from "@/components/blogs";

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA, { client });

  if (loading) {
    return <Loader />;
  }

  const { pages } = data;

  return (
    <div className="aayush-flex aayush-flex-col aayush-gap-[5.313rem]">
      <PopularColors homePageData={pages.nodes[0].homepage} />
      <Blogs blogData={pages.nodes[0].homepage} />
    </div>
  );
}
