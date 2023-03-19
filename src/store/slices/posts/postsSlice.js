import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, { payload }) => {
        const { page, data } = payload
      state[page] = data
    }
  }
})

export const { addPosts } = postsSlice.actions