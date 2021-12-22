import style from "./Users.module.scss"
import { Paginator } from "../common/Paginator/Paginator";
import { UserCard } from "./UserCard";
import { UserType } from "../../types/types";
import React from "react";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: boolean
    setCurrentPage: (currentPageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: React.FC<PropsType> = (props) => {
    return (
        < div className={style.users}>
            <Paginator
                totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                setCurrentPage={props.setCurrentPage}
                currentPage={props.currentPage}
                portionSize={20}
            />
            <UserCard
                users={props.users}
                unfollow={props.unfollow}
                follow={props.follow}
                followingInProgress={props.followingInProgress}
            />
        </ div>
    )
}

export default Users;