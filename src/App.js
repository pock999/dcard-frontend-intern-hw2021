import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import _ from 'lodash';

import {
  Routers,
} from './router';

global._ = _;

if (process.env.NODE_ENV === 'development') {
  global.cors = '';
} else {
  global.cors = 'https://cors-anywhere.herokuapp.com/';
}

function App() {
  return (
    <Routers />
  );
}

export default App;
