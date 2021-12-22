import { connect } from "react-redux"
import { follow, unfollow, getUsers } from "../../redux/users_reducer"
import { AppStateType } from "../../redux/redux_store"
import React, { useEffect } from "react";
import Users from "./Users";
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsersProps } from "../../redux/users_selectors";
import { UserType } from "../../types/types";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const UsersContainer: React.FC<PropsType> = (props) => {
    useEffect(() => {
        // if (props.users.length === 0) {
        props.getUsers(props.currentPage, props.pageSize);
        // }
    }, [props.users.length])

    const setCurrentPage = (pageNumber: number) => {
        props.getUsers(pageNumber, props.pageSize);
    }

    return (props.isFetching
        ? <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
        : <Users totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            setCurrentPage={setCurrentPage}
            currentPage={props.currentPage}
            users={props.users}
            unfollow={props.unfollow}
            follow={props.follow}
            followingInProgress={props.followingInProgress}
        />
    )

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersProps(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>
    (mapStateToProps, { follow, unfollow, getUsers })(UsersContainer);

