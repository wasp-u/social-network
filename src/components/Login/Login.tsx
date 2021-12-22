import { connect } from "react-redux";
import { login } from "../../redux/auth_reducer";
import LoginForm from "./LoginForm"
import { Navigate } from 'react-router'
import { AppStateType } from "../../redux/redux_store";

type MapState = {
    id: number | null
    isAuth: boolean
}
type MapDispatch = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<MapState & MapDispatch> = ({ id, isAuth, login }) => {

    const onSubmit = (data: { email: string, password: string, rememberMe: boolean }) => {
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

const mapStateToProps = (state: AppStateType): MapState => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.userData.id
    }
}

export default connect(mapStateToProps, { login })(Login)