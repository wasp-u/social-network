import SendButton from './SendButton/SendButton';
import classes from './SendWindow.module.css';

const SendWindow = () => {
    return (
        <div className={classes.sendwindow}>
            <p>My Posts</p>
            <textarea placeholder="your news..." cols="125" rows="5"></textarea>
            <SendButton />
        </div>
    );
}

export default SendWindow;