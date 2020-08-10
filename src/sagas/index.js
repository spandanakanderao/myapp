/* eslint-disable no-constant-condition */
import axios from 'axios';
import { put, call, takeEvery, all } from 'redux-saga/effects'
import { updatedData } from '../reducers'
import * as actions from '../actions'

const getListData = async () => {
      return axios.get('http://localhost:3002')
      .then(response => {
          return response.data.list;
        })
      .catch(error => {
          return Promise.reject({error, status:error.statusText});
      })
}

export function* getAllData() {
  const listData = yield call(getListData)
  yield put(actions.onDataSuccess(listData))
}

export function* updateData() {
  yield put(actions.onDataUpdate(updatedData))
}

export function* watchGetData() {
  yield takeEvery(actions.FETCH_USER_DATA, getAllData);
}

export default function* root() {
  yield all([call(watchGetData)])
}
