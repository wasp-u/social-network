import Bio from './Bio/Bio';
import SendWindowContainer from './MyPosts/SendWindow/SendWindowContainer';
import s from './Profile.module.css';

const Profile = (props) => {
    // console.log(props);
    return props.profile
        ? (
            <div div className={s.content} >
                <Bio
                    profile={props.profile}
                    profileStatus={props.profileStatus}
                    updateProfileStatus={props.updateProfileStatus}
                    myID={props.myID}
                    savePhoto={props.savePhoto} />
                <SendWindowContainer />
            </div >
        )
        : (<div className={s.loadGIF}>
            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
        </div>)


}

export default Profile;