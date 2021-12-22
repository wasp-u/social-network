import { createSelector } from 'reselect'
import { AppStateType } from './redux_store'

const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersProps = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}



