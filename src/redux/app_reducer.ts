import { Actions, AppStateType } from './redux_store';
import { ThunkAction } from "redux-thunk";
import { getAuth } from "./auth_reducer";

type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: Actions<typeof app_actions>): InitialStateType => {
    switch (action.type) {
        case 'app_reducer/INITIALIZED_SUCCESS':
            return {
                ...state, initialized: true
            }
        default: return state;
    }
}

export const app_actions = {
    initializedSuccess: () => ({ type: 'app_reducer/INITIALIZED_SUCCESS' } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, Actions<typeof app_actions>>
export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = await dispatch(getAuth())
    await Promise.all([promise])
    dispatch(app_actions.initializedSuccess())
}


export default appReducer;