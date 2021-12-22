import s from './../Dialogs.module.scss';

type Message = {
    userName: string
    userAvatar: string
    message: string
    id: number
    key: number
}

const Message: React.FC<Message> = ({ message }) => {
    return (
        <div className={s.dialog_window__message}>
            {message}
        </div>
    );
}

export default Message;