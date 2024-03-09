import React, { FC } from "react";
import MainBlock from "@/components/screens/our-services/MainBlock";
import Image from "next/image";
import accessBarImage from "@/assets/our-services/access-bar.png";
import { GreenCircle, RedCircle } from "@/components/icons";
import AdditionalBlock from "@/components/screens/our-services/AdditionalBlock";

export interface AccessBarProps {
  sectionRef: React.MutableRefObject<HTMLDivElement>;
}

const AccessBar: FC<AccessBarProps> = ({ sectionRef }) => {
  return (
    <div ref={sectionRef}>
      <MainBlock color={"#FF5A00"} size={2}>
        <div
          className={
            "flex justify-between  mb:flex-row flex-col gap-10 mb:gap-20 "
          }
        >
          <div>
            <h2 className={"text-white text-[44px] font-bold mb-4"}>
              Access Bar
            </h2>
            <h4 className={"text-24 text-white font-semibold leading-10 mb-4"}>
              Access Bars bir masaj növüdürmü? Bu suala cavab vermək olduqca
              çətindir. Proseslər masajı xatırlatsa da, bədənin ancaq beyin
              nahiyəsində həyata keçirilməkdədir.
            </h4>
          </div>
          <Image
            src={accessBarImage}
            alt={"banner"}
            className={
              "rounded-full w-full  h-full self-end max-w-[440px] max-h-[440px] mb:w-[440px] mb:h-[440px]"
            }
          />
        </div>
      </MainBlock>
      <AdditionalBlock>
        <div className={"flex flex-col gap-6 min-[900px]:px-6"}>
          <div className={"min-[900px]:w-[420px] "}>
            <Block
              title={"32 nöqtənin gücü"}
              description={
                "Həyatımızda daha çox qabartdığımız duyğular, düşüncələr, inanc və qərarlar bağlı məlumatlar beynimizdə depolanır. Access Bars yanaşmasına görə bütün bunların hamısı beyində bir elektrik yükü formalaşdırır. Bu elektrik yükü isə beynimizin 32 enerji nöqtəsində toplanır. Access Bars prosedurlarının məqsədi həmin nöqtələr üzərində işləmək və orada formalaşan maqnit sahəsini sərbəst buraxmaqdır."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[520px] min-[900px]:self-end"}>
            <Block
              title={"Bu bir utopiya deyil, həqiqətdir"}
              description={
                "Bu metod Sizə utopiya kimi gəlirsə, bir neçə seansdan sonra fikrinizi dəyişməyə də hazır olun. Niyə belə əminliklə deyirik? İnsun Yaşam Mərkəzi markası üzərində çalışarkən hər xidmət növünün effektivliyini dəyərləndirmək üçün 3 fərqli peşələrdə çalışan insanlardan ibarət fokus qrup yaratmışdıq. Sadə vətəndaşlardan ibarət olan fokus qrupun seans sonrası aşağıdakı təəssüratlarını Sizinlə paylaşırıq:"
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[720px] mx-auto"}>
            <Block
              title={"Stress – Taksi sürücüsü \n" + "(32 yaş)"}
              description={
                "Bir çox hallarda insanların artıq çəki yığma səbəbi sadəcə disiplinsiz həyat və stress səviyyəsinin yüksək olması ilə əlaqədar olur. Yanlış araşdırmalar və mütəxəssis olmayan dost-tanışın tövsiyələrinə qulaq asmaq isə vəziyyəti daha da gərginləşdirir. Bu məsələni həll etmək üçün həm psixoloq, həm də dietoloqla birgə hərəkət edirik."
              }
            />
          </div>{" "}
          <div className={"min-[900px]:w-[520px] self-end"}>
            <Block
              title={
                "Aqressivlik hissi – Müştəri xidmətləri üzrə mütəxəssis (27 yaş)"
              }
              description={
                "“Özümdən asılı olmayaraq gün ərzində hədsiz çox aqressiv oluram. Sakitləşdikdən sonra isə xətrinə dəydiyim insanlardan üzr istəyirdim. Bunu heç bir formada nəzarətdə saxlaya bilmirdim. Nəticədə insanların bir çoxu məndən uzaqlaşır, digərləri isə məni yola verirdilər. Məlum oldu ki, beynimdə olan mənfilərlə yükləndiyi üçün xoşbəxtlik hormonları ifraz edə bilmirdi. Seanslardan sonra ətrafımda baş verən neqativ hadisələri görməzdən gəlməyə başladım. Daha az deyinib, daha çox dərk etməyə başladım.”"
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
export default AccessBar;
