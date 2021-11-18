const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';


export const addMessageActionCreator = () => {
    return { type: ADD_NEW_MESSAGE };
}
export const changeNewMessageTextActionCreator = (text) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

let initialState = {
    dialogs: [
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: "1" },
        { userName: "Stiven", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "what are you doing?", id: "2" },
        { userName: "Ivan", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "i'm fine", id: "3" },
        { userName: "Igor", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "are you serious?", id: "4" },
        { userName: "Alex", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: "5" },
        { userName: "Mark", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: "6" },
        { userName: "Anton", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: "7" },
        { userName: "Ilon", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: "8" },
    ],
    messages: [
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: "1" },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "what are you doing?", id: "2" },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "i'm fine", id: "3" },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "are you serious?", id: "4" },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: "5" },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: "6" },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: "7" },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: "8" },
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                userName: "Max",
                userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                message: state.newMessageText,
                id: 9
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            };
        case CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default: return state;
    }
};

export default dialogsReducer;