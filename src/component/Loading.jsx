import React from 'react'
import loading from '../assets/img/fp_load.gif'

import { useSubmissionContext } from '../hook/useSubmission'

export default function Loading() {
  const { submitting } = useSubmissionContext()

  return submitting ? (
    <>
      <img src={loading} alt="Loading" width="25px" />
    </>
  ) : (
    <>
      <p>Submit Form</p>
    </>
  )
}
