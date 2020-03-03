import { setBlog } from './blogSaga';
import { takeEvery } from 'redux-saga/effects'
import { QUERYBLOG } from '../action/actionTypes';


export default function* () {
    yield takeEvery(QUERYBLOG, setBlog);
}