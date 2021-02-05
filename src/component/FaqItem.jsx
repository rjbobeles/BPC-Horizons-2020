import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { IntersectionContext } from './IntersectionObserver'
import PropTypes from 'prop-types'

FaqItem.propTypes = {
  q: PropTypes.string,
  a: PropTypes.string,
  a2: PropTypes.string,
}

export default function FaqItem(props) {
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
    <motion.div
      className="item mb-8 sm:mb-16"
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ type: 'spring', damping: 30 }}
      variants={variants}
    >
      <h5 className="text-xl sm:text-2xl lg:text-3xl mb-5 sm:mb-8 font-bold">
        {props.q}
      </h5>
      <p className="text-sm sm:text-base">{props.a}</p>
      <p className="text-sm sm:text-base mt-5">{props.a2}</p>
    </motion.div>
  )
}
