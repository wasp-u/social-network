import Bio from './Bio/Bio';
import SendWindowContainer from './MyPosts/SendWindow/SendWindowContainer';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div div className={s.content}>
            <div className={s.top_img}></div>
            <Bio />
            <SendWindowContainer />
        </div>
    );
}

export default Profile;