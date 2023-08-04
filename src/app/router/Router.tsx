import React from 'react';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'shared/lib/router/routes';
import { People } from 'pages/People';
import { Person } from 'pages/Person';
import { NotFound } from 'pages/NotFound';
import { RouterSettings } from './lib/RouterSettings';
import { history } from './lib/history';

export const Router = () => (
  <BrowserRouter history={history}>
    <RouterSettings />
    <Switch>
      <Route path={routes.main} component={People} exact />
      <Route path={routes.person} component={Person} exact />
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);
