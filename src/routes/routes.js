import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import { userStore } from '../redux/store/userStore'

function AppRauter () {
  const isAuthenticade = userStore.getState().login
  const PrivateRouter = () => {
    return (isAuthenticade
      ? <Home />
      : <Navigate to={'/login'} />
    )
  }
  return (
        <Router>
            <Routes>
                <Route path='/' element={<PrivateRouter />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
  )
};

export default AppRauter
