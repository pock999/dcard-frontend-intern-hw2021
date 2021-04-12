import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import {
  all,
  fork,
  put,
  takeLatest,
  call,
  select,
  take,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';

const baseURL = 'https://ptx.transportdata.tw/MOTC';

// ---------------------------
/**
 * reducer/slice
 */

// 初始化狀態
const initialState = {
  scenicSpots: [],
};

// 定義slice(用這種方法避免掉redux寫switch)
const slice = createSlice({
  name: 'ScenicSpotStore',
  initialState,
  reducers: {
    // (有多的就再新增)
    setscenicSpotList: (state, action) => {
      state.scenicSpots = [...state.scenicSpots, ...action.payload];
    },
    clearscenicSpotList: (state, action) => {
      state.scenicSpots = [];
    },
  },
});

// 將所有action提出來
const {
  setscenicSpotList,
  clearscenicSpotList,
} = slice.actions;

// ---------------------------
/**
 * sagas
 */
// 定義saga action type，其實不需要export，透出是為了可能要寫測試
export const FETCH_SCENIC_SPOTS_LIST = 'SCENIC_SPOT_SAGA/FETCH_SCENIC_SPOTS_LIST';
export const INIT_SCENIC_SPOTS_LIST = 'SCENIC_SPOT_SAGA/INIT_SCENIC_SPOTS_LIST';

// saga(有多的就再新增)，其實不需要export，透出是為了可能要寫測試
export function* FetchScenicSpotList(action) {
  console.log(`=== FetchScenicSpotList ===`);
  const { payload } = action;

  const {
    city='',
    skip=0,
  } = payload;

  if(skip === 0) {
    yield put(clearscenicSpotList());
  }

  const handleApi = async () => {
    let res;
    try {
      

      let urlParams = '?$top=30&';

      if(skip !== 0) {
        urlParams += `$skip=${skip}&`;
      }
      if(city !== '') {
        urlParams = `/${city}${urlParams}&`;
      }
      res = await axios.get(`${baseURL}/v2/Tourism/ScenicSpot${urlParams}`);
      res = res.data;
    } catch(e) {
      res = e;
    }
    return res;
  };

  // TODO: try catch

  let res;
  try {
    res = yield call(handleApi);
    // console.log('res => ', res);
    yield put(setscenicSpotList(res));
  } catch(e) {
    res = [];
  }
}

export function* InitScenicSpotList(action) {
  console.log('=== InitScenicSpotList ===');
  const { payload } = action;

  yield put(clearscenicSpotList());

  const handleApi = async () => {
    let res;
    try {
      const {
        city='',
        skip=0,
      } = payload;

      let urlParams = '?$top=30&';

      if(skip !== 0) {
        urlParams += `$skip=${skip}`;
      }
      if(city !== '') {
        urlParams = `/${city}` + urlParams;
      }
      res = await axios.get(`${baseURL}/v2/Tourism/ScenicSpot${urlParams}`);
      res = res.data;
    } catch(e) {
      res = e;
    }
    return res;
  };

  // TODO: try catch

  let res;
  try {
    res = yield call(handleApi);
    yield put(setscenicSpotList(res));
  } catch(e) {
    res = [];
  }
}

// ---------------------------
/**
 * sagaAction => 用來封裝成saga action，方便view直接dispatch
 */
// sagaAction(有多的就再新增)
const FetchScenicSpotListAction = (payload) => ({
  type: FETCH_SCENIC_SPOTS_LIST,
  payload,
});

const InitScenicSpotListAction = (payload) => ({
  type: FETCH_SCENIC_SPOTS_LIST,
  payload,
});

/**
 * 輸出物件，方便store設定reducer, saga以及透出selector
 */
export default {
  // (必要)reducer，給store combine reducers
  reducer: slice.reducer,
  // (非必要)透出reducer方法，如果不需測試或是不打算直接給view使用，就不需要
  reducerActions: {
    setscenicSpotList,
    clearscenicSpotList,
  },
  // (必要)sagas, 給store去yield all所有的saga
  sagas: [
    // 註冊個別saga
    takeLatest(FETCH_SCENIC_SPOTS_LIST, FetchScenicSpotList),
    takeLatest(INIT_SCENIC_SPOTS_LIST, InitScenicSpotList)
  ],
  // (必要)透出saga方法
  sagaActions: {
    FetchScenicSpotListAction,
    InitScenicSpotListAction,
  },
  // 若有selector 就透出
  selectors: {},
};
