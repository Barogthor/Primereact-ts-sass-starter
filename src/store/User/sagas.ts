import { all, call, delay, put, takeEvery, takeLeading } from 'redux-saga/effects'
import {SIGNIN_REQUEST} from "./types";

export function* helloSaga() {
    console.log('Hello Saga!')
}

export function* incrementAsync() {
    yield delay(1000)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    yield takeLeading('INCREMENT_ASYNC', incrementAsync)
}

export function* sendRequestSignIn(payload){

}

export function* watchRequestSignIn(){
    yield takeEvery(SIGNIN_REQUEST, sendRequestSignIn)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        // call(helloSaga),
        call(watchRequestSignIn),
    ])
}