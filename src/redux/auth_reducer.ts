import { Actions, AppStateType } from './redux_store';
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../api/api";

type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
}
let initialState = {
    userData: {
        id: null as number | null,
        email: null as string | null,
        login: null as string | null,
    },
    isFetching: false,
    isAuth: false,
    captchaURL: null as string | null,
}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: Actions<typeof auth_actions>): InitialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state, userData: { ...action.payload }, isAuth: true
            }
        case 'auth/SET_NULL_USER_DATA':
            return {
                ...state, userData: { ...action.payload }, isAuth: false
            }
        case 'auth/SET_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }

        default: return state;
    }
};
export const auth_actions = {
    setUserData: (payload: UserDataType) => ({ type: 'auth/SET_USER_DATA', payload } as const),
    setNullUserData: (payload: UserDataType) => ({ type: 'auth/SET_NULL_USER_DATA', payload } as const),
    setIsFetching: (isFetching: boolean) => ({ type: 'auth/SET_IS_FETCHING', isFetching } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, Actions<typeof auth_actions>>
export const getAuth = (): ThunkType => async (dispatch) => {
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        dispatch(auth_actions.setUserData(data.data));
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        // dispatch(stopSubmit('login', { _error: data.messages }))
    }
}
export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(auth_actions.setNullUserData({ id: null, email: null, login: null }));
    }
}

export default authReducer;