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
import HeroSection from "@/components/hero";
import { RainbowBanner } from "@/assets/svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import debounce from "lodash/debounce";

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA, { client });

  const router = useRouter();
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    "hero",
    "about",
    "category",
    "services",
    "popular",
    "dealer",
    "blogs",
  ];

  const scrollToSection = (direction: number) => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < sections.length) {
      const nextSection = sections[nextIndex];
      setActiveSection(nextSection);

      const container = document.getElementById("section");
      const element = document.getElementById(nextSection);

      if (container && element) {
        const elementPosition = element.offsetTop;
        container.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });

        router.replace(`#${nextSection}`, undefined, { shallow: true });
      }
    }
  };

  const handleScroll = debounce((event: any) => {
    if (event.deltaY > 0) {
      scrollToSection(1);
    } else {
      scrollToSection(-1);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection]);

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

      <div className="aayush-h-screen aayush-overflow-y-auto">
        <Header />

        <div
          id="section"
          className="aayush-relative aayush-h-[calc(100vh-100px)] aayush-overflow-y-auto"
        >
          <HeroSection homePageData={pages.nodes[0].homepage} />
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
        </div>

        {/* <div className="aayush-relative">
         */}
        {/* <div className="aayush-absolute -aayush-bottom-56 aayush-z-10">
          <RainbowBanner />
        </div> */}
        {/* </div> */}
        {/* <div className="aayush-flex aayush-w-full">
        <div className="aayush-w-[15px] aayush-bg-gradient-to-b aayush-from-[#E70000] aayush-via-[#F5E847] aayush-to-[#00C1DE]"></div>
        <div className="aayush-px-[80px] aayush-flex aayush-flex-1 aayush-flex-col aayush-gap-[5.313rem]">
          <About homePageData={pages.nodes[0].homepage} />
          <Category homePageData={pages.nodes[0].homepage} />
          <Services homePageData={pages.nodes[0].homepage} />
          <PopularColors homePageData={pages.nodes[0].homepage} />
          <Dealer homePageData={pages.nodes[0].homepage} />
          <Blogs blogData={pages.nodes[0].homepage} />
        </div>
      </div> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
