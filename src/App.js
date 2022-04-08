import React from 'react'
import './styled.css'
import { userStore, persistor } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppRauter from './routes/routes'
import { postEditStore } from './redux/store/postEditStore'

function App () {
  console.log(postEditStore.getState())
  postEditStore.subscribe(() => {
    console.log(postEditStore.getState())
  })
  return (
    <Provider store={userStore} postEditStore={postEditStore}>
      <PersistGate loading={null} persistor={persistor}>
          <AppRauter />
      </PersistGate>
    </Provider>
  )
};

export default App
