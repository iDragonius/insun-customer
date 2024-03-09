import React, { FC, useState } from "react";
import MainBlock from "@/components/screens/our-services/MainBlock";
import clsx from "clsx";
import psychologistBg from "@/assets/our-services/psychologist-bg.png";
import Image from "next/image";
import AdditionalBlock from "@/components/screens/our-services/AdditionalBlock";
export interface PsychologistServiceProps {
  sectionRef: React.MutableRefObject<HTMLDivElement>;
}

const PsychologistService: FC<PsychologistServiceProps> = ({ sectionRef }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div ref={sectionRef}>
      <MainBlock color={"#115CB4"} size={1}>
        <div className={"relative"}>
          <h2
            className={"text-white text-[44px] font-bold leading-[76px] mb-4"}
          >
            Psixoloq xidməti
          </h2>
          <h4 className={"text-24 text-white   leading-9 font-semibold mb-10"}>
            Dərd paylaşanda azalır, sevinc isə paylaşanda çoxalır. Odur ki, dərd
            çəkmək üçün hələ çox gəncsiniz.
          </h4>
          <p
            className={clsx(
              !open && " line-clamp-5",
              " text-white leading-9  font-semibold mb-8",
            )}
          >
            Biz öz travmalarımızı cəmiyyətdə gizlətdiyimiz kimi onu psixoloqla
            ünsiyyət zamanı da gizlətməyə çalışırıq. Daha sonra isə bu peşənin
            faydasız olduğunu iddia edirik. Halbuki toplum olaraq psixoloqa
            gedib dərdimizin 30%-ni danışıb 70%-ni psixoloqa ağır gəlməsin deyə
            gizlətməyə çalışırıq. Bu yerdə İsveçrə psixoloqunun səsləndirdiyi
            fikri Sizə çatdırmaq istəyirik. “Biz uşaqlıq travmalarımızı müalicə
            edib bitirmədiyimiz üçün onlara qismət, tale, alın yazısı adı
            verərək özümüzü aldadırıq. Nəticədə isə özümüzdə olan travmaları öz
            gələcək nəsillərimizə ötürməkdə davam edirik. Yaşlı nəsil və
            valideynlərimizin “Bizim dövrümüzdə heç kim psixoloqa getməyib. Bizə
            ki, heç nə olmayıb. Siz niyə bu qədər zəif görünürsünüz?” sualının
            da cavabını vermək istəyirik. Əvvəllər insanlar daha güclü xarakterə
            malik olması, kişilərin testosteron səviyyəsinin indiki kişilərə
            nisbətən 4 dəfə çox olması (bu gün isə 14-15 nanomil təəssüf ki,
            normal sayılır) bir neçə səbəbləri var. Bizim nənə və babalarımızın
            yaşadıqları dövrdə texnologiyanın zəif inkişaf etməsi minimum
            kontakt və informasiya azlıqları olduqları üçün təbiətlə iç-içə və
            daha orqanik ortamda yaşayırdılar. Tələblər isə qidalanmaq, gəzmək,
            çoxalmaq, intim münasibətlər kimi çox sadə idi.
          </p>

          <button
            className={"text-[#2BAFD9] font-semibold "}
            onClick={() => setOpen((prevState) => !prevState)}
          >
            {open ? "Bağla" : "Davamını Oxu"}
          </button>
        </div>
      </MainBlock>
      <AdditionalBlock>
        <div className={"relative   flex justify-center mb-10"}>
          <Image
            src={psychologistBg}
            alt={"banner"}
            className={"w-full h-full object-cover  absolute z-[40]"}
          />
          <div className={"z-50 relative w-full "}>
            <div className={" py-14 sm:pr-16 sm:pl-16 px-4"}>
              <h2
                className={
                  "text-bodyText text-28 sm:text-[44px] mb-10 font-bold"
                }
              >
                Biz sizə hansı dəstəyi göstərməyə hazırıq?
              </h2>
              <div
                className={
                  "flex justify-between min-[950px]:flex-row flex-col gap-8 mb-8"
                }
              >
                <Block
                  title={"Qorxu və Travmalarınızı"}
                  description={
                    "Bu gün atdığımız addımlar və etdiymiz hərəkətlər uşaqlıqda aldığımız travmalar nəticəsidir. Ona görə də biz keçmişinizə baxıb, oradakı boşluqları aradan qaldıraraq gələcəyinizi doğru qurmağa dəstək oluruq. Odur ki, həyatınızı qorxu və travmalar deyil, sevinc və xoşbəxtlik üzərində qurun."
                  }
                />
                <Block
                  title={"Ailə psixoloqu"}
                  description={
                    "Nəsillərarası kommunikasiyanın pozulması, empati hissinin olmaması gördüyümüz işlərdə buraxdığımız səhvlərə təsir edir. Ailə psixoloqu üzvlər arasındakı anlaşılmazlıqların, münaqişə və problemlərin həllinə çalışan, kömək göstərən və kənar baxışı olan bir insandır. Bu gün isə hər kəsin (dost/rəfiqə kimi) kənar baxışa ehtiyacı var."
                  }
                />
              </div>
              <Block
                title={"Şəxsi və sevgi münasibətləri"}
                description={
                  "Özü və sevdiyi insan ilə yola gedə bilməyən insanların münasibətlərində yaranan xoşagəlməz hallar hər iki tərəf üçün bir siqnaldır. Bu siqnalı vaxtında görüb, həll edə bilməyənlər ailə masasına oturduqdan sonra daha da aqressivləşirlər. Aqressiyanın sonu isə iki qat travmadır. Münasibətləriniz Sizin üçün önəmli və müqəddəsdirsə, şəhərdə əl-ələ gəzdiyiniz kimi əl-ələ tutub mütləq psixoloqun yanına gedin ki, sabah o öyrəşdiyiniz əli buraxmağa məcbur olmayasınız."
                }
              />
            </div>
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
  return (
    <div
      className={"bg-white px-8 py-10 rounded-[8px] border border-main w-full"}
    >
      <h3 className={"text-24 leading-8 font-bold mb-4 text-bodyText"}>
        {title}
      </h3>
      <p className={"text-bodyText font-medium text-16"}>{description}</p>
    </div>
  );
};
export default PsychologistService;
