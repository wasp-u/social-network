import { Field, reduxForm } from "redux-form"
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControls";

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field placeholder='email...'
                        name='email'
                        component={Input}
                        validate={[requiredField]} />
                </div>
                <div>
                    <Field placeholder='password...'
                        name='password'
                        component={Input}
                        type={'password'}
                        validate={[requiredField]} />
                </div>
                <div>
                    <Field type="checkbox" name='rememberMe' component={'input'} /> remember me
                </div>
                {error ? <div className='loginError'>{error}</div> : <div></div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;