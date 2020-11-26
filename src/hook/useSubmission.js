import axios from 'axios'
import constate from 'constate'
import { useEffect, useState } from 'react'

import { courses as dataCourses } from '../data/courses'
import { mediaTypes as dataMediaTypes } from '../data/mediaTypes'

export const useSubmission = () => {
  const [courses, setCourses] = useState()
  const [mediaTypes, setMediaTypes] = useState()
  const [debug, setDebug] = useState()
  const [status, setStatus] = useState()

  const fetchSite = async () => {
    if (process.env.REACT_APP_GH_PAGES === false) {
      setCourses(dataCourses)
      setMediaTypes(dataMediaTypes)
      setDebug('true')
      return
    }

    await axios
      .get(process.env.REACT_APP_API_URL, {
        type: process.env.REACT_APP_API_TYPE,
        theme: process.env.REACT_APP_API_THEME,
      })
      .then((res) => {
        setCourses(res.data.courses)
        setMediaTypes(res.data.mediaTypes)
        if (res.data.debug !== undefined) setDebug(res.data.debug)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.messenger)
      })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchSite(), [])

  return {
    courses,
    mediaTypes,
    debug,
    status,
  }
}

const [SubmissionProvider, useSubmissionContext] = constate(useSubmission)

export { SubmissionProvider, useSubmissionContext }
