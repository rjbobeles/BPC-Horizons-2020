import React from 'react'

import { useSubmissionContext } from '../hook/useSubmission'

export default function Loading() {
  const { submitting } = useSubmissionContext()

  return submitting ? (
    <>
      <p>Loading</p>
    </>
  ) : null
}
