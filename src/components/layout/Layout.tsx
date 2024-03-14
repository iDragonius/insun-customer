import { Insun } from "@/components/font";
import Footer from "@/components/layout/ui/footer";
import Header from "@/components/layout/ui/header";
import GET_LAYOUT from "@/gql/queries/layout";
import {
  LayoutResponse,
  NavigationProps,
  SocialLinkProps,
} from "@/interfaces/layout.interface";
import { imageLoader } from "@/utils/loader";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";
import wp from "@/assets/wp.png";
export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // const { locale, isReady } = useRouter();
  const { data, loading } = useQuery<LayoutResponse>(GET_LAYOUT, {
    variables: {
      locale: "az",
    },
  });

  return (
    <div className={Insun.className}>
      <div className={"min-h-[calc(100vh-100px)]"}>
        <Header data={data?.navigation as NavigationProps} loading={loading} />
        {children}
        <div className={"fixed right-5 bottom-5 z-[500]"}>
          <Link
            href={`https://wa.me/${data?.socialLink.data.attributes.whatsapp}`}
            target={"_blank"}
            className={
              " drop-shadow-xl flex flex-col items-center gap-1 text-20 font-semibold"
            }
          >
            <Image src={wp} alt={"wp"} width={50} height={50} />
            <p className={"gradient-text"}>Bizə yazın</p>
          </Link>
        </div>
      </div>
      <Footer data={data?.socialLink as SocialLinkProps} />
    </div>
  );
};

export default Layout;
