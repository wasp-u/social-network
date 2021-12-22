import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.auth.userData,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, { logout })(HeaderContainer);