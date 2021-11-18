import React from 'react';
import s from './Dialogs.module.css';
import Dialog_item from './Dialog_item/Dialog_item';
import Message from './Message/Message';



const Dialogs = (props) => {
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    let onTextAreaChange = (event) => {
        props.onTextAreaChange(event.target.value);
    }
    return (
        <div className={s.dialogs}>
            <p className={s.dialogs_title}>Dialogs</p>
            <div className={s.dialog_page}>
                <div className={`dialogs ` + s.dialogs_items}>
                    {props.dialogsPage.dialogs.map(item =>
                        <Dialog_item
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
                        <textarea
                            onChange={onTextAreaChange}
                            value={props.dialogsPage.newMessageText}
                            placeholder="write your message..."></textarea>
                        <button onClick={onSendMessageClick} >Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;
