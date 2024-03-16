import React, { FC, ReactNode } from "react";
import ServiceItem from "@/components/screens/home/services/service-item";
import { ServiceItemProps } from "@/interfaces/home.interface";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PrevArrowIcon } from "@/components/icons";
export interface ServicesProps {
  data: ServiceItemProps[];
}
export type ServiceProps = {
  id: number;
  logo: ReactNode;
  title: string;
  description: string;
  color: string;
};

const Services: FC<ServicesProps> = ({ data }) => {
  const swiperRef = React.useRef<null | SwiperRef>(null);
  const nextSlide = () => {
    swiperRef.current!.swiper.slideNext();
  };
  const prevSlide = () => {
    swiperRef.current!.swiper.slidePrev();
  };
  return (
    <div>
      <div className={"flex justify-between items-center mt-8 pb-11 box"}>
        <h2
          className={
            " text-28 sm:text-32 min-[900px]:text-[36px] mb:text-[44px] font-bold mb-2 text-bodyText "
          }
        >
          Xidmətlərimiz
        </h2>
        <div
          className={
            "w-20 flex justify-between border border-[#DADADA] rounded-[4px] h-10 items-center"
          }
        >
          <div onClick={prevSlide} className={"ml-3 cursor-pointer"}>
            <PrevArrowIcon />
          </div>
          <div className={"w-[1px] h-8 bg-[#DADADA]"} />
          <div onClick={nextSlide} className={"mr-3 cursor-pointer"}>
            <PrevArrowIcon className={"rotate-180"} />
          </div>
        </div>
      </div>

      {/*<div*/}
      {/*  className={*/}
      {/*    "grid  my-8 grid-cols-1 min-[700px]:grid-cols-2  mb:max-w-[1440px] min-[1300px]:grid-cols-4 mx-auto"*/}
      {/*  }*/}
      {/*>*/}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        ref={swiperRef}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1000: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 3,
          },

          600: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceItem data={service} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/*</div>*/}
    </div>
  );
};

export default Services;
