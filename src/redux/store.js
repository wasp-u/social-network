import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: 'hello world', likeCount: 25 },
                { id: 2, text: 'hi, how are you?', likeCount: 3 },
                { id: 3, text: 'My name is Yurii', likeCount: 1244 },
                { id: 4, text: 'M.A.G.A', likeCount: 67 },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
    },
    _callSubscriber() { },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}

export default store;