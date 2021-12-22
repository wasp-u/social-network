import { UserType } from './../types/types';
import { userAPI } from "../api/api";
import { Actions, AppStateType } from './redux_store';
import { ThunkAction } from 'redux-thunk';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: Actions<typeof users_actions>): InitialStateType => {
    switch (action.type) {
        case 'users_reducer/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case 'users_reducer/SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case 'users_reducer/TOGGLE_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.followingInProgress,
            };
        case 'users_reducer/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case 'users_reducer/FOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user)
            };
        case 'users_reducer/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user)
            };
        case 'users_reducer/SET_USERS':
            return { ...state, users: [...action.users] as Array<UserType> }
        default: return state;
    }
};
export const users_actions = {
    followSuccess: (userId: number) => ({ type: 'users_reducer/FOLLOW', userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'users_reducer/UNFOLLOW', userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'users_reducer/SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'users_reducer/SET_CURRENT_PAGE', currentPage } as const),
    setTotalCount: (totalUsersCount: number) => ({ type: 'users_reducer/SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
    setFetching: (isFetching: boolean) => ({ type: 'users_reducer/SET_IS_FETCHING', isFetching } as const),
    toggleFollowingInProgress: (followingInProgress: boolean) => ({ type: 'users_reducer/TOGGLE_FOLLOWING_IN_PROGRESS', followingInProgress } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, Actions<typeof users_actions>>
export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch, getState) => {
    dispatch(users_actions.setFetching(true));
    dispatch(users_actions.setCurrentPage(currentPage))
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(users_actions.setUsers(data.items));
    dispatch(users_actions.setTotalCount(data.totalCount));
    dispatch(users_actions.setFetching(false));
}
export const follow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(users_actions.toggleFollowingInProgress(true))
    let data = await userAPI.follow(userId)
    dispatch(users_actions.toggleFollowingInProgress(false));
    if (data.resultCode === 0) {
        dispatch(users_actions.followSuccess(userId))
    }
}
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(users_actions.toggleFollowingInProgress(true))
    let data = await userAPI.unfollow(userId)
    dispatch(users_actions.toggleFollowingInProgress(false));
    if (data.resultCode === 0) {
        dispatch(users_actions.unfollowSuccess(userId))
    }
}

export default usersReducer;