import { motion } from "framer-motion";
import styles from "../styles";
import { Github, Linkedin, Sparkles } from "lucide-react";
import { Resume } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row flex-shrink items-start gap-5`}
      >
        <motion.div className="flex justify-between flex-col flex-nowrap font-bold leading-[0.9] tracking-tight relative">
          {/* text with 2 spinning icons around it */}
          <div className="flex gap-2">
            <motion.div
              className="w-fit h-fit"
              initial={{ y: 20 }}
              whileInView={{ y: 0, transition: { delay: 0, duration: 0.2 } }}
              viewport={{ once: true }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-indigo-400" size={24} />
            </motion.div>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
              className="ml-2 text-indigo-400 font-bitcount-ink min-w-fit text-lg md:text-2xl font-medium tracking-[0.2em] uppercase"
            >
              A Software engineer
            </motion.span>
          </div>

          <motion.span
            className="text-6xl md:text-8xl lg:text-9xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", delay: 0.5, duration: 2 }}
            viewport={{ once: true }}
          >
            Creating an experience
          </motion.span>
          <div className="mt-10 flex flex-wrap gap-3 text-gray-300 items-center">
            <motion.a
              href="https://github.com/Yassine-Laaziz?tab=repositories"
              referrerPolicy="no-referrer"
              target="_blank"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="hover:border-[#9ca3af] border cursor-pointer relative rounded-md border-gray-600 h-10 w-10 backdrop-blur-sm"
            >
              <Github className="absolute w-full h-full top-0 left-0 p-1" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yassine-swe"
              referrerPolicy="no-referrer"
              target="_blank"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.75 }}
              viewport={{ once: true }}
              className="hover:border-[#9ca3af] border cursor-pointer relative rounded-md border-gray-600 h-10 w-10 backdrop-blur-sm"
            >
              <Linkedin className="absolute w-full h-full top-0 left-0 p-1" />
            </motion.a>
            <a href={Resume} download="Resume.pdf">
              <motion.button
                className="ml-2 border border-gray-600 px-8 py-4 rounded-full font-semibold backdrop-blur-sm"
                initial={{
                  x: -20,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 0.5,
                    type: "spring",
                  },
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{
                  borderColor: "#9ca3af",
                  transition: {
                    delay: 0,
                    duration: 0,
                  },
                }}
                viewport={{ once: true }}
              >
                Download resume
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
