import React, { useState } from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessageForm from './SendMessageForm';
import { dialogs_actions, DialogType, MessageType } from '../../redux/dialogs_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux_store';

type PropsType = {
    dialogs?: Array<DialogType>
    messages?: Array<MessageType>
    onSendMessageClick?: (newTextMessage: string) => void
}

const Dialogs: React.FC<PropsType> = () => {
    const dialogs = useSelector((state: AppStateType) => state.dialogsPage.dialogs)
    const messages = useSelector((state: AppStateType) => state.dialogsPage.messages)
    const dispatch = useDispatch()

    const onSubmit = (data: any) => {
        dispatch(dialogs_actions.addMessage(data.newMessage));
    }

    const [idActive, setIdActive] = useState(0)
    const onDialogItemClick = (itemID: number) => {
        setIdActive(itemID)
    }

    return (
        <div className={s.dialogs}>
            <p className={s.dialogs_title}>Dialogs</p>
            <div className={s.dialog_page}>
                <div className={s.dialogs_items}>
                    {dialogs.map(item =>
                        <DialogItem
                            userName={item.userName}
                            userAvatar={item.userAvatar}
                            newestMassage={item.newestMassage}
                            id={item.id}
                            active={idActive === item.id}
                            key={item.id}
                            onClick={onDialogItemClick}
                        />
                    )}
                </div>
                <div className={s.dialog_window}>
                    <div className={s.message_window}>
                        {messages.map(item =>
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
