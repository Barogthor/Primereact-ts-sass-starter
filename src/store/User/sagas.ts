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

export function* sendRequestSignIn(action){
    const {payload} = action
    console.log("yeahh, saga sign in", payload);
    // try {
        const response = yield fetch("http://localhost:8090/sign-in", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: payload
        })
    // }
    // catch (e) {
    //     console.error("fetch error:", e)
    // }
    // console.log("fetch response", response);
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