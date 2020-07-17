import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer.js';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

//export not needed in below statements
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Inside run() we pass indivisual saga
sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);

export default { store, persistor};