import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';

import '../resources/scss/style.scss';

import { Authentication, Root, Profiles } from './components';

import { middleware, reducers } from './store';

import { paths } from './constants';

const store = createStore(reducers, applyMiddleware(thunk, middleware()));

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route
          render={() => (
            <Root>
              <Switch>
                <Route exact path={paths.client.LOGIN} component={Authentication.Login} />
                <Route exact path={paths.client.PROFILES} component={Profiles.Form} />
              </Switch>
            </Root>
          )}
        />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};
