import showsSlice from 'store/shows/shows.slice';
import { call, put, takeLatest } from 'redux-saga/effects';
import { List } from 'store/shows/shows.type';
import { AxiosResponse } from 'axios';
import { showsService } from 'services/shows/shows.type';

const { setData, setError, setSettings } = showsSlice.actions;

function* getList() {
  try {
    yield put(setSettings({ loading: true }));
    const response: AxiosResponse<List> = yield call(showsService().getList);

    yield put(setData({ list: response.data }));
    yield put(setError(''));
  } catch (e) {
    yield put(setError('Error'));
  } finally {
    yield put(setSettings({ loading: false }));
  }
}

const showSaga = [
  takeLatest('shows/getList', getList),
];

export default showSaga;
