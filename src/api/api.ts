import { UserType } from './../types/types';
import axios from "axios"
import { PhotosType, ProfileType } from "../types/types"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '66a17eae-cbce-43b5-af2b-962be4bc6107'
    }
})
type ResponseFollowUnfollow = {
    resultCode: number
    messages: Array<string>,
    data: any
}
type ResponseGetUsers = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<ResponseGetUsers>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseFollowUnfollow>(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<ResponseFollowUnfollow>(`follow/${userId}`)
            .then(response => response.data)
    }
}

type ResponseGetProfile = ProfileType
type ResponseUpdateStatus = {
    resultCode: number
    messages: Array<string>,
    data: any
}
type ResponseSavePhoto = {
    resultCode: number
    messages: Array<string>,
    data: {
        photos: PhotosType
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ResponseGetProfile>(`profile/${userId}`)
            .then(response => response.data)
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseUpdateStatus>(`profile/status`, { status: status })
            .then(res => res.data)
    },
    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<ResponseSavePhoto>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}


type ResponseAuthMe = {
    resultCode: number
    messages: Array<string>,
    data: {
        id: number
        email: string
        login: string
    }
}
type ResponseLogin = {
    resultCode: number
    messages: Array<string>
    data: {
        id: number
    }
}
type ResponseLogout = {
    resultCode: number
    messages: Array<string>,
    data: any
}

export const authAPI = {
    authMe() {
        return instance.get<ResponseAuthMe>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<ResponseLogin>('auth/login', { email, password, rememberMe })
            .then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseLogout>('auth/login').then(response => response.data)
    }
}