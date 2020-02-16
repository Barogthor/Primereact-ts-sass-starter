
export interface ProfileState{
    username: string,
    email: string,
    avatar: string,
}

export interface TokenState{
    username: string,
    jwt: string,
    hash: string,
    expires: string
}

export interface UserRequestPayload{
    username: string,
    email: string,
    password: string,
    password_confirmation: string,
}

export const SIGNIN_REQUEST = "SIGNIN_REQUEST"
export const SIGNIN_SUCCEEDED = "SIGNIN_SUCCEEDED"
export const SIGNIN_FAILED = "SIGNIN_FAILED"

export interface SignInRequestAction{
    type: typeof SIGNIN_REQUEST,
    user: UserRequestPayload
}

export interface SignInSucceededAction{
    type: typeof SIGNIN_SUCCEEDED,
    token: TokenState
}

export interface SignInFailedAction{
    type: typeof SIGNIN_FAILED,
    message: string,
}

export type UserActionTypes = SignInRequestAction | SignInSucceededAction | SignInFailedAction