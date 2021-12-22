import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { requiredField } from "../../utils/validators/validators";
// import { Input } from "../common/FormControls/FormControls";

type LoginFormData = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormData>> = ({ handleSubmit, error }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder='email...'
                        name='email'
                        component='input'
                        validate={[requiredField]} />
                </div>
                <div>
                    <Field placeholder='password...'
                        name='password'
                        component='input'
                        type={'password'}
                        validate={[requiredField]} />
                </div>
                <div>
                    <Field type="checkbox" name='rememberMe' component={'input'} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<LoginFormData>({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;