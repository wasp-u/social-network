const ADD_NEW_POST = 'ADD-NEW-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const addPostActionCreator = () => {
    return { type: ADD_NEW_POST };
}
export const changeNewPostTextActionCreator = (text) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText: text
    }
}

let initialState = {
    posts: [
        { id: 1, text: 'hello world', likeCount: 25 },
        { id: 2, text: 'hi, how are you?', likeCount: 3 },
        { id: 3, text: 'My name is Yurii', likeCount: 1244 },
        { id: 4, text: 'M.A.G.A', likeCount: 67 },
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = { id: 5, text: state.newPostText, likeCount: 0 }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default: return state;
    }
}
export default profileReducer;