import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { imageLoader } from "@/utils/loader";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { PartnerItemProps } from "@/interfaces/home.interface";
import { ServerUrl } from "@/constants/server-url";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import slugify from "slugify";
export interface PartnersProps {
  data: PartnerItemProps[];
}

const Partners: FC<PartnersProps> = ({ data }) => {
  const { t } = useTranslation("common");
  return (
    <div className={"py-20"}>
      <div className={"box"}>
        <h3
          className={
            "  text-28 sm:text-32 min-[900px]:text-[36px] mb:text-[44px] font-bold mb-2"
          }
        >
          Tərəfdaşlar
        </h3>
        <p className={"text-20 mb-6"}>
          Burada adlarını gördüyünüz şirkətlərin dəyəri insan kapitalına verilən
          dəyərin göstəricisidir.
        </p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 6,
            },
            900: {
              slidesPerView: 5,
            },
            700: {
              slidesPerView: 4,
            },
            600: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((img, i) => (
            <SwiperSlide
              key={img.id}
              className={"!flex !items-center !justify-center  !h-[177px]"}
            >
              <Link
                href={`/about-us/partners/${slugify(img.attributes.name)}-${
                  img.id
                }`}
              >
                <Image
                  loader={imageLoader}
                  src={img.attributes.logo.data.attributes.url}
                  alt={"img"}
                  width={350}
                  height={200}
                  className={"w-full h-full object-contain"}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
