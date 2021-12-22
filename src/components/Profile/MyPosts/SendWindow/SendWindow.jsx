import Post from './Post'
import s from './SendWindow.module.css';
import SendPostForm from './SendPostForm';


const SendWindow = (props) => {
    let posts = props.profilePage.posts.map(post => <Post text={post.text} key={post.id} likeCount={post.likeCount} />)

    const onSubmit = (data) => {
        props.addNewPost(data.newPost);
    }

    return (
        <div className={s.sendwindow}>
            <p>My Posts</p>
            <SendPostForm onSubmit={onSubmit} />
            {posts}
        </div>
    );
}

export default SendWindow;