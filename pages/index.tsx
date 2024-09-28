import { useQuery } from "@apollo/client";
import client from "../lib/apolloClient";
import { GET_HOMEPAGE_DATA } from "@/api/homepage";
import PopularColors from "@/components/popular";
import Loader from "@/components/loader";
import Blogs from "@/components/blogs";
import About from "@/components/about";
import Category from "@/components/category";
import Services from "@/components/services-section";

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA, { client });

  // if (loading) {
  //   return <Loader />;
  // }

  const { pages } = data;

  return (
    <div className="aayush-px-[80px] aayush-flex aayush-flex-col aayush-gap-[5.313rem]">
      <About homePageData={pages.nodes[0].homepage}/>
      <Category homePageData={pages.nodes[0].homepage}/>
      <Services homePageData={pages.nodes[0].homepage}/>
      <PopularColors homePageData={pages.nodes[0].homepage} />
      <Blogs blogData={pages.nodes[0].homepage} />
    </div>
  );
}
