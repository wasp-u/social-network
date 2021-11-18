import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.dialog_window__message}>
            {props.message}
        </div>
    );
}

export default Message;