import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

import img from './index.jpeg';

const Home = () => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <div style={{ width: '100%', height: '100%', top: 0, left: 0 }}>
      <img src={img} style={{ width: '100%', height: '100%' }} />
    </div>
    <div style={{ width: '100%', height: '100%',  position: 'absolute', zIndex: 5, display: 'flex', justifyContent: 'center', top: 0, right: 0}}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{ width: 500, height: 350, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Link to='/scenicSpot'><Button type="primary">前往景點</Button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;