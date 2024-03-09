import React, { FC, useState } from "react";
import coachingImage from "@/assets/our-services/coaching.png";
import MainBlock from "@/components/screens/our-services/MainBlock";
import Image from "next/image";
import clsx from "clsx";
import AdditionalBlock from "@/components/screens/our-services/AdditionalBlock";
import { GreenCircle, RedCircle } from "@/components/icons";
export interface CoachingServiceProps {
  sectionRef: React.MutableRefObject<HTMLDivElement>;
}

const CoachingService: FC<CoachingServiceProps> = ({ sectionRef }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div ref={sectionRef}>
      <MainBlock color={"#FFC600"} size={2}>
        <div
          className={
            "flex justify-between mb:flex-row flex-col gap-10 mb:gap-20 "
          }
        >
          <div>
            <h2 className={"text-[#505050] text-[44px] font-bold mb-4"}>
              Kouçinq xidməti
            </h2>
            <h4 className={"text-24 text-white font-semibold leading-10 mb-4"}>
              Kouçinq insanları anlamaq mərhələsindən, dərk etmə mərhələsinə
              qaldırmağa təkan verən emosional zəka laboratoriyasıdır.
            </h4>
            <p
              className={clsx(
                !open && " line-clamp-6",
                "font-medium leading-9 mb-4 text-bodyText  ",
              )}
            >
              Tütün məmulatlarının üzərindəki “Siqaret Sizin sağlamlığınıza
              zərər vurur” ifadəsini hər gün oxuyanlar onun zərərli olduğunu
              bilənlər, onu tərgidən və ya ümumiyyətlə çəkməyənlər isə onun
              zərərli olduğunu “dərk” edən insanlardır. Kouçinq insanları
              anlamaq mərhələsindən, dərk etmə mərhələsinə qaldırmağa təkan
              verən emosional zəka laboratoriyasıdır. Bu gün yerli bazarda
              səsləndirilən “Kouçinq pul tələsidir”, Öz həyatında və biznesində
              uğur əldə edə bilməyənlərin başqalarına tövsiyələr verməsi
              absurddur” kimi ifadələri eşitmək bizim üçün də ağırdır. Lakin biz
              anlayırıq ki, bunun qarşısının alınmasının tək yolu isə insanlara
              kouçinq ilə bağlı doğru istiqamət verərək, onları
              maarifləndirməkdən keçir.
            </p>
            <button
              className={"text-white font-semibold "}
              onClick={() => setOpen((prevState) => !prevState)}
            >
              {open ? "Bağla" : "Davamını Oxu"}
            </button>
          </div>
          <Image
            src={coachingImage}
            alt={"banner"}
            className={
              "rounded-full max-w-[440px] max-h-[440px] mb:w-[440px] mb:h-[440px]  self-end object-cover "
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
          <div className={"min-[900px]:w-[420px] "}>
            <Block
              title={"Sizin mentorunuz yox, \n" + "kouçunuz olmaqda maraqlıyıq"}
              description={
                "Mentorluq bir insanın daha çox rasional məntiqi, yəni texniki biliklərinin inkişaf etdirilməsi üzərində qurulmuşdur. Siz, xəzinədar peşəsi üzrə ixtisaslaşmaq istəyirsiniz. Bu sahə üzrə mentorunuz olan şəxs isə sahənin standart və biliklərini, o cümlədən gözlə görünməyən tərəfləri ilə bağlı praktik təcrübələrini sizə ötürür."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[520px] min-[900px]:self-end"}>
            <Block
              title={
                "Kouçinqdə suallar, \n" + "mentorluqda isə hazır cavablar var"
              }
              description={
                "Kouçinq duyğularımız, düşüncələrimiz, davranış və vərdişlərimizlə bağlıdır. Biz daha çox suallar verir, düşünməyə təşviq edir, beyninizi provokasiya etməklə özünüz həll yolları taparaq nəticəyə çatmağınıza təkan veririk."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[420px]"}>
            <Block
              title={"Biz İQ deyil, \n" + "EQ-nu inkişaf etdirin"}
              description={
                "İndiki dövrdə İQ insanın potensialını tam aşkarlamır. Hər bir insan ilk növbədə içindəki duyğuları birinci anlamalı və daha sonra idarə etməyi bacarmalıdır. Bunları təkmilləşdirməyiniz növbəti mərhələdə cəmiyyət və ətrafdakı insanların duyğularını anlamaq və idarə etməyinizə (empati qurmaq) imkan yaradacaq."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[520px] self-end"}>
            <Block
              title={"100, 500, 2500 saat"}
              description={
                "Bizim məqsədimiz Sizin saatlarınızı oğurlayıb, öz kouçlarımızın Beynəlxalq Kouç Federasiyası tərəfindən təyin edilmiş peşəkarlıq səviyyəsinin artırılması məqsədi ilə təyin edilmiş saatları doldurmaq istiqamətində istifadə etmək deyil. Məqsədimiz özünə keyfiyyətli vaxt ayırmaq, özünüzü anlamağa çalışmaq və dərk etməklə, yenilənmiş insana çevirməkdir."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[864px]"}>
            <Block
              title={"Kamilliyə çatın"}
              description={
                "Kouçinq həyatında müsbət dəyişiklik etmək və kamilliyə çatmaq istəyən insanların seçimidir. Arzuladığınız mərhələyə çatmaq üçün isə Sizə bu işin texnikalarını bilən və güclü suallar verərək düşünməyə vadar edən insanlar lazımdır. Yalnız bu yolla dərk etmə xususiyyətlərinizi genişləndirərək kamilliyə çata bilərsiniz."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[864px] self-end"}>
            <Block
              title={"3 növ insan"}
              description={
                "Hər bir insan dünyaya gəldikdə yaradıcıdır, bacarıqlıdır və bütündür. Yaradıcı insan - öz problemlərinə həll tapmaq qabiliyyətindədir. Bacarıqlı insan - Kim olursa olsun mütləq onun bir bacarığı vardır. Bütün insan - Öz mənfi və müsbətlərini sorğulamaqla daim inkişaf edən bir insandır. Biz Sizin daxilinizdə gizli yatan insan növünü kəşf edib, onu inkişaf etdirmək istəyirik."
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
export default CoachingService;
