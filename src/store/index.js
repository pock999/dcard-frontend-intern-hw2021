import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  all,
} from 'redux-saga/effects';

import ScenicSpotStore from '../store/ScenicSpotStore';

// combine 所有reducers
const reducers = combineReducers({
  ScenicSpotStore: ScenicSpotStore.reducer,
});

// 結合（yield all）所有saga
function* sagas() {
  yield all([
    ...ScenicSpotStore.sagas,
  ]);
}

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// 配置Store
const store = configureStore({
  reducer: reducers,
  // 不使用thunk，也不檢查serializable
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware],
});

// 啟動saga
sagaMiddleware.run(sagas);

export const selectors = {
  // 透出所有需要的selectors，需要透出的都要寫
  CountySelector: ScenicSpotStore.selectors,
};

export const reducerActions = {
  // 透出reducer action，需要透出的都要寫
  ...ScenicSpotStore.reducerActions,
};

export const sagaActions = {
  // 透出saga action
  ...ScenicSpotStore.sagaActions,
};

// 預設輸出store
export default store;

