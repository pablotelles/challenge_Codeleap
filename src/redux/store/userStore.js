import { createStore } from 'redux'
import { userReducer } from '../reducer/userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const UserpersistConfig = {
  key: 'auth',
  storage
}
const persistedReducer = persistReducer(UserpersistConfig, userReducer)

export const userStore = createStore(persistedReducer)
export const persistor = persistStore(userStore)
