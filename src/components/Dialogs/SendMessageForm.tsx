import { Field, reduxForm } from "redux-form"
import { maxLength, requiredField } from "../../utils/validators/validators";
import { Textarea } from "../common/FormControls/FormControls";
const maxLength10 = maxLength(10);

// type PropsType = {
//     handleSubmit: () => void
// }

const SendMessage = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="write your message..."
                        name='newMessage'
                        component={Textarea}
                        validate={[requiredField, maxLength10]}
                    />
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </form>
        </div>
    )
}

const SendMessageForm = reduxForm({
    form: 'newMessage'
})(SendMessage)

export default SendMessageForm;