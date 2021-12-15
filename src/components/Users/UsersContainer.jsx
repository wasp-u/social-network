import { connect } from "react-redux"
import { follow, setCurrentPage, unfollow, getUsers } from "../../redux/users_reducer"
import React from "react";
import Users from "./Users";
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsersProps } from "../../redux/users_selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    }

    setCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (this.props.isFetching
            ? <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
            : <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                setCurrentPage={this.setCurrentPage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersProps(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
    }
}

export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers })(UsersContainer);

