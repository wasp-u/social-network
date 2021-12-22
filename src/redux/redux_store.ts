import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import authReducer from "./auth_reducer"
import dialogsReducer from "./dialogs_reducer"
import profileReducer from "./profile_reducer"
import usersReducer from "./users_reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./app_reducer"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type Actions<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesType<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
