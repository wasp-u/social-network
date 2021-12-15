import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getProfileStatus, updateProfileStatus } from "../../redux/profile_reducer"
import { useParams } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.userId)
        this.props.getProfileStatus(this.props.userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus,

    }
}

const WithUrlContainerComponent = (props) => {
    let { userId } = useParams()
    return (
        <ProfileContainer {...props} userId={userId} />
    )
}

export default compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus }),
    withAuthRedirect
)(WithUrlContainerComponent)
