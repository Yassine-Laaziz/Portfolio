import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { scrollCircleText } from "../assets";

const ScrollLoading = () => {
  const [progress, setProgress] = useState({ smallCircle: 180, BigCircle: 0, arrow: 0 });
  const { scrollYProgress } = useScroll();

  const SmoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useMotionValueEvent(SmoothYProgress, "change", () => {
    setProgress({
      smallCircle: (SmoothYProgress.get() * 20) + 180,
      BigCircle: SmoothYProgress.get() * -200,
      arrow: SmoothYProgress.get() * 360,
    });
  });

  return (
    <div className="fixed z-50 bottom-8 right-12 md:bottom-28 md:right-24">
      <div className="top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-fit h-fit bg-red">
        {/* Small Circle */}
        <motion.div
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-20 w-20 inline-block"
          style={{ rotate: progress.smallCircle, translate: "-50% -50%" }}
        >
          <img src={scrollCircleText} className="h-full w-full" />
        </motion.div>
        {/* Big Circle */}
        <motion.div
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-36 w-36 inline-block"
          style={{ rotate: progress.BigCircle, translate: "-50% -50%" }}
        >
          <img src={scrollCircleText} className="h-full w-full" />
        </motion.div>
        {/* Arrow */}
        <motion.div style={{ rotate: progress.arrow }}>
          <svg
            className="absolute bottom-0 left-0 -translate-x-1/2 h-20 w-fit fill-white"
            viewBox="0 0 9.28 87.05"
          >
            <g>
              <rect x="4.39" y="18.26" width=".5" height="68.78"></rect>
              <path d="M4.64,19.42L0,13.16,4.64,0l4.64,13.16-4.64,6.26ZM.9,13.02l3.74,5.05,3.74-5.05L4.64,2.41.9,13.02Z"></path>
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollLoading;
