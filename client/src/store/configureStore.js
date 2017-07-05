import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

import { multiClientMiddleware } from 'redux-axios-middleware';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import configureApiEndpoints from 'config/api';
import apolloConfig from './../../../.apollo7.config';

const apiConfiguration = configureApiEndpoints({server_environment:process.env.NODE_ENV});
const logger = createLogger({"level": "log"});

function configureStoreDev(initialState) {
  const middlewares = [
    // Add other middleware on this line...
    multiClientMiddleware(apiConfiguration.clients, apiConfiguration.options),
    routerMiddleware(browserHistory),

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
  ];

  apolloConfig.reduxLoggerEnabled && middlewares.push(logger);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

function configureStoreProd(initialState) {

  const middlewares = [
    multiClientMiddleware(apiConfiguration.clients, apiConfiguration.options),
    routerMiddleware(browserHistory),
    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
