import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../../redux/profile_reducer';
import SendWindow from './SendWindow';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (newPost) => {
            dispatch(addPostActionCreator(newPost))
        },
    }
}

const SendWindowContainer = connect(mapStateToProps, mapDispatchToProps)(SendWindow);

export default SendWindowContainer;