import { motion } from "framer-motion";

import styles from "../styles";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row flex-shrink items-start gap-5`}
      >
        <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight relative">
          {/* text with 2 spinning icons around it */}
          <div className="flex gap-2" id="top-text">
            <motion.div
              className="w-fit h-fit"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-indigo-400" size={24} />
            </motion.div>
            <span className="text-indigo-400 font-bitcount-ink min-w-fit text-lg md:text-2xl font-medium tracking-[0.2em] uppercase">
              A Software engineer
            </span>
          </div>

          <motion.span
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5, duration: 2 }}
            viewport={{ once: true}}
          >
            Creating an experience
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
