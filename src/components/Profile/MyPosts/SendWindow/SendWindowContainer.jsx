import { connect } from 'react-redux';
import { addPostActionCreator, changeNewPostTextActionCreator } from '../../../../redux/profile_reducer';
import SendWindow from './SendWindow';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        onTextAreaChange: (text) => {
            dispatch(changeNewPostTextActionCreator(text))
        }
    }
}

const SendWindowContainer = connect(mapStateToProps, mapDispatchToProps)(SendWindow);

export default SendWindowContainer;