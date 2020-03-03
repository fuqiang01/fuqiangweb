import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from '../saga';

const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga));
saga.run(rootSaga);

export default { store };