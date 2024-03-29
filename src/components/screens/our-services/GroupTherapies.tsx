import React, { FC, useState } from "react";
import MainBlock from "@/components/screens/our-services/MainBlock";
import Image from "next/image";
import thetaImage from "@/assets/our-services/theta.png";
import clsx from "clsx";
import AdditionalBlock from "@/components/screens/our-services/AdditionalBlock";
import { GreenCircle, RedCircle } from "@/components/icons";
import info from "@/assets/our-services/info/qrup-terapiya.jpg";

export interface GroupTherapiesProps {
  sectionRef: React.MutableRefObject<HTMLDivElement>;
}

const GroupTherapies: FC<GroupTherapiesProps> = ({ sectionRef }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div ref={sectionRef}>
      <MainBlock color={"#67A039"} size={2}>
        <div
          className={
            "flex justify-between mb:flex-row flex-col gap-10 mb:gap-20 "
          }
        >
          <div>
            <h2 className={"text-white text-[44px] font-bold mb-4"}>
              Qrup terapiyaları{" "}
            </h2>
            <h4 className={"text-24 text-white font-semibold leading-10 mb-4"}>
              Biz şüuraltı olaraq dərd dinləməyi sevən toplum olduğumuz üçün
              qrup terapiyalarının əslində mədəniyyətimizə çoxdan daxil
              olduğunun göstəricisidir deyə bilərik. Lüğətimizdə “dərdinə şərik
              olmaq” ifadəsinin olması buna bir sübutdur.
            </h4>
            <p
              className={clsx(
                !open && " line-clamp-3",
                "font-medium leading-9 mb-4 text-white ",
              )}
            >
              Qrup terapiyası müəyyən sayda insanın problemlərini, dərdlərini və
              təcrübələrini ortaq bir mövzu çərçivəsində paylaşdığı bir terapiya
              prosesidir. Bunu el dili ilə desək aşağıdakı kimi səslənəcək:
              Yaşadığınız binada qonşulardan biri ürək əməliyyatı keçirir və
              bunu bilən yaxın qonşular gəlib ona baş çəkirlər. Yığışıb gələn
              qonşular əməliyyat keçirmiş insanın başına toplanaraq yastığının
              yüngül olmasını diləyərək dərdinə şərik olurlar. Burada dərdinə
              şərik olmaq ifadəsinin arxasında dayanan məntiq hər kəsin bu
              məsələ ilə bağlı başına gələnləri və öz təcrübələrini paylaşmaq
              anlamına gəlir. Qrup terapiyası mədəniyyətin daha
              təkmilləşdirilmiş və sistemli formasıdır.
            </p>
            <button
              className={"text-white font-semibold "}
              onClick={() => setOpen((prevState) => !prevState)}
            >
              {open ? "Bağla" : "Davamını Oxu"}
            </button>
          </div>
          <Image
            src={thetaImage}
            alt={"banner"}
            className={
              "rounded-full w-full  h-full  max-w-[440px] max-h-[440px] mb:w-[440px] mb:h-[440px] self-end"
            }
          />
        </div>
      </MainBlock>
      <AdditionalBlock>
        <h2
          className={
            "mt-16  text-24 min-[900px]:text-[36px] min-[900px]:leading-[56px] font-bold text-bodyText px-8"
          }
        >
          Dərdinizə şərik tapmaq üçün təklif etdiyimiz qrup terapiyaları:
        </h2>
        <div className={"flex flex-col gap-6 px-6"}>
          <div className={"min-[900px]:w-[500px]"}>
            <Block
              title={"Psixodinamik Qrup terapiyası"}
              description={
                "  Psixodinamik qrup terapiyasında rəhbərlik terapevtdən çox qrupdakı\n" +
                "              insanlar tərəfindən həyata keçirilir. Terapevt burada müşahidəçi\n" +
                "              kimidir. Qrupu təşkil edən insanlar müxtəlif problemləri olan\n" +
                "              insanlar bir qrupa gətirilir. Bu qrup terapiyası daha çox xarici\n" +
                "              müştərilər üçün açıqdır."
              }
            />
          </div>
          <div
            className={
              "flex justify-between max-[800px]:flex-col max-[800px]:gap-4"
            }
          >
            <Block
              title={"Humanist yanaşma ilə \n" + "qrup terapiyası:"}
              description={
                "Bu qrupda psixoterapevt bəzən qrupa rəhbərlik edir, bəzən də qrup dinamikasının kor təbii dəyişməsinə imkan yaradır. Humanist yanaşma ilə qrup terapiyasında məqsəd həm məlumatlılıq əldə etmək, həm də dəyişməkdir."
              }
            />
            <Image
              src={info}
              alt={"info"}
              width={400}
              className={"object-contain max-[800px]:mx-auto"}
            />
          </div>
          <div>
            <Block
              title={"Koqnitiv-davranış qrup terapiyası"}
              description={
                "Burada psixoterapevt daha təsirli və lider mövqedədir. Qrup terapiyasındakı insanlar və terapiyanın mövzusu əvvəlcədən müəyyən edilir. Qrup üzvlərinin hər birində müəyyən bir xəstəlik və ya eyni məsələ ilə bağlı problemlər mövcud olur. Koqnitiv davranış terapiyasının fərdi təcrübəsində olduğu kimi, müştərilərə ev tapşırığı verilir və onları tamamlamaları gözlənilir. Bu qruplarda fərdi terapiyada problemli fikirləri müəyyən etmək, real və müsbət düşüncələri daxil etmək, desensibilizasiya etmək, özünə inam qazanmaq üçün üsullar tətbiq edilir."
              }
            />
          </div>{" "}
          <div>
            <Block
              title={"Qrup terapiyalarının faydalı olduğu məqamlar:"}
              description={
                "   Əhval pozğunluqları (depressiya, bipolyar pozğunluq;\n" +
                "            Travma sonrası stress pozğunluğu (təcavüz, zorlama, qəza, işgəncə, aldatma, zorakılıq, ayrılıq kimi travmatik hadisələr);\n" +
                "            Kədər və itki problemləri;\n" +
                "            Uşaqlıq travmaları;\n" +
                "            Narkotik və içki aludəçiliyi;\n" +
                "            Qidalanma və yuxu pozğunluqları;\n" +
                "            Xroniki fiziki vəziyyəti olan insanların yaşadığı problemlər;\n" +
                "            Xroniki xəstəlikləri olan insanların qohumlarına dəstək və yardım;\n" +
                "            İkitərəfli münasibətlərdə problemlər (ailə, həyat yoldaşı, məktəbdə, işdə və ya sosial mühitdə);\n" +
                "            Valideyn-övlad münasibətləri və valideyn tərbiyəsi;\n" +
                "            Dəyişikliklərə uyğunlaşma problemləri və bu problemlərin öhdəsindən gələ bilməmək."
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

export default GroupTherapies;
