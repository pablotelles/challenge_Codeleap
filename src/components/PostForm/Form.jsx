import React, { useState } from 'react'
import { PostForm, Container, PostContainerForm } from './styled'
import { Title, Input, Button, TextArea, TitleLabel } from '../../UI/commons'
import { addPost } from '../../api/conections/addPost'
import { userStore } from '../../redux/store/userStore'

const Form = () => {
  const [titlePost, setTitlePost] = useState('')
  const [content, setContent] = useState('')
  const userName = userStore.getState().name
  return (
      <PostContainerForm>
        <PostForm>
            <Title>{"What's on your mind?"}</Title>
            <Container>
                <TitleLabel
                    htmlFor="post__title"
                >Title</TitleLabel>
                <Input
                    id="post__title"
                    type="text"
                    placeholder="Hello word"
                    value={titlePost}
                    onChange={(ev) => setTitlePost(ev.target.value)}
                    required
                ></Input>
                <TitleLabel
                    htmlFor="post__text-area"
                >Content</TitleLabel>
                <TextArea
                    type="text"
                    id="post__text-area"
                    name="story"
                    placeholder="content here"
                    value={content}
                    onChange={(ev) => setContent(ev.target.value)}
                    required >
                </TextArea>
                <Button
                    style={content.length > 0 && titlePost.length > 0
                      ? {
                          background: 'black',
                          transition: '0.5s'
                        }
                      : {
                          background: 'gray',
                          opacity: 0.6,
                          transition: '0.5s'
                        }
                    }
                    onClick={(ev) => {
                      ev.preventDefault()
                      addPost(titlePost, content, userName)
                    }}
                >CREATE</Button>
            </Container>
        </PostForm>
        </PostContainerForm>
  )
}
export default Form
