import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import auth from 'api/auth';

import PublicLayout from 'layouts/PublicLayout';
import AppLayout from 'layouts/AppLayout';
import ErrorLayout from 'layouts/ErrorLayout';

import AppContainer from 'containers/AppContainer';
import CrewContainer from 'containers/CrewContainer';
import LoginContainer from 'containers/LoginContainer';

import MissionContainer from 'components/mission/Mission';
import Extras from 'components/extras/Extras';
import PageNotFound from 'components/error/PageNotFound';

const Authenticated = auth.createAuthWrapper((props) => React.cloneElement(props.children, props));

export default (
  <Router>
    <Route path="/" component={AppContainer}>

      <Route component={PublicLayout}>
        <Route path="/login" component={LoginContainer}/>
      </Route>


      <Route component={AppLayout} >
          <Route component={Authenticated}>
            <IndexRoute component={CrewContainer}/>
            <Route path="/mission" component={MissionContainer}/>
            <Route path="/extras" component={Extras} />
          </Route>
      </Route>

      <Route component={ErrorLayout}>
        <Route path="*" component={PageNotFound}/>
      </Route>
    </Route>
  </Router>
);

