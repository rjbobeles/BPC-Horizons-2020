import React from 'react'
import PropTypes from 'prop-types'

MediaTypes.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
}

export default function MediaTypes(props) {
  return (
    <div className="entry flex flex-row items-stretch mb-8">
      <div className="photo border border-smoke flex-shrink-0"></div>
      <div className="text pl-4 sm:pl-8 flex flex-col justify-center lg:justify-start xl:justify-center text-roast">
        <h5 className="text-2xl xl:text-3xl mb-2">{props.title}</h5>
        <p className="text-xs sm:text-base">{props.description}</p>
        <p className="text-xs sm:text-base mt-5">{props.description2}</p>
      </div>
    </div>
  )
}
