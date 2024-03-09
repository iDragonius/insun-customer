import React, { FC } from "react";
import SocialNetworks from "@/components/layout/ui/footer/social-networks";
import Link from "next/link";
import { SocialLinkProps } from "@/interfaces/layout.interface";

export interface FooterProps {
  data: SocialLinkProps;
}

const Footer: FC<FooterProps> = ({ data }) => {
  return (
    <div className={" w-full bg-primary "}>
      <div
        className={
          "box flex items-center justify-between py-7 mb:flex-row flex-col gap-3"
        }
      >
        <p className={"text-white font-semibold"}>
          ©2023 İnsun. Bütün hüquqlar qorunur
        </p>
        <SocialNetworks data={data} />
        <div className={"flex items-center gap-6 text-white "}>
          <p>
            {" "}
            Bu bir{" "}
            <Link
              href={"https://knexel.com"}
              target={"_blank"}
              className={"font-semibold"}
            >
              {" "}
              Knexel
            </Link>{" "}
            məhsuludur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
