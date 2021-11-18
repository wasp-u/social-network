import { connect } from 'react-redux';
import { addMessageActionCreator, changeNewMessageTextActionCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => { dispatch(addMessageActionCreator()) },
        onTextAreaChange: (text) => { dispatch(changeNewMessageTextActionCreator(text)) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
