import {put, call} from 'redux-saga/effects';
import Api from '../../api';
import {createSetBlogAction} from '../action/blogAction'

export function *setBlog(){
    const data = call(Api.getContentList, {})
    yield put(createSetBlogAction(data))
}