import React from 'react'
import Feed from '../../components/Feed/Feed/Feed'
import Header from '../../components/Header/Header'
import Form from '../../components/Post/Form'

const Home = () => {
  return (
         <>
            <main>
              <Header />
              <Form />
              <Feed />
            </main>
         </>
  )
}
export default Home
