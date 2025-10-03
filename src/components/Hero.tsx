import { motion } from "framer-motion";

import styles from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          {/* <Sparkles className="text-indigo-400" size={24} /> */}
        </motion.div>
        <span className="text-indigo-400 text-lg md:text-xl font-medium tracking-[0.2em] uppercase">
          Frontend Developer & 3D Artist
        </span>
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {/* <Code className="text-purple-400" size={24} /> */}
        </motion.div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
