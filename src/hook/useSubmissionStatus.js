import constate from 'constate'
import { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { useSubmissionContext } from '../hook/useSubmission'

export const useSubmissionStatus = () => {
  const { status } = useSubmissionContext()
  const location = useLocation()
  const history = useHistory()

  const manageAppView = () => {
    console.log(status)
    if (process.env.REACT_APP_DEBUG_MODE === 'false') {
      if (!status) return
      if (status.debug !== true) {
        switch (location.pathname) {
          case '/':
            if (status.code === 412) {
              if (status.status !== 'Soon') return history.push('/closed')
              else return history.push('/closed')
            }
            break
          case '/closed':
            if (status.code === 200) return history.push('/')
            if (status.code === 412 && status.status === 'Soon')
              return history.push('/soon')
            break
          case '/soon':
            if (status.code === 200) return history.push('/')
            if (status.code === 412 && status.status !== 'Soon')
              return history.push('/closed')
            break
          default:
            break
        }
        // eslint-disable-next-line prettier/prettier
      } else
        console.error('ERROR: API debug is enabled. Submission is always open!')
    } else console.error('ERROR: App debug is enabled. Routing is disabled!')
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => manageAppView(), [status])
}

// eslint-disable-next-line prettier/prettier
const [SubmissionStatusProvider, useSubmissionStatusContext] = constate(
  useSubmissionStatus
)

export { SubmissionStatusProvider, useSubmissionStatusContext }
