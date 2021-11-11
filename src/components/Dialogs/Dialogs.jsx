import s from './Dialogs.module.css';
import Dialog_item from './Dialog_item/Dialog_item';

const Message = (props) => {
    return (
        <div className={s.dialog_window__message}>
            {props.message}
        </div>
    );
}

const Dialog = (props) => {
    const imgUrl = 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
    return (
        <div className={s.dialogs}>
            <p className={s.dialogs_title}>Dialogs</p>
            <div className={s.dialog_page}>
                <div className={`dialogs ` + s.dialogs_items}>
                    <Dialog_item
                        userName="Max"
                        userAvatar={imgUrl}
                        newestMassage="how are you?"
                        id="1"
                    />
                    <Dialog_item
                        userName="Ivan"
                        userAvatar={imgUrl}
                        newestMassage="what are you doing?"
                        id="2"
                    />
                    <Dialog_item
                        userName="Igor"
                        userAvatar={imgUrl}
                        newestMassage="i'm fine"
                        id="3"
                    />
                    <Dialog_item
                        userName="Alex"
                        userAvatar={imgUrl}
                        newestMassage="are you serious?"
                        id="4"
                    />
                    <Dialog_item
                        userName="Mark"
                        userAvatar={imgUrl}
                        newestMassage="how are you?"
                        id="5"
                    />
                    <Dialog_item
                        userName="Stiven"
                        userAvatar={imgUrl}
                        newestMassage="how are you?"
                        id="6"
                    />
                    <Dialog_item
                        userName="Anton"
                        userAvatar={imgUrl}
                        newestMassage="how are you?"
                        id="7"
                    />
                    <Dialog_item
                        userName="Ilon"
                        userAvatar={imgUrl}
                        newestMassage="how are you?"
                        id="8"
                    />
                </div>
                <div className={s.dialog_window}>
                    <div className={s.message_window}>
                        <Message message='hi' />
                        <Message message='how are you?' />
                        <Message message='hi' />
                        <Message message='how are you?' />
                        <Message message='hi' />
                        <Message message='how are you?' />
                        <Message message='hi' />
                        <Message message='how are you?' />
                        <Message message='hi' />
                        <Message message='how are you?' />
                        <Message message='hi' />
                        <Message message='how are you?' />
                        <Message message='hi' />
                        <Message message='how are you?' />
                        <Message message='how are you?' />
                        <Message message='how are you?' />
                    </div>
                    <div className={s.textarea}>
                        <textarea placeholder="write your message..." cols="79" rows="3"></textarea>
                        <button>Send</button>
                    </div>

                </div>
            </div>


        </div>

    );
}

export default Dialog;
