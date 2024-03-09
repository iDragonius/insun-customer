import React, { FC } from "react";
import { SectionItemProps } from "@/components/screens/our-services/sections";
import clsx from "clsx";

export interface SectionsItemProps {
  data: SectionItemProps;
  active: number;
}

const SectionItem: FC<SectionsItemProps> = ({ data, active }) => {
  const scrollTo = () => {
    console.log(data.ref.current);
    data.ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      onClick={scrollTo}
      className={clsx(
        active === data.id && "text-primary",
        "relative py-[10px] cursor-pointer border-b border-b-main mx-6 text-bodyText leading-10 text-18 font-medium",
      )}
    >
      {active === data.id && (
        <div
          className={
            "absolute w-1 h-6 rounded-r-[2px] -left-6 top-[18px] bg-[#67A039]"
          }
        />
      )}

      {data.label}
    </div>
  );
};

export default SectionItem;
