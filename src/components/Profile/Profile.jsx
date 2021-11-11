import Bio from './Bio/Bio';
import Post from './MyPosts/Post/Post';
import SendWindow from './MyPosts/SendWindow/SendWindow';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.top_img}></div>
            <Bio />
            <SendWindow />
            <Post text='hello world' likeCount='25' />
            <Post text='hi, how are you?' likeCount='3' />
            <Post text='My name is Yurii' likeCount='3452' />
            <Post text='M.A.G.A' likeCount='67' />
        </div>
    );
}

export default Profile;