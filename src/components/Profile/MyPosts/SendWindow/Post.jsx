import s from './Post.module.css';

const Post = (props) => {
    return (
        <div key={props.id} className={s.post}>
            <div>{props.text}</div>
            <span>{props.likeCount} likes</span>
        </div>
    );
}

export default Post