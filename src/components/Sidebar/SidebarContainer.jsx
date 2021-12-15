import { connect } from "react-redux"
import { compose } from "redux"
import Sidebar from "./Sidebar"

let mapStateToProps = (state) => {
    return {
        myId: state.auth.data.id,
    }
}
export default compose(
    connect(mapStateToProps, {}),
)(Sidebar)

