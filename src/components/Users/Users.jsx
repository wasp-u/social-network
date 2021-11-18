
const Users = (props) => {
    if (props.users.length === 0) {
        let users = [
            { id: 1, followed: false, fullName: 'Max0', status: 'im a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, followed: true, fullName: 'Max1', status: 'im a boss', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, followed: false, fullName: 'Max2', status: 'im a boss', location: { city: 'Kyiv', country: 'Ukraine' } },
            { id: 4, followed: false, fullName: 'Max3', status: 'im a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 5, followed: true, fullName: 'Max4', status: 'im a boss', location: { city: 'Moscow', country: 'Ukraine' } },
            { id: 6, followed: true, fullName: 'Max5', status: 'im a boss', location: { city: 'Moscow', country: 'Ukraine' } },
            { id: 7, followed: true, fullName: 'Max6', status: 'im a boss', location: { city: 'Moscow', country: 'Ukraine' } },
            { id: 8, followed: false, fullName: 'Max7', status: 'im a boss', location: { city: 'Moscow', country: 'Ukraine' } },]

        props.setUsers(users);
    }
    return (
        < div > {
            props.users.map(user => <div key={user.id}>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
                <div>{user.location.city}</div>
                {user.followed
                    ? <button onClick={() => props.onUnFollowClick(user.id)}>unfollow</button>
                    : <button onClick={() => props.onFollowClick(user.id)}>follow</button>}
            </div>)
        }</ div>
    )
}

export default Users;