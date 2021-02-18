import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { IntersectionContext } from './IntersectionObserver'
import PropTypes from 'prop-types'

PhotoText.propTypes = {
  texta: PropTypes.string,
  textb: PropTypes.string,
}

export default function PhotoText(props) {
  const { inView } = useContext(IntersectionContext)

  const variants = {
    hidden: {
      y: '40px',
      opacity: 0,
    },
    show: {
      y: '0',
      opacity: 1,
    },
  }

  return (
    <div className="wrapper mx-auto flex flex-col md:flex-row items-center py-8 md:py-16">
      <div className="w-full sm:w-1/2 lg:w-1/2 flex flex-row justify-end md:pr-5">
        <motion.div
          className={`w-full photo mb-8 md:mb-0 ${props.illus}`}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ type: 'spring', damping: 40 }}
          variants={variants}
        ></motion.div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/2 md:pl-12">
        <motion.div
          className="w-full text-roast"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ type: 'spring', damping: 40, delay: 0.4 }}
          variants={variants}
        >
          <p className="mb-8">{props.texta}</p>
          <p>{props.textb}</p>
        </motion.div>
      </div>
    </div>
  )
}
