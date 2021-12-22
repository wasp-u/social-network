import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getProfileStatus, savePhoto, updateProfileStatus } from "../../redux/profile_reducer"
import { Navigate, useParams } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { useEffect } from 'react';


const ProfileContainer = ({ getProfile, getProfileStatus, ...props }) => {
    let { userId } = useParams();

    useEffect(() => {
        getProfile(userId);
        getProfileStatus(userId);
    }, [userId])

    if (!userId) {
        return <Navigate to={`/profile/${props.myID}`} />
    }

    return (
        <div>
            <Profile {...props} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus,
        myID: state.auth.userData.id
    }
}


export default compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus, savePhoto }),
    withAuthRedirect
)(ProfileContainer)
