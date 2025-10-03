import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { contracts } from '../constants'
import ProjectCard from './ProjectCard'
import { SectionWrapper } from '../hoc'

function Contracts() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn(null, '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here I collaborated with clients from diverse industries and excelled at understanding technical 
          requirements and delivering quality work within agreed timelines; with a strong focus on 
          delivering tailored solutions and by maintaining effective
          communication throughout the project period, I ensured that clients were satisfied with the results and had achieved their desired
          outcomes, my ability to adapt to different project requirements and work seamlessly with tech and non-tech teams made me a reliable and
          valuable partner.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-16 gap-x-20 justify-center'>
        {contracts.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Contracts, 'contracts')
