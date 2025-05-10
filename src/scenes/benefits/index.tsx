import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from './Benefit';



const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Son Teknoloji Tesisler",
    description: "Antrenman deneyiminizi zirveye taşıyacak ileri düzey ekipmanlar, ferah alanlar ve konforlu spor ortamı sunuyoruz.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Yüzlerce Farklı Ders Seçeneği",
    description: "Yoga’dan HIIT’e, dans’tan spinning’e kadar geniş ders yelpazemizle her seviyeye ve her zevke hitap ediyoruz.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Uzman ve Profesyonel Eğitmenler",
    description: "Alanında uzman eğitmenlerimiz hedeflerinize ulaşmanız için sizinle birebir ilgilenir.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>SADECE BİR SPOR SALONUNDAN DAHA FAZLASI.</HText>
          <p className="my-5 text-sm">
            Dünya standartlarında spor ekipmanları, profesyonel eğitmenler ve zengin ders programlarıyla seni hedeflerine ulaştırmak için buradayız.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MİLYONLARCA MUTLU ÜYE{" "}
                    <span className="text-primary-500">FORMDA</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Kendinizi fiziksel ve zihinsel olarak yeniden keşfedeceğiniz bir yolculuğa hazır olun. Motivasyonunuzu artıracak ortamımız ve bireysel ihtiyaçlarınıza özel çözümlerimizle buradayız.
              </p>
              <p className="mb-5">
                Uzman kadromuz eşliğinde vücut direncinizi artırırken enerjinizi de dengeleyin. Sadece spor yapmıyor, yaşam kalitenizi artırmak için birlikte hareket ediyoruz.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Hemen Katıl
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
