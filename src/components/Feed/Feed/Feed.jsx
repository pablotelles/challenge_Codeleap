import React, { useEffect, useState } from 'react'
import api from '../../../api/apiBase'
import { HeaderPosts, FeedList, FeedItem, ContentPosts, UserPost, ContentInfos, ContentText } from './styled'
import PostDateCreate from './PostDateCreate'
import { PostIcons } from './PostIcones'
import { Loader } from '../../Loader/Loader'
import ModalPostForm from '../ModalPostForm/ModalPostForm'

function Feed () {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get('?format=json')
      .then(({ data }) => {
        setData([...data.results])
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <FeedList>
      <ModalPostForm />
      {data.map(item => {
        return (
          <FeedItem key={item.id}>
            <HeaderPosts>
              <h3>{item.title}</h3>
              <div>
                <PostIcons item={item} />
              </div>
            </HeaderPosts>
            <ContentPosts>
              <ContentInfos>
                <UserPost>@{item.username}</UserPost>
                <PostDateCreate item={item} />
              </ContentInfos>
            <ContentText>{item.content}</ContentText>
            </ContentPosts>
          </FeedItem>
        )
      })}
      {data.length < 1 ? <Loader /> : ''}
    </FeedList>
  )
}
export default Feed
