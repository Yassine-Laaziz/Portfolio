import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import styles from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

interface cardProps {
  index: number;
  title: string;
  icon?: string;
}
const ServiceCard = ({ index, title, icon }: cardProps) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        {icon && (
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
        )}

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(null, "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome, very nice to see you!! you can call me <strong>Yassine</strong>,
        I'm a skilled software engineer with about 4
        years of experience. I work full-stack, but I specialize in
        front-end, and by thorough communication, I ensure that your requirements
        come first and are incorporated into the development process flawlessly.
        I stay up to date with the industry standards to deliver scalable,
        performant web applications. If you are looking for a talented developer
        who can bring valuable skills to your team, I would love to discuss
        potential opportunities.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
