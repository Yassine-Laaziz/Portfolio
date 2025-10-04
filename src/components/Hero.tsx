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
            <h2 className="text-indigo-400 min-w-fit text-lg md:text-2xl font-medium tracking-[0.2em] uppercase">
              A Software engineer
            </h2>
            {/* <motion.div
              className="w-fit h-fit"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Code className="text-purple-400" size={24} />
            </motion.div> */}
          </div>
          {/* Animated Text: "creating" */}
          <motion.div
            className="ml-2 md:ml-8 lg:ml-16"
            initial={{ opacity: 0, x: -200, rotateX: 90, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, rotateX: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 0px #fff",
                  "0 0 20px #6366f1",
                  "0 0 0px #fff",
                ],
              }}
              transition={{
                duration: 2,
                delay: 0.8,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              Creating
            </motion.span>
          </motion.div>

          {/*  Animated Text: "An" */}
          <motion.div
            className="ml-4 md:ml-12 lg:ml-28 relative"
            initial={{
              opacity: 0,
              left: -100,
              filter: "blur(20px)",
            }}
            animate={{ opacity: 1, left: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.5,
              delay: 0.6,
              type: "spring",
              stiffness: 80,
            }}
          >
            An
            {/* Sparkle effects */}
            <motion.div
              className="absolute -top-2 -right-2 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full"
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 360],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            />
          </motion.div>
          {/* Animated Text: "Experience" */}
          <motion.div
            className="ml-5 md:ml-16 lg:ml-32"
            initial={{ opacity: 0, x: 200, rotateX: -90, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, rotateX: 0, filter: "blur(0px)" }}
            transition={{
              duration: 1.2,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.span
              className="relative inline-block font-bitcount-ink font-normal text-purple-900"
              animate={{
                scale: [1, 1.01, 1],
                textShadow: [
                  "0 0 0px rgb(88 28 135)",
                  "0 0 20px rgb(88 28 135)",
                  "0 0 0px rgb(88 28 135)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            >
              Experience
            </motion.span>
          </motion.div>
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
