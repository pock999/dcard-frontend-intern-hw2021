import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from "react-router-dom";

import {
  ScenicSpotList,
} from '../../components';

import {
  sagaActions,
} from '../../store';

const AllScenicSpot = (props) => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const scenicSpots = useSelector(state => state.ScenicSpotStore.scenicSpots);

  const fetchTimes = React.useRef(0);

  const handleScroll = () => {
    // 螢幕畫面高度
    const innerHeight = window.innerHeight;
    // scroll高度
    const scrollTop = document.documentElement.scrollTop;
    // 全部畫面高度
    const scrollHeight = document.documentElement.scrollHeight;

    // console.log('innerHeight => ', innerHeight);
    // console.log('scrollTop => ', scrollTop);
    // console.log('scrollHeight => ', scrollHeight)

    if(fetchTimes.current !== 0 && (innerHeight + scrollTop + 10) >= scrollHeight) {
      // console.log(scenicSpots);
      dispatch(sagaActions.FetchScenicSpotListAction({
        skip: fetchTimes.current*30,
        city: '',
      }));
      fetchTimes.current++;
    } else {
      // console.log((innerHeight + scrollTop + 10) - scrollHeight);
    }
  };

  React.useEffect(() => {
    dispatch(sagaActions.InitScenicSpotListAction({
      skip: 0,
      city: '',
    }));
    fetchTimes.current++;
    window.addEventListener('scroll', handleScroll);
    return function() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(()=> {}, [scenicSpots]);

  return (
    <div>
      <ScenicSpotList
        data={scenicSpots}
        historyPush={(path) => history.push(path)}
      />
      <div style={{ height: 50 }}>
        載入中...
      </div>
    </div>
  );
};

export default AllScenicSpot;