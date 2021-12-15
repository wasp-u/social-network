import { profileAPI } from "../api/api";

const ADD_NEW_POST = 'profile_reducer/ADD-NEW-POST';
const SET_USER_PROFILE = 'profile_reducer/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profile_reducer/SET_PROFILE_STATUS';
const DELETE_POST = 'profile_reducer/DELETE_POST';

let initialState = {
    posts: [
        { id: 1, text: 'hello world', likeCount: 25 },
        { id: 2, text: 'hi, how are you?', likeCount: 3 },
        { id: 3, text: 'My name is Yurii', likeCount: 1244 },
        { id: 4, text: 'M.A.G.A', likeCount: 67 },
    ],
    profile: null,
    profileStatus: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = { id: 5, text: action.newPost, likeCount: 0 }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_PROFILE_STATUS: {
            return { ...state, profileStatus: action.status }
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(post => post.id !== action.postId) }
        }

        default: return state;
    }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_NEW_POST, newPost });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })


export const getProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data));
}

export const getProfileStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(response.data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status));
    } else {
        console.warn('Error update status');
    }
}

export default profileReducer;