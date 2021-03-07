import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import history from '../../history';

import {
  ScenicSpotList,
} from '../../components';

import { useParams } from 'react-router-dom';

import {
  sagaActions,
} from '../../store';

const CityScenicSpot = (props) => {
  const dispatch = useDispatch();
  const scenicSpots = useSelector(state => state.ScenicSpotStore.scenicSpots);

  const {
    City,
  } = useParams();

  const fetchTimes = React.useRef(1);

  const handleScroll = () => {
    // 螢幕畫面高度
    const innerHeight = window.innerHeight;
    // scroll高度
    const scrollTop = document.documentElement.scrollTop;
    // 全部畫面高度
    const scrollHeight = document.documentElement.scrollHeight;

    if((innerHeight + scrollTop + 10) >= scrollHeight) {
      // console.log(scenicSpots);
      dispatch(sagaActions.FetchScenicSpotListAction({
        skip: fetchTimes.current*30,
        city: City,
      }));
      fetchTimes.current++;
    } else {
      // console.log((innerHeight + scrollTop + 10) - scrollHeight);
    }
  };

  React.useEffect(() => {
    dispatch(sagaActions.InitScenicSpotListAction({
      skip: 0,
      city: City,
    }));
    window.addEventListener('scroll', handleScroll);
    return function() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    dispatch(sagaActions.InitScenicSpotListAction({
      skip: 0,
      city: City,
    }));
    fetchTimes.current++;
  }, [City]);
  
  React.useEffect(()=> {
    // console.log(scenicSpots);
  }, [scenicSpots]);

  return (
    <div>
      <ScenicSpotList
        data={scenicSpots}
        historyPush={(path) => {
          history.push(path);
        }}
      />
      <div style={{ height: 50 }}>
        載入中...
      </div>
    </div>
  );
};

export default CityScenicSpot;