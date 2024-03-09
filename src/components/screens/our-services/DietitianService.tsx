import React, { FC, useState } from "react";
import MainBlock from "@/components/screens/our-services/MainBlock";
import Image from "next/image";
import dietitianImage from "@/assets/our-services/dietolog.png";
import clsx from "clsx";
import { GreenCircle, RedCircle } from "@/components/icons";
import AdditionalBlock from "@/components/screens/our-services/AdditionalBlock";

export interface DietitianServiceProps {
  sectionRef: React.MutableRefObject<HTMLDivElement>;
}

const DietitianService: FC<DietitianServiceProps> = ({ sectionRef }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div ref={sectionRef}>
      <MainBlock color={"#0085FF"} size={2}>
        <div
          className={
            "flex justify-between mb:flex-row flex-col gap-10 mb:gap-20 "
          }
        >
          <div>
            <h2 className={"text-white text-[44px] font-bold mb-4"}>
              Dietoloq xidməti
            </h2>
            <h4 className={"text-24 text-white font-semibold leading-10 mb-4"}>
              Bu sahə üzrə o qədər informasiya çirkliliyi var ki, doğru və
              yanlışlıqlar arasında qalmağın özü belə insanı çaşdırır və bu
              sahənin təhlükədə olan cəmiyyət üçün ciddi fayda verəcəyinə şübhə
              yaradır.
            </h4>
            <p
              className={clsx(
                !open && " line-clamp-6",
                "font-medium leading-9 mb-4 text-white  ",
              )}
            >
              Sizi informasiya çirkliliyi və dilemmalar arasında tək qoymamaq
              üçün bu bölmənin məlumatlarını onlarla birgə hazırlamağa qərar
              verdik. Bu yanaşma həm işimizə necə dərindən yanaşdığımızı, həm də
              cəlb etdiyimiz peşəkarların öz işlərinə yanaşmalarını ortaya
              qoyacaq. Bir dietoloqumuzun səsləndirdiyi fikrə əsasən bu gün
              dünya əhalisinin 80%-də maqnezium çatışmazlığı mövcuddur.
              Maqnezium isə bədənimizdə olan 600-dən çox prosesdə birbaşa olaraq
              iştirak edir. Qısa olaraq fikri ifadə etsək, insan orqanizmində
              bir və ya bir neçə maddənin çatışmazlığı belə onun kökəlməsinə
              səbəb ola bilər. Dünyada dietoloqları əvvəl az-az, lakin tez-tez
              yeyin deyirdilərsə, bu gün interval aclığa keçid etməyi tövsiyə
              edirlər. Bunun səbəbini isə müasir insanın fiziki aktivliyinin,
              nənə-babalarımızın dövrü ilə müqayisədə az, stress səviyyəsinin
              isə o dövrlərə nisbətən çox olması ilə əlaqələndirirlər. Digər bir
              dietoloqumuzun araşdırmaları və gəldiyi nəticə bakteriyalarla
              bağlıdır. “Bizim nə yeyəcəyimizə qərar verdirən əslində beyin
              deyil, bağırsaqdakı bakteriyalardır. Hər bir insanın bağırsaq
              mikro florası barmaq izi qədər fərqlidir. Normal fəaliyyəti olan
              bağırsaqlarda yaşayan bakteriyaların 85%-i yaxşı, 15%-ni pis
              bakteriyalar təşkil etməlidir. Əgər biz çips, qazlı içki,
              şirniyyat kimi zərərli qidalar istəyiriksə, deməli pis
              bakteriyaların bağırsaqdakı payı çoxluq təşkil edir.
              Dietoloqlarımız arasındakı faydalı müzakirədən belə bir nəticə
              çıxartdıq ki, ətafımızda hər şeyi yeyib, amma heç bir zaman
              kökəlməyən dostumuzun sirri onun bazal metobalizmasının sürətli
              işləməsi ilə bağlıdır. İnsanlarda yaş artıqca isə bazal
              metobalizma 3-5% azalır. İnsun Yaşam Mərkəzi olaraq “Sizə onu
              yemə! Bunu yemə!” deməklə düşməninizə çevrilmək istəmirik. Bizim
              məqsədimiz Sizi sağlamlaşdırmaq və Sizin vasitənizlə gələcəkdə öz
              ətafınızdakı insanlara qida mədəniyyətini aşılamağınıza dəstək
              olmaqdır.
            </p>

            <button
              className={"text-white font-semibold "}
              onClick={() => setOpen((prevState) => !prevState)}
            >
              {open ? "Bağla" : "Davamını Oxu"}
            </button>
          </div>
          <Image
            src={dietitianImage}
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
            "mt-16 text-24 min-[900px]:text-[36px] min-[900px]:leading-[56px] font-bold text-bodyText px-8 mb-14"
          }
        >
          Niyə bizim mərkəzə gəlməyi təklif edirik?
        </h2>
        <div className={"flex flex-col gap-6 min-[900px]:px-6"}>
          <div className={"min-[900px]:w-[420px] "}>
            <Block
              title={"Araşdırırıq"}
              description={
                "Artıq çəkidən azad olmaq istəyən insanların ilk etdiyi səhv öz bədənləri ilə bağlı araşdırma etməmələridir. İnsanlar unudurlar ki, bir vitamin əskikliyini bərpa etməklə belə arıqlamaq mümkündür. Biz niyə kökəldiyinizi, nə qədər yağ, nə qədər əzələ kütləsi itirdiyinizi müəyyən etdikdən sonra çəki itirməyinizə kömək edəcəyik."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[520px] min-[900px]:self-end"}>
            <Block
              title={"Yanlış vərdişlər"}
              description={
                "Əvvəl biz vərdişlərimizi yaradırıq. Sonra isə vərdişlərimiz bizi yaradır. Arıqlama ilə bağlı Sizə deyilənləri və oxuyub yarımçıq sınaqdan keçirdiklərinizi unudun. Bizim dietoloqlar Sizi həm yanlış miflərdən, həm də yanlış vərdişlərdən xilas edəcəklər. Bundan xilas olmağınız üçün Sizi sadəcə dinləməyimiz yetərlidir."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[420px]"}>
            <Block
              title={"Psixoloji vəziyyət"}
              description={
                "Bir çox hallarda insanların artıq çəki yığma səbəbi sadəcə disiplinsiz həyat və stress səviyyəsinin yüksək olması ilə əlaqədar olur. Yanlış araşdırmalar və mütəxəssis olmayan dost-tanışın tövsiyələrinə qulaq asmaq isə vəziyyəti daha da gərginləşdirir. Bu məsələni həll etmək üçün həm psixoloq, həm də dietoloqla birgə hərəkət edirik."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[520px] min-[900px]:self-end"}>
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
export default DietitianService;
