import React from 'react'
import logo from '../assets/img/logo.png'

import PhotoText from '../component/PhotoText'
import Entry from '../component/MediaTypes'
import FaqItem from '../component/FaqItem'

import folioData from '../data/folioData'

function homePage() {
  return (
    <div className="w-full memento overflow-x-hidden">
      <div className="hero container mx-auto h-screen flex flex-col justify-center">
        <div className="hero-content-wrapper w-full relative flex flex-col justify-end items-center">
          <div className="hero-img bg-smoke w-full absolute top-0"></div>
          <div className="hero-text text-center relative z-10">
            <img src={logo} alt="Horizons: Memento logo" className="mb-8" />
            <p className="text-kofi w-10/12 sm:w-auto text-xs sm:text-sm mx-auto">
              {folioData.description}
            </p>
          </div>
        </div>
      </div>
      <div className="story container mx-auto pt-5 pb-20">
        {Object.entries(folioData.photoText).map(([key, set]) => (
          <PhotoText key={key} texta={set.text1} textb={set.text2} />
        ))}
      </div>
      <div className="entries container mx-auto py-12 sm:py-16 lg:py-24">
        <h2 className="text-5xl text-roast sm:mx-auto sm:text-center mb-12 sm:mb-24">
          What can you submit?
        </h2>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start flex-wrap">
          {Object.entries(folioData.mediaTypes).map(([key, type]) => (
            <Entry
              key={key}
              title={type.title}
              description={type.description}
              description2={type.description2}
            />
          ))}
        </div>
      </div>
      <div className="faq container mx-auto py-12 sm:py-16 lg:py-24">
        <h2 className="text-5xl md:text-6xl text-roast sm:mx-auto sm:text-center mb-12 sm:mb-24 md:mb-32">
          Frequently Asked Questions
        </h2>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start flex-wrap">
          {Object.entries(folioData.faq).map(([key, item]) => (
            <FaqItem key={key} q={item.q} a={item.a} a2={item.a2} />
          ))}
        </div>
      </div>
      <div className="form container mx-auto pb-12 sm:pb-16">
        <h2 className="text-5xl md:text-6xl text-roast sm:mx-auto sm:text-center mb-12 sm:mb-24 md:mb-32">
          Submit
        </h2>
      </div>
      <div className="footer mb-24 container mx-auto flex flex-col lg:flex-row text-kofi">
        <div className="w-full lg:w-1/4 mb-12 lg:mb-0 xl:w-1/3">
          <img src={logo} width="150px" />
        </div>
        <div className="w-11/12 lg:w-1/2 mb-24 lg:mb-0 xl:w-1/3">
          <p>{folioData.footerText}</p>
          <p className="mt-5">
            Benildean Press Corps © 2021. All rights reserved.
          </p>
        </div>
        <div className="w-full lg:w-1/4 mb-12 lg:mb-0 xl:w-1/3 flex flex-col lg:items-end">
          <div>
            <h6 className="text-xl font-bold">STAY CONNECTED.</h6>
            <p className="text-lg font-bold">thebenildean</p>
            <p className="text-lg font-bold">read.thebenildean.org</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homePage
