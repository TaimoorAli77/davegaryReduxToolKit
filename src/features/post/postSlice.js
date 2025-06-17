import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "Learning New Ways", content: "I've traveled the world and find new ways..." },
    { id: 2, title: "Reading is the key", content: "Never Give Up..." },
]

export const postsSlice = createSlice({
    initialState,
    name: "posts",
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }

            }

        }
    }
})

export const selectAllPosts = (state) => state.posts
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer