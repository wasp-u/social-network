import { userAPI } from "../api/api";

const FOLLOW = 'users_reducer/FOLLOW';
const UNFOLLOW = 'users_reducer/UNFOLLOW';
const SET_USERS = 'users_reducer/SET_USERS';
const SET_CURRENT_PAGE = 'users_reducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users_reducer/SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'users_reducer/SET_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'users_reducer/TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user)
            };
        case SET_USERS:
            return { ...state, users: [...action.users] }
        default: return state;
    }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (followingInProgress) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, followingInProgress });

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setFetching(true));
    dispatch(setCurrentPage(currentPage))
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(setFetching(false));
}
export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true))
    let data = await userAPI.follow(userId)
    dispatch(toggleFollowingInProgress(false));
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
}
export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true))
    let data = await userAPI.unfollow(userId)
    dispatch(toggleFollowingInProgress(false));
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
}

export default usersReducer;