import style from "./Users.module.css"
import emptyAvatar from "./empty-avatar.png"
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        < div className={style.users}>

            <div className={style.page_number}>
                {pages.map(item => {
                    return (<span key={item}
                        onClick={() => { props.setCurrentPage(item) }}
                        className={item === props.currentPage ? style.selected : ''}
                    >{item}</span>)
                }
                )}
            </div>

            {props.users.map(user => <div key={user.id}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : emptyAvatar} alt="" />
                    </NavLink>
                </div>

                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{"user.location.city"}</div>

                {user.followed
                    ? <button disabled={props.followingInProgress} onClick={() => {
                        props.unfollow(user.id)
                    }}>unfollow</button>
                    : <button disabled={props.followingInProgress} onClick={() => {
                        props.follow(user.id)
                    }}>follow</button>}
            </div>)
            }</ div>
    )
}

export default Users;