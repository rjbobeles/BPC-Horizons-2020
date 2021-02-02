import React from 'react'
import PropTypes from 'prop-types'

FaqItem.propTypes = {
  q: PropTypes.string,
  a: PropTypes.string,
  a2: PropTypes.string,
}

export default function FaqItem(props) {
  return (
    <div className="item mb-8 sm:mb-16">
      <h5 className="text-xl sm:text-2xl lg:text-3xl mb-5 sm:mb-8 font-bold">
        {props.q}
      </h5>
      <p className="text-sm sm:text-base">{props.a}</p>
      <p className="text-sm sm:text-base mt-5">{props.a2}</p>
    </div>
  )
}
