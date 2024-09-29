import { useQuery } from "@apollo/client";
import client from "../lib/apolloClient";
import { GET_HOMEPAGE_DATA } from "@/api/homepage";
import PopularColors from "@/components/popular";
import Loader from "@/components/loader";
import Blogs from "@/components/blogs";
import About from "@/components/about";
import Category from "@/components/category";
import Services from "@/components/services-section";
import Header from "@/components/header";
import Dealer from "@/components/dealer";
import Head from "next/head";

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA, { client });

  if (loading) {
    return <Loader />;
  }

  const { pages } = data;

  return (
    <>
      <Head>
        <title>{pages.nodes[0].seo.title}</title>
        <meta name="description" content={pages.nodes[0].seo.metaDesc} />
        <meta name="keywords" content={pages.nodes[0].seo.metaKeywords} />

        {/* Open Graph for social media previews */}
        <meta property="og:title" content={pages.nodes[0].seo.opengraphTitle} />
        <meta
          property="og:description"
          content={pages.nodes[0].seo.opengraphDescription}
        />
        <meta
          property="og:image"
          content={pages.nodes[0].seo.opengraphImage.mediaItemUrl}
        />
        <meta property="og:url" content={pages.nodes[0].seo.opengraphUrl} />
        <meta property="og:type" content={pages.nodes[0].seo.opengraphType} />

        {/* Canonical URL */}
        <link rel="canonical" href={pages.nodes[0].seo.canonical} />
      </Head>

      <Header />
      <div className="aayush-flex aayush-w-full">
        <div className="aayush-w-[15px] aayush-bg-gradient-to-b aayush-from-[#E70000] aayush-via-[#F5E847] aayush-to-[#00C1DE]"></div>
        <div className="aayush-px-[80px] aayush-flex aayush-flex-1 aayush-flex-col aayush-gap-[5.313rem]">
          <About homePageData={pages.nodes[0].homepage} />
          <Category homePageData={pages.nodes[0].homepage} />
          <Services homePageData={pages.nodes[0].homepage} />
          <PopularColors homePageData={pages.nodes[0].homepage} />
          <Dealer homePageData={pages.nodes[0].homepage} />
          <Blogs blogData={pages.nodes[0].homepage} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
