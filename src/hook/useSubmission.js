import axios from 'axios'
import constate from 'constate'
import { useEffect, useState } from 'react'

import { courses as dataCourses } from '../data/courses'
import { mediaTypes as dataMediaTypes } from '../data/mediaTypes'

export const useSubmission = () => {
  const [courses, setCourses] = useState()
  const [mediaTypes, setMediaTypes] = useState()
  const [status, setStatus] = useState()
  const [submitting, setSubmitting] = useState(false)

  const fetchSite = async () => {
    if (process.env.REACT_APP_GH_PAGES === 'true') {
      setCourses(dataCourses)
      setMediaTypes(dataMediaTypes)
      return
    }

    await axios
      .post(process.env.REACT_APP_API_URL, {
        type: process.env.REACT_APP_API_TYPE,
        theme: process.env.REACT_APP_API_THEME,
      })
      .then((res) => {
        const debug = res.data.debug !== undefined ? res.data.debug : false
        setCourses(res.data.courses)
        setMediaTypes(res.data.mediaTypes)
        setStatus({ code: res.data.code, status: 'Open', debug })
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data.code === 412) {
            setStatus({
              code: err.response.data.code,
              status: err.response.data.message,
              debug: false,
            })
          }
        }
      })
  }

  const submitData = async (data) => {
    if (process.env.REACT_APP_GH_PAGES === 'true')
      return { code: 200, message: 'Success' }

    let response = {}
    await axios
      .post(`${process.env.REACT_APP_API_URL}/submit`, {
        type: process.env.REACT_APP_API_TYPE,
        theme: process.env.REACT_APP_API_THEME,
        data,
      })
      .then((res) => (response = res.data))
      .catch((err) => (response = err.response.data))
    return response
  }

  useEffect(() => fetchSite(), [])

  return {
    courses,
    mediaTypes,
    status,
    submitting,
    setSubmitting,
    submitData,
  }
}

const [SubmissionProvider, useSubmissionContext] = constate(useSubmission)

export { SubmissionProvider, useSubmissionContext }
