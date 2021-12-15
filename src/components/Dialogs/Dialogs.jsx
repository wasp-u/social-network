import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import SendMessageForm from './SendMessageForm';



const Dialogs = (props) => {
    const onSubmit = (data) => {
        props.onSendMessageClick(data.newMessage);
    }

    if (!props.isAuth) {
        return <Navigate to={'/login'} />
    }
    return (
        <div className={s.dialogs}>
            <p className={s.dialogs_title}>Dialogs</p>
            <div className={s.dialog_page}>
                <div className={`dialogs ` + s.dialogs_items}>
                    {props.dialogsPage.dialogs.map(item =>
                        <DialogItem
                            userName={item.userName}
                            userAvatar={item.userAvatar}
                            newestMassage={item.newestMassage}
                            id={item.id}
                            key={item.id}
                        />
                    )}
                </div>
                <div className={s.dialog_window}>
                    <div className={s.message_window}>
                        {props.dialogsPage.messages.map(item =>
                            <Message
                                userName={item.userName}
                                userAvatar={item.userAvatar}
                                message={item.message}
                                id={item.id}
                                key={item.id}
                            />
                        )}
                    </div>
                    <div className={s.textarea}>
                        <SendMessageForm onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;
