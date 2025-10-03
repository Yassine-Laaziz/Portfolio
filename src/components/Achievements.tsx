import { motion } from 'framer-motion'

import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { achievementT } from '../../types'
import styles from '../styles'
import { achievements } from '../constants'

const Feedbacks = () => {
  return (
    <div className={`mt-12 border-2 border-purple-900 rounded-[20px]`}>
      <div className={`bg-tertiary bg-opacity-60 rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Some of my</p>
          <h2 className={styles.sectionHeadText}>Achievements in this industry.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex justify-center flex-wrap gap-7`}>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={`achievement${index}`}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, 'achievements')

function AchievementCard({ index, age, achievement, description, keyPoints }: achievementT & { index: number }) {
  return (
    <motion.div
      variants={fadeIn(null, 'spring', index * 0.5, 0.75)}
      className='relative bg-black-200 p-10 rounded-3xl sm:max-w-[550px] w-full'
    >
      <p className={`${styles.sectionSubText} text-lg`}>At the age of</p>
      <h2 className='font-bitcount-ink text-7xl sm:text-9xl text-center text-purple-900 [textShadow:5px_5px_10px] mb-4'>{age}</h2>
      <h3 className='text-3xl text-center text-white mb-4'>{achievement}</h3>
      <p className='text-white mb-4'>{description}</p>
      <ul className='text-white'>
        {keyPoints?.map((keypoint, i) => (
          <li
            key={`${achievement} keypoint ${i}`}
            className='flex items-center'
          >
            <span className='mr-2'>+</span>
            {keypoint}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
