import SendButton from './SendButton/SendButton';
import s from './SendWindow.module.css';

const SendWindow = () => {
    return (
        <div className={s.sendwindow}>
            <p>My Posts</p>
            <textarea placeholder="your news..." cols="110" rows="5"></textarea>
            <div className={s.sendbutton}>
                <SendButton />
            </div>
        </div>
    );
}

export default SendWindow;