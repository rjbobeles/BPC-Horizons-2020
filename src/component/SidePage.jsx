import React from 'react'

import PropTypes from 'prop-types'

import logo from '../assets/img/logo.png'
import fb from '../assets/img/facebook.png'
import twt from '../assets/img/twitter.png'
import ig from '../assets/img/instagram.png'
import web from '../assets/img/globe.png'
import spot1 from '../assets/img/story2.png'

SidePage.propTypes = {
  msg: PropTypes.string,
  sub: PropTypes.string,
}

export default function SidePage(props) {
  return (
    <div className="side-page memento h-screen flex flex-row items-center overflow-hidden">
      <div className="container flex flex-row items-center mx-auto flex-wrap pt-16 sm:pt-32 lg:pt-0 relative relative">
        <img
          src={spot1}
          width="720px"
          className="absolute side-corner1 side-corner"
        />
        <img
          src={spot1}
          width="720px"
          className="absolute side-corner2 side-corner"
        />
        <div className="w-full sm:w-1/3 relative z-10">
          <img
            src={logo}
            width="180px"
            className="logo mx-auto sm:mx-0 mb-8 sm:mb-0"
          />
        </div>
        <div className="w-full sm:w-2/3 lg:w-1/3 text-center sm:text-left relative z-10">
          <h3 className="text-cocoa text-3xl karla">{props.msg}</h3>
          <p className="text-cocoa text-xl karla">{props.sub}</p>
        </div>
        <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-row justify-center lg:justify-end text-kofi relative z-10">
          <div className="mt-32 lg:mt-0">
            <h6 className="text-xl karla text-kofi">STAY CONNECTED.</h6>
            <p className="text-lg flex flex-row items-center mb-2">
              <span className="inline-flex flex-row">
                <a
                  href="https://facebook.com/thebenildean/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} width="20px" alt="" />
                </a>
                <a
                  href="https://twitter.com/thebenildean/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twt} width="20px" className="mx-2" alt="" />
                </a>
                <a
                  href="https://instagram.com/thebenildean/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ig} width="20px" className="mr-3" alt="" />
                </a>
              </span>
              thebenildean
            </p>
            <p className="text-lg flex flex-row items-center">
              <a
                href="http://read.thebenildean.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={web} width="20px" className="mr-2" alt="" />
              </a>
              read.thebenildean.org
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
