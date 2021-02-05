import React from 'react'

import PhotoText from '../component/PhotoText'
import Entry from '../component/MediaTypes'
import FaqItem from '../component/FaqItem'
import Form from '../component/Form'

import logo from '../assets/img/logo.png'
import fb from '../assets/img/facebook.png'
import twt from '../assets/img/twitter.png'
import ig from '../assets/img/instagram.png'
import web from '../assets/img/globe.png'

import { motion } from 'framer-motion'
import { IntersectionObserver } from '../component/IntersectionObserver'

import folioData from '../data/folioData'

function homePage() {
  return (
    <div className="w-full memento overflow-x-hidden">
      <div className="hero container mx-auto h-screen flex flex-col justify-center">
        <div className="hero-content-wrapper w-full relative flex flex-col justify-end items-center">
          <motion.div
            className="hero-img w-full absolute top-0"
            animate={{ y: '0px', opacity: 1 }}
            initial={{ y: '50px', opacity: 0 }}
            transition={{ type: 'spring', damping: 60 }}
          ></motion.div>
          <div className="hero-text text-center relative z-10">
            <motion.img
              src={logo}
              alt="Horizons: Memento logo"
              className="mb-8"
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 40, delay: 0.75 }}
            />
            <motion.p
              className="text-kofi w-10/12 sm:w-auto text-sm mx-auto"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ type: 'spring', damping: 40, delay: 1.5 }}
            >
              {folioData.description}
            </motion.p>
          </div>
        </div>
      </div>
      <div className="story container mx-auto pt-5 pb-20">
        {Object.entries(folioData.photoText).map(([key, set]) => (
          <IntersectionObserver key={key}>
            <PhotoText texta={set.text1} textb={set.text2} illus={set.illus} />
          </IntersectionObserver>
        ))}
      </div>
      <div className="entries container mx-auto py-12 sm:py-16 lg:py-24">
        <h2 className="text-5xl text-roast sm:mx-auto sm:text-center mb-12 sm:mb-24">
          What can you submit?
        </h2>
        <div className="entry-list w-full flex flex-col lg:flex-row justify-between items-center lg:items-start flex-wrap">
          {Object.entries(folioData.mediaTypes).map(([index, type]) => (
            <IntersectionObserver key={index}>
              <Entry
                title={type.title}
                description={type.description}
                description2={type.description2}
                illus={type.illus}
              />
            </IntersectionObserver>
          ))}
        </div>
      </div>
      <div className="faq container mx-auto py-12 sm:py-16 lg:py-24">
        <h2 className="fraunces text-5xl md:text-6xl text-roast sm:mx-auto sm:text-center mb-12 sm:mb-24 md:mb-32">
          Frequently Asked Questions
        </h2>
        <div className="faq-list w-full flex flex-col lg:flex-row justify-between items-center lg:items-start flex-wrap">
          {Object.entries(folioData.faq).map(([key, item]) => (
            <IntersectionObserver key={key}>
              <FaqItem q={item.q} a={item.a} a2={item.a2} />
            </IntersectionObserver>
          ))}
        </div>
      </div>
      <div className="form container mx-auto pb-12 sm:pb-16">
        <h2 className="text-5xl md:text-6xl text-roast sm:mx-auto sm:text-center mb-12 sm:mb-24">
          Submit
        </h2>
        <Form />
      </div>
      <div className="footer mb-24 mt-16 container mx-auto flex flex-col lg:flex-row text-kofi">
        <div className="w-full lg:w-1/4 mb-12 lg:mb-0 xl:w-1/3">
          <img src={logo} width="150px" alt="" />
        </div>
        <div className="w-11/12 lg:w-1/2 mb-24 lg:mb-0 xl:w-1/3">
          <p>{folioData.footerText}</p>
          <p className="mt-5">
            Benildean Press Corps © 2021. All rights reserved.
          </p>
        </div>
        <div className="w-full lg:w-1/4 mb-12 lg:mb-0 xl:w-1/3 flex flex-col lg:items-end">
          <div>
            <h6 className="text-2xl mb-4">Stay connected.</h6>
            <p className="text-lg flex flex-row items-center mb-2">
              <span className="inline-flex flex-row">
                <a
                  href="https://facebook.com/thebenildean/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} width="20px" />
                </a>
                <a
                  href="https://twitter.com/thebenildean/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twt} width="20px" className="mx-2" />
                </a>
                <a
                  href="https://instagram.com/thebenildean/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ig} width="20px" className="mr-3" />
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
                <img src={web} width="20px" className="mr-2" />
              </a>
              read.thebenildean.org
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default homePage
