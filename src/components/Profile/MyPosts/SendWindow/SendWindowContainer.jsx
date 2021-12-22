import { connect } from 'react-redux';
import { profile_actions } from '../../../../redux/profile_reducer';
import SendWindow from './SendWindow';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const SendWindowContainer = connect(mapStateToProps, { addNewPost: profile_actions.addPostActionCreator })(SendWindow);

export default SendWindowContainer;