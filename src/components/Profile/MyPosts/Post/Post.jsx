import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div>{props.text}</div>
            <span>{props.likeCount} likes</span>
        </div>
    );
}

export default Post