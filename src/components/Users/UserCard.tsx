import style from "./Users.module.scss"
import emptyAvatar from "./../../icons/empty-avatar.png"
import { NavLink } from "react-router-dom";
import { UserType } from "../../types/types";

type PropsType = {
    users: Array<UserType>
    followingInProgress: boolean
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const UserCard: React.FC<PropsType> = ({ users, unfollow, follow, followingInProgress }) => {
    return (
        <div>
            {users.map(user => <div className={style.userCard} key={user.id}>
                <div className={style.profilePhoto}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : emptyAvatar} alt="" />
                    </NavLink>
                </div>
                <div className={style.profileInfoWithoutPhoto} >
                    <div className={style.profileInfo}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{"user.location.city"}</div>
                    </div>
                    {user.followed
                        ? <button disabled={followingInProgress} onClick={() => {
                            unfollow(user.id)
                        }}>unfollow</button>
                        : <button disabled={followingInProgress} onClick={() => {
                            follow(user.id)
                        }}>follow</button>
                    }
                </div>
            </div>)
            }
        </div >
    )
}
