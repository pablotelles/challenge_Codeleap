import React, { useState } from 'react'
import { HeaderPosts, FeedList, FeedItem, ContentPosts, UserPost, ContentInfos, ContentText } from './styled'
import PostDateCreate from './PostDateCreate'
import { PostIcons } from './PostIcones'
import { Loader } from '../../Loader/Loader'
import ModalEditPost from '../ModalEditPost/ModalEditPost'
import { getPosts } from '../../../api/conections/getPosts'

function Feed () {
  const [data, setData] = useState([])
  getPosts(setData)

  return (
    <FeedList>
      <ModalEditPost />
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
