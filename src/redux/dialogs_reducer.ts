import { Actions } from "./redux_store"

export type DialogType = {
    userName: string
    userAvatar: string
    newestMassage: string
    id: number
}
export type MessageType = {
    userName: string
    userAvatar: string
    message: string
    id: number
}

let initialState = {
    dialogs: [
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: 1 },
        { userName: "Steven", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "what are you doing?", id: 2 },
        { userName: "Ivan", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "i'm fine", id: 3 },
        { userName: "Igor", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "are you serious?", id: 4 },
        { userName: "Alex", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: 5 },
        { userName: "Mark", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: 6 },
        { userName: "Anton", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: 7 },
        { userName: "Ilon", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', newestMassage: "how are you?", id: 8 },
    ] as Array<DialogType>,
    messages: [
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 1 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "what are you doing?", id: 2 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "i'm fine", id: 3 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "are you serious?", id: 4 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 5 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 6 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 7 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 8 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 8 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 8 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 8 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 8 },
        { userName: "Max", userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', message: "how are you?", id: 8 },
    ] as Array<MessageType>,
}
type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: Actions<typeof dialogs_actions>): initialStateType => {
    switch (action.type) {
        case 'dialogs_reducer/ADD-NEW-MESSAGE':
            let newMessage: MessageType = {
                userName: "Max",
                userAvatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                message: action.newMessage,
                id: 9,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default: return state;
    }
};

export const dialogs_actions = {
    addMessage: (newMessage: string) => {
        return { type: 'dialogs_reducer/ADD-NEW-MESSAGE', newMessage } as const
    }
}


export default dialogsReducer