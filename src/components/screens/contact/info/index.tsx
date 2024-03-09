import React, { FC } from "react";
import mapPlaceholder from "@/assets/contact/map-placeholder.jpg";
import Image from "next/image";
import Contacts from "@/components/screens/contact/info/contacts";
import { ContactResponse } from "@/interfaces/contact.interface";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
export interface InfoProps {
  data: ContactResponse;
}

const Info: FC<InfoProps> = ({ data }) => {
  const { t } = useTranslation("common");
  const Component = (props: any) => <p {...props} />;
  return (
    <div className={"box min-[900px]:mt-[100px] mt-5"}>
      <div
        className={
          "flex justify-between min-[1200px]:flex-row flex-col min-[1200px]:gap-0 gap-10  mb-16 "
        }
      >
        <div>
          <h2
            className={
              "font-bold  text-24 sm:text-32 min-[1000px]:text-[44px] sm:leading-[64px] text-bodyText mb-4"
            }
          >
            {t("contact_main_title")}
          </h2>
          <p
            className={
              "font-medium sm:leading-8 text-bodyText sm:text-16 text-14 mb-10"
            }
          >
            {t("contact_main_description")}
          </p>
          <Contacts data={data} />
        </div>
        <div className={"w-full"}>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1DupmIW0OHa_NlU7te3EMPyjvARCdSYI&ehbc=2E312F&noprof=1"
            className={"w-full h-[450px]"}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Info;
