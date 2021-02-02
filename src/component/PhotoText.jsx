import React from 'react'
import PropTypes from 'prop-types'

PhotoText.propTypes = {
  texta: PropTypes.string,
  textb: PropTypes.string,
}

export default function PhotoText(props) {
  return (
    <div className="wrapper mx-auto flex flex-col md:flex-row items-center md:items-start py-8 md:py-16">
      <div className="w-full sm:w-1/2 lg:w-7/12 flex flex-row justify-end md:pr-5">
        <div className="w-full photo bg-smoke mb-5 md:mb-0"></div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-5/12 md:pl-5">
        <div className="w-full text-roast">
          <p className="mb-8">{props.texta}</p>
          <p>{props.textb}</p>
        </div>
      </div>
    </div>
  )
}
