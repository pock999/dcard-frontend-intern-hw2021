// /scenicSpot
// https://ptx.transportdata.tw/MOTC

// /v2/Tourism/ScenicSpot
// /v2/Tourism/ScenicSpot/{City}

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  AllScenicSpot,
  CityScenicSpot,
  Home,
} from '../views';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/scenicSpot',
    component: AllScenicSpot,
  },
  {
    path: '/scenicSpot/:City',
    component: CityScenicSpot,
  },
];

const Routers = () => (
  // <Switch>
  <>
    {
      routes.map((route, i) => (
        <Route
          key={route.path}
          exact
          component={route.component}
          path={route.path}
        />
      ))
    }
  </>
  // </Switch>
);

export {
  Routers,
};