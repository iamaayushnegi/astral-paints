import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../button";
import { Pagination } from "swiper/modules";

type PropsType = {
  homePageData: any;
};

const HeroSection = ({ homePageData }: PropsType) => {
  const { banners } = homePageData;

  //   const pagination = {
  //     clickable: true,
  //     renderBullet: function (index: number, className: string) {
  //       return '<span class="' + className + '">' + (index + 1) + "</span>";
  //     },
  //   };

  const renderContent = (item: any) => {
    return (
      <SwiperSlide>
        <div
          className="aayush-relative aayush-bg-cover aayush-bg-center aayush-h-[calc(100vh-100px)] aayush-text-white aayush-flex aayush-flex-col aayush-justify-center aayush-px-20"
          style={{ backgroundImage: `url(${item.bannerImage.node.sourceUrl})` }}
        >
          <div className="aayush-absolute aayush-inset-0 aayush-bg-black aayush-opacity-35" />
          <div className="aayush-relative aayush-z-10 aayush-max-w-96 aayush-flex aayush-flex-col aayush-gap-5">
            <h2 className="aayush-text-[50px] aayush-font-bold">
              {item.bannersTitle}
            </h2>
            <p className="aayush-text-base">{item.bannerDescription}</p>
            <Button
              text={item.bannerButton.title}
              link={item.bannerButton.url}
            />
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <Swiper
      direction="vertical"
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="aayush-h-[calc(100vh-100px)]"
    >
      {banners.map(renderContent)}
    </Swiper>
  );
};

export default HeroSection;
