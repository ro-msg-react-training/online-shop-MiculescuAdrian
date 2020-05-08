import {createStore,applyMiddleware} from "redux";
import rootReducer from "../reducer";
import createSagaMiddleware from 'redux-saga';
import  rootSaga  from '../saga/saga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)


export const action = type => store.dispatch({type})
export default store;