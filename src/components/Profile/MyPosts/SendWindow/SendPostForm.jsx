import { Field, reduxForm } from "redux-form"
import { maxLength, requiredField } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormControls/FormControls";

const maxLength30 = maxLength(30);

const SendPost = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="your news..."
                        name='newPost'
                        component={Textarea}
                        validate={[requiredField, maxLength30]}
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        </div>
    )
}
const SendPostForm = reduxForm({
    form: 'newPost'
})(SendPost)

export default SendPostForm;
