import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import {todoReducer} from "./Todo/reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./User/sagas";


const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    schedule: todoReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore(){
    const middlewares = [thunkMiddleware, createLogger(), sagaMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);


    const store = createStore(
        rootReducer,
        middleWareEnhancer
    )
    sagaMiddleware.run(rootSaga)
    return store
}