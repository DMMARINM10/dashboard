import { configureStore } from '@reduxjs/toolkit'
import { postsSlice } from './slices/posts'
import { usersSlice } from './slices/users'

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
  }
})