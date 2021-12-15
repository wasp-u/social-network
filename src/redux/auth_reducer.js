import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_IS_FETCHING = 'auth/SET_USER_DATA';
const SET_NULL_USER_DATA = 'auth/SET_NULL_USER_DATA'

let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        case SET_NULL_USER_DATA:
            return {
                ...state, ...action.data, isAuth: false
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        default: return state;
    }
};

export const setUserData = (data) => ({ type: SET_USER_DATA, data })
export const setNullUserData = (data) => ({ type: SET_NULL_USER_DATA, data })
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export const getAuth = () => async (dispatch) => {
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        dispatch(setUserData(data));
    }

}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        dispatch(stopSubmit('login', { _error: data.messages }))
    }

}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setNullUserData({ id: null, email: null, login: null }));
    }

}


export default authReducer;