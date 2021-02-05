import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { IntersectionContext } from './IntersectionObserver'
import PropTypes from 'prop-types'

MediaTypes.propTypes = {
  i: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
}

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
      className="entry flex flex-row items-stretch mb-12 sm:mb-16"
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ type: 'spring', damping: 20 }}
      variants={variants}
    >
      <div className={`photo flex-shrink-0 ${props.illus}`}></div>
      <div className="text pl-6 sm:pl-12 flex flex-col justify-center lg:justify-start xl:justify-center text-roast">
        <h5 className="text-2xl xl:text-3xl mb-2">{props.title}</h5>
        <p className="text-sm sm:text-base">{props.description}</p>
        <p className="text-sm sm:text-base mt-5">{props.description2}</p>
      </div>
    </motion.div>
  )
}
