import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github } from "../assets";
import { fadeIn } from "../utils/motion";
import { projectT } from "../../types";

interface cardProps extends projectT {
  index: number;
}
export default function ProjectCard({
  index,
  name,
  description,
  stack,
  tags,
  image,
  website_link,
  source_code_link,
}: cardProps) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        transitionSpeed={450}
        scale={1}
        className="z-10 bg-tertiary p-5 rounded-2xl sm:w-[420px] w-full flex gap-2 min-h-full"
      >
        <div className="flex-1">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
              {/* Website SVG */}
              {website_link &&
                <div
                  onClick={() => window.open(website_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div> 
              }
              {/* Github png */}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] inline-block">
              {name}
            </h3>

            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-2">
          {stack?.map((item, i) => (
            <img
              className="w-10 h-10 object-contain"
              key={`${name}-stack-${i}`}
              src={item.img}
              alt={item.alt}
            />
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}
