import React from 'react'
import Feed from '../../components/Feed/Feed/Feed'
import Header from '../../components/Header/Header'
import Form from '../../components/PostForm/Form'

const Home = () => {
  return (
         <>
            <Header />
            <main>
              <Form />
              <Feed />
            </main>
         </>
  )
}
export default Home
