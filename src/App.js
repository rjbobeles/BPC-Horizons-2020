import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SubmissionProvider } from './hook/useSubmission'

import ClosedView from './view/Closed'
import ErrorView from './view/Error'
import HomeView from './view/Home'
import SoonView from './view/Soon'
import ThankYouView from './view/ThankYou'
import NotFoundView from './view/404'

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomeView/>} />
      <Route exact path="/soon" render={() => <SoonView/>} />
      <Route exact path="/closed" render={() => <ClosedView/>} />
      <Route exact path="/thankyou" render={() => <ThankYouView/>} />
      <Route exact path="/error" render={() => <ErrorView/>} />
      <Route path="*" render={() => <NotFoundView/>} />
    </Switch>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <SubmissionProvider>
    <Router>
      <App { ...props }/>
    </Router>
  </SubmissionProvider>
)
