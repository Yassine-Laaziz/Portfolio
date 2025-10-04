import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { contracts } from "../constants";
import ProjectCard from "./ProjectCard";
import { SectionWrapper } from "../hoc";

function Contracts() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn(null, "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I collaborated with clients from diverse industries and excelled at
          understanding technical requirements and delivering quality work
          within agreed timelines; My ability to adapt to different project
          requirements and work seamlessly with tech teams made me a reliable
          partner and leader.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 md:gap-16 lg:gap-x-20 justify-center">
        {contracts.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Contracts, "contracts");
