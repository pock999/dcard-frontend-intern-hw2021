import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ScenicSpotList,
} from '../../components';

import {
  sagaActions,
} from '../../store';

const CityScenicSpot = (props) => {
  const dispatch = useDispatch();
  const scenicSpots = useSelector(state => state.ScenicSpotStore.scenicSpots);

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
        city: '',
      }));
      fetchTimes.current++;
    } else {
      console.log((innerHeight + scrollTop + 10) - scrollHeight);
    }
  };

  React.useEffect(() => {
    dispatch(sagaActions.InitScenicSpotListAction({
      skip: 0,
      city: '',
    }));
    window.addEventListener('scroll', handleScroll);
    // return function() {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <div>
      <ScenicSpotList
        data={scenicSpots}
      />
      <div style={{ height: 50 }}>
        載入中...
      </div>
    </div>
  );
};

export default CityScenicSpot;