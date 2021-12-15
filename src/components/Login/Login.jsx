import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import LoginForm from "./LoginForm"
import { Navigate } from 'react-router'

function Login({ id, isAuth, login }) {

    const onSubmit = (data) => {
        login(data.email, data.password, data.rememberMe)
    }

    if (isAuth) {
        return <Navigate to={`/profile/${id}`} />
    } else {
        return (
            <div>
                <h1>
                    Login
                </h1>
                <LoginForm onSubmit={onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.data.id
    }
}

export default connect(mapStateToProps, { login })(Login)