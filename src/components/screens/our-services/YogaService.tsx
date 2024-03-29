import React, { FC } from "react";
import MainBlock from "@/components/screens/our-services/MainBlock";
import Image from "next/image";
import yogaImage from "@/assets/our-services/yoga.png";
import { GreenCircle, RedCircle } from "@/components/icons";
import AdditionalBlock from "@/components/screens/our-services/AdditionalBlock";
import info from "@/assets/our-services/info/yoqa.jpg";

export interface YogaServiceProps {
  sectionRef: React.MutableRefObject<HTMLDivElement>;
}

const YogaService: FC<YogaServiceProps> = ({ sectionRef }) => {
  return (
    <div ref={sectionRef}>
      <MainBlock color={"#FFE4FA"} size={2}>
        <div
          className={
            "flex justify-between mb:flex-row flex-col gap-10 mb:gap-20 "
          }
        >
          <div>
            <h2 className={"text-[#505050] text-[44px] font-bold mb-4"}>
              Yoga xidməti
            </h2>
            <h4
              className={"text-24 text-[#F32735] font-semibold leading-10 mb-4"}
            >
              İnsun Yaşam Mərkəzində yoqa fəaliyyət növünün yaradılması ilə
              bağlı qərarın verilməsinin maraqlı tarixçəsini Sizinlə bölüşmək
              istəyirik.
            </h4>
            <p className={"font-medium leading-9 mb-4 text-bodyText  "}>
              Ölkədə yoqa dərsələrinə olan tələbatla bağlı hər hansı bir məlumat
              olmadığı üçün mərkəzin investorlarını bu fəaliyyət növünün
              vacibliyinə inandırmaq çətin idi. Məhz bunun üçün onları yoqa
              dərsləri keçən bir neçə mütəxəssislə eyni masa ətrafında topladıq.
              Görüşə gələn yoqa mütəxəssisləri masa ətrafına əyləşdikdən sonra
              otağa çökən səssizlik hər kəsi fərqli dünyaya apardığının fərqində
              belə olmadıq.
            </p>
          </div>
          <Image
            src={yogaImage}
            alt={"banner"}
            className={
              "rounded-full w-full  h-full self-end max-w-[440px] max-h-[440px] mb:w-[440px] mb:h-[440px]"
            }
          />
        </div>
      </MainBlock>
      <AdditionalBlock>
        <h2
          className={
            "mt-16 text-[36px] leading-[56px] font-bold text-bodyText px-8 mb-14"
          }
        >
          Niyə bizim mərkəzə gəlməyi təklif edirik?
        </h2>
        <div className={"flex flex-col gap-6 min-[900px]:px-6"}>
          <div
            className={
              "flex justify-between gap-5 min-[800px]:flex-row flex-col"
            }
          >
            <Block
              title={"Psixoloji vəziyyət"}
              description={
                "Bu qarışıq kəhkəşanda ruh və bədəninizi dinləyərək gün ərzində üzləşdiyiniz xoşagəlməz hadisələri beyninizdən çıxarın. Əlinizdə olmayan hadisələrə qarşı vecsiz davranmağın həzzini yaşayın. Şüuraltına yığdığınız mənfi hadisələri beyninizdən xaric etməyi bacarın."
              }
            />
            <Block
              title={"Səhhətinizi yaxşılaşdırın"}
              description={
                "Yoqanın daxili orqanların masajı hesab olunur. Lotus, şan, əllər vasitəsilə başı aşağı durma kimi pozalar (asanalar) qan dövranın yaxşılaşdırılması və cavanlaşdırmaq üçün faydalıdır. Aldığınız enerji isə səhər içdiyiniz bir fincan kofeyə bərabər olacaq."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[804] self-end"}>
            <Block
              title={"Sakitliyinizə qovuşun"}
              description={
                "Beyniniz hər gün müxtəlif səslərlə dolu olan meqapolisdir. Onun müəyyən hissəsində sakitlik parkları olmaması Sizə əziyyət verir. Yoqa ilə beyninizi meqapolisdən çıxardıb şəhər kənarına aparıb sakitliyə qovuşun. Özünüzlə tək qalmaq hissi bir işlərinizi doğru icra etməyə kömək edəcək."
              }
            />
          </div>{" "}
          <div
            className={
              "flex justify-between  max-[800px]:flex-col max-[800px]:gap-4"
            }
          >
            <Block
              title={"Empati qurun"}
              description={
                "Gördüyünüz və oxuduğunuz hər şeyə anında fikir bildirmək məcburiyyətində deyilsiniz. Bizim bütün problemlərimiz empati hissinin olmamasından qaynaqlanır. Özümüzə fokus ola bilmədiyimiz kimi özümü qarşı tərəfin yerinə də qoya da bilmirik. Yoqa ilə empati qurmağı öyrənin"
              }
            />
            <Image
              src={info}
              alt={"info"}
              width={400}
              className={"object-contain max-[800px]:mx-auto"}
            />
          </div>
          <div className={"min-[900px]:w-[520px] self-end"}>
            <Block
              title={"Maraqlanmaq"}
              description={
                "Bütün çətinlikləri keçmək üçün birlikdə addımlamaq lazımdır. Biz, “Siz bu yanlış qidalanmanı beyninizdə bitirənə və ətrafınızdakı insanların qidalanmasına baxaraq “İnsanlar bu yeməkləri necə yeyə bilir?” ifadəsini eşidənə kimi maraqlanmağa davam etmək istəyirik. Bunun üçün bir dəfə konsultasiyaya yazılmağınız yetərlidir."
              }
            />
          </div>
        </div>
      </AdditionalBlock>
    </div>
  );
};

const Block = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className={" py-10 px-8 relative"}>
      <h2 className={"text-bodyText font-bold text-24 leading-8 mb-4 "}>
        {title}
      </h2>
      <p className={"text-[#5E5E5E] font-medium leading-7"}>{description}</p>
      {/*<GreenCircle*/}
      {/*  className={"absolute z-10  "}*/}
      {/*  style={{*/}
      {/*    top: getRandomInt(200),*/}
      {/*    right: 0,*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<RedCircle*/}
      {/*  className={"absolute z-10"}*/}
      {/*  style={{*/}
      {/*    top: getRandomInt(200),*/}
      {/*    left: -20,*/}
      {/*  }}*/}
      {/*/>*/}
    </div>
  );
};
export default YogaService;
