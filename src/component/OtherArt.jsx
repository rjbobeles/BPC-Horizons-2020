import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { IntersectionContext } from './IntersectionObserver'

export default function MediaTypes(props) {
  const { inView } = useContext(IntersectionContext)

  const variants = {
    hidden: {
      y: '20px',
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 40,
      },
    },
    show: {
      y: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 40,
      },
    },
  }

  return (
    <motion.div
      className="entry other-art flex flex-row items-stretch mb-12 sm:mb-16"
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ type: 'spring', damping: 20 }}
      variants={variants}
    >
      <div className="photo flex-shrink-0 other"></div>
      <div className="text pl-6 sm:pl-12 flex flex-col justify-center lg:justify-start xl:justify-center text-roast">
        <h5 className="text-2xl xl:text-3xl mb-2 text-cocoa">
          Other forms of art
        </h5>
        <p className="text-sm sm:text-base text-kofi">
          Other visual arts submissions (ex. Sculptures or ceramics) may be
          rendered images, or photos of the scale model against a plain
          background.
        </p>
        <p className="text-sm sm:text-base mt-5 text-kofi">
          Meanwhile, other performing arts submissions (ex. Dance, theatre or
          magic) may be the trailers of your performance, or a video less than
          two (2) minutes, through a YouTube link. Preferably, include the
          poster of your event in your submission.
        </p>
      </div>
    </motion.div>
  )
}
