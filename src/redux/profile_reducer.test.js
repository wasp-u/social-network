import profileReducer, { addPostActionCreator, deletePost } from "./profile_reducer";

let state = {
    posts: [
        { id: 1, text: 'hello world', likeCount: 25 },
        { id: 2, text: 'hi, how are you?', likeCount: 3 },
        { id: 3, text: 'My name is Yurii', likeCount: 1244 },
        { id: 4, text: 'M.A.G.A', likeCount: 67 },
    ],
};

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('hello world');
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('hello world');
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts[0].text).toBe('hello world');
});

test('after deleting posts length of should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts.length).toBe(3);
});
