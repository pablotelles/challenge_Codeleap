import { createStore } from 'redux'
import { PostEditReducer } from '../reducer/postEditReducer'

export const postEditStore = createStore(PostEditReducer)
