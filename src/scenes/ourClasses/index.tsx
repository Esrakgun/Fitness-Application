import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/Htext";
import Class from "./Class";

// Sınıf bilgilerini içeren dizi
const classes: Array<ClassType> = [
  {
    name: "Ağırlık Antrenmanı Sınıfları",
    description:
      "Gelişmiş kas yapısı ve güç için özel olarak tasarlanmış programlar. Her seviyeye uygun egzersizler içerir.",
    image: image1,
  },
  {
    name: "Yoga Sınıfları",
    image: image2,
  },
  {
    name: "Karın ve Core Sınıfları",
    description:
      "Merkez bölgeyi hedef alan, denge ve dayanıklılığı artıran etkili egzersizler içerir.",
    image: image3,
  },
  {
    name: "Macera Sınıfları",
    description:
      "Sınırlarını zorlamak isteyenler için eğlenceli ve zorlu açık hava aktiviteleriyle dolu dersler.",
    image: image4,
  },
  {
    name: "Fitness Sınıfları",
    image: image5,
  },
  {
    name: "Antrenman Sınıfları",
    description:
      "Genel kondisyon, hız ve çeviklik geliştirmeye yönelik kapsamlı antrenman programları.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>SINIFLARIMIZ</HText>
            <p className="py-5">
              Her seviyeye ve hedefe uygun egzersiz seçenekleri sunuyoruz. İster rahatlatıcı bir yoga dersi, ister tempolu bir ağırlık antrenmanı arıyor olun, burada kendinize uygun bir sınıf mutlaka bulacaksınız.
            </p>
          </div>
        </motion.div>

        {/* Sınıfları yatay kaydırılabilir liste olarak göster */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
