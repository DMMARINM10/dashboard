import { addPosts } from './'

export const addPostPage = (payload) => {
  return async (dispatch) => {
    dispatch(addPosts(payload))
  }
}
