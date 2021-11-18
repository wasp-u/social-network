// import SendButton from './SendButton/SendButton';
import Post from './Post'
import React from 'react';
import s from './SendWindow.module.css';


const SendWindow = (props) => {
    let posts = props.profilePage.posts.map(post => <Post text={post.text} key={post.id} likeCount={post.likeCount} />)

    let addNewPost = () => {
        props.addNewPost();
    }
    let onTextAreaChange = (event) => {
        props.onTextAreaChange(event.target.value);
    }

    return (
        <div className={s.sendwindow}>
            <p>My Posts</p>
            <textarea onChange={onTextAreaChange} value={props.profilePage.newPostText} placeholder="your news..." cols="110" rows="5" />
            <div className={s.sendbutton}>
                {/* <SendButton/> */}
                <div className={s.sendbutton}>
                    <button onClick={addNewPost} >Send</button>
                </div>
            </div>
            {posts}
        </div>
    );
}

export default SendWindow;