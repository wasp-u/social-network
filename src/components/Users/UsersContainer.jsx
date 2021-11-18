import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC } from "../../redux/users_reducer"
import Users from "./Users"


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onFollowClick: (userId) => { dispatch(followAC(userId)) },
        onUnFollowClick: (userId) => { dispatch(unfollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;