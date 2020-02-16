import {TokenState, UserActionTypes} from "./types";

const initialState: TokenState = {
    username: "",
    jwt: "",
    hash: "",
    expires: ""
}

export function UserReaducer(
    state: TokenState = initialState,
    action: UserActionTypes
): TokenState{
    switch(action.type){
        case "SIGNIN_SUCCEEDED":
            return action.token
        default:
            return state
    }
}