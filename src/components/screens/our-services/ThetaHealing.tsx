import React, { FC } from "react";
import MainBlock from "@/components/screens/our-services/MainBlock";
import Image from "next/image";
import thetaImage from "@/assets/our-services/theta.png";
import AdditionalBlock from "@/components/screens/our-services/AdditionalBlock";
import { GreenCircle, RedCircle } from "@/components/icons";
import clsx from "clsx";

export interface ThetaHealingProps {
  sectionRef: React.MutableRefObject<HTMLDivElement>;
}

const ThetaHealing: FC<ThetaHealingProps> = ({ sectionRef }) => {
  return (
    <div ref={sectionRef}>
      <MainBlock color={"#F17828"} size={2}>
        <div
          className={
            "flex justify-between  mb:flex-row flex-col gap-10 mb:gap-20 "
          }
        >
          <div>
            <h2 className={"text-white text-[44px] font-bold mb-4"}>
              Theta Healing
            </h2>
            <h4 className={"text-24 text-white font-semibold leading-10 mb-4"}>
              Theta healing-i izah etməyin ən doğru yolu bu insanların fiziki və
              mental halı ilə yaxından tanış olanları prosesə cəlb etməkdir.
            </h4>
            <p className={"font-medium leading-9 mb-4 text-white  "}>
              Theta healing-i izah etməyin ən doğru yolu bu insanların fiziki və
              mental halı ilə yaxından tanış olanları prosesə cəlb etməkdir. Biz
              də öz növbəmizdə bunun nə olduğunu Sizlərə izah etmək mərkəzimizdə
              fəaliyyət göstərən kouç, psixoloq və dietoloqu bu seanslarda
              iştirak etdikdən sonra öz fikirlərini bölüşməyə dəvət etdik.
              Seanslardan sonra mütəxəssislərin fikirləri aşağıdakı kimi oldu:
            </p>
          </div>
          <Image
            src={thetaImage}
            alt={"banner"}
            className={
              "rounded-full w-full  h-full self-end max-w-[440px] max-h-[440px] mb:w-[440px] mb:h-[440px]"
            }
          />
        </div>
      </MainBlock>
      <AdditionalBlock>
        <div className={"flex flex-col gap-6 my-8"}>
          <Block
            title={"Psixoloqun fikirləri:"}
            description={
              '"Theta healing" prosedurları insanlara psixoloji və tibbi məsələlərə necə yanaşmalı olduğunu öyrədir. Bu işin əsasını inam təşkil edir. İnsanın daxilində olan inam, onu baş verən və ya verə biləcək hadisələrdən minimal risklərlə yan keçməsini təmin edir. Nümunə: Siz də X bir xəstəlik aşkarlanıb. Hər şey Sizin ilk olaraq bu xəstəliyi psixoloji olaraq necə qarşılamağınıza bağlıdır. İmmun sisteminiz psixoloji olaraq buna cavab verirmi yoxsa yox? Bu işin sehrli tərəfi ondan ibarətdir ki, theta healing prosesi zamanı insan beyni 4-7 herz tezliyinə (beynin istirahət dalğaları) düşür. Bu yuxu içərisində yuxu görmək ilə yarı ayıq qalmaq arasında baş verən bir prosesdir. Həmin dalğada qalan insanlar şüuraltı gördüklərini dəyişdirə bilmə gücünə sahib olurlar.'
            }
            space={0}
          />
          <Block
            title={"Kouçinq üzrə mütəxəssisin fikirləri:"}
            description={
              "" +
              "İnsan beyni şüurlu düşüncə və şüuraltı düşüncə formasında fəaliyyət göstərir. Şüurlu düşüncə insanın ayıq halda düşünərək verdiyi qərarlar və atdığı addımlardır. Şüuraltı düşüncədə isə hadisələr insanın özünün fərqində olmadığı halda baş verir. İnsan şüuraltı düşüncədən doğan mənfi və müsbət qərarları idarə edə bilməsə də, hər zaman pozitiv düşünməklə ona təsir göstərə bilir. Proseslərdən sonra belə bir qənaətə gəlmək olar ki, theta healing özünə inamın ruh halının gücləndirilməsi prosesidir. Ruh halı yüksək olmayan insanlar vermək ilə özünə həll yolu tapmasını gözləmək məntiqsizdir. Bu sönmüş bir telefon ilə başqa birisinə zəng etməyə çalışmağa bənzəyir."
            }
            space={112}
          />
          <Block
            title={"Dietoloqun fikirləri:"}
            description={
              'Bu prosesə dietoloq gözü ilə deyil, hər zaman sorğulayan bir insan kimi yanaşmaq istəyirəm. "Theta Healing" zəif insanların iştirak edəcəyi bir mental proses deyildir. Əgər bir insan öz keçmişində olan bir hadisəyə sığınıb yaşayırsa, bu seanslar o hadisəni onun əlindən alıb boşluğa sala bilər. Bu seanslar ən böyük qorxuları köhnə və mənfi inancların boşaldılması, onların yerinə yeni nümunələrin yüklənməsi prosesindən qorxmayan insanlar üçün nəzərdə tutulub. Keçmişi olmayan bir insan Theta seansından sonra özünü boşluğa düşmüş kimi hiss edə bilər. O, sarsıntılar və stresslər haqqında xatirələrdən qurtulmağa sevinsə də şüuraltının kompleks təmizlənməsi hissi yeni bir qorxuya, depressiya hissinə səbəb ola bilər.'
            }
            space={224}
          />
        </div>
      </AdditionalBlock>
    </div>
  );
};
const Block = ({
  title,
  description,
  space,
}: {
  title: string;
  description: string;
  space: number;
}) => {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div
      className={clsx(
        " py-10 px-4 min-[900px]:px-8 relative",
        `min-[900px]:ml-[${space}px] `,
      )}
    >
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
export default ThetaHealing;
