import { connect } from "react-redux"
import { compose } from "redux"
import Sidebar from "./Sidebar"

let mapStateToProps = (state) => {
    return {
        myId: state.auth.userData.id,
    }
}
export default compose(
    connect(mapStateToProps, {}),
)(Sidebar)

