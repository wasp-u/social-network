import { Actions, AppStateType } from './redux_store';
import { PhotosType, PostType, ProfileType } from './../types/types';
import { profileAPI } from "../api/api";
import { ThunkAction } from 'redux-thunk';

let initialState = {
    posts: [
        { id: 1, text: 'hello world', likeCount: 25 },
        { id: 2, text: 'hi, how are you?', likeCount: 3 },
        { id: 3, text: 'My name is Yurii', likeCount: 1244 },
        { id: 4, text: 'M.A.G.A', likeCount: 67 },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    profileStatus: '',
    newPostText: '',
};

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: Actions<typeof profile_actions>): InitialStateType => {
    switch (action.type) {
        case 'profile_reducer/ADD-NEW-POST':
            let newPost = { id: 5, text: action.newPostMessage, likeCount: 0 }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case 'profile_reducer/SET_USER_PROFILE': {
            return { ...state, profile: action.profile }
        }
        case 'profile_reducer/SET_PROFILE_STATUS': {
            return { ...state, profileStatus: action.status }
        }
        case 'profile_reducer/DELETE_POST': {
            return { ...state, posts: state.posts.filter(post => post.id !== action.postId) }
        }
        case 'profile_reducer/SAVE_PHOTO_SUCCESS': {
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        }

        default: return state;
    }
}
export const profile_actions = {
    addPostActionCreator: (newPostMessage: string) => ({ type: 'profile_reducer/ADD-NEW-POST', newPostMessage } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'profile_reducer/SET_USER_PROFILE', profile } as const),
    setProfileStatus: (status: string) => ({ type: 'profile_reducer/SET_PROFILE_STATUS', status } as const),
    deletePost: (postId: number) => ({ type: 'profile_reducer/DELETE_POST', postId } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'profile_reducer/SAVE_PHOTO_SUCCESS', photos } as const)
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, Actions<typeof profile_actions>>
export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(profile_actions.setUserProfile(data));
}
export const getProfileStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfileStatus(userId)
    dispatch(profile_actions.setProfileStatus(data));
}
export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    debugger
    if (data.resultCode === 0) {
        dispatch(profile_actions.savePhotoSuccess(data.data.photos));
    }
}
export const updateProfileStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(profile_actions.setProfileStatus(status));
    } else {
        console.warn('Error update status');
    }
}

export default profileReducer;