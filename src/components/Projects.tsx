import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants'
import ProjectCard from './ProjectCard'
import { SectionWrapper } from '../hoc'

function Projects() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My learning</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn(null, '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following section are learning projects that I made that highlight my expertise in different regions of software development, 
          from interactive 3D web experiences to back-end systems. 
          Each project demonstrates my passion for innovative ideas and modern technologies. By exploring the Projects section, 
          you can see firsthand my problem-solving skills and attention to detail in translating ideas into functional applications, each 
          project represents a unique challenge and a testament to my commitment to excellence in software.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
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

export default SectionWrapper(Projects, 'projects')
