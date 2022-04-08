import React, { useState } from 'react'
import { ContainerModal } from './styled'
import { Button, Input, TextArea, Title, TitleLabel } from '../../../UI/commons'
import { upDatePost } from '../../../api/CRUD/upDatePost'
import { postEditStore } from '../../../redux/store/postEditStore'

const ModalPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [modal, setModal] = useState(false)
  const [postToEdit, setPostEdit] = useState({})

  postEditStore.subscribe(() => {
    const post = postEditStore.getState().item
    setPostEdit(post)
    setModal(true)
  })

  if (modal) {
    return (
    <ContainerModal>
      <Title>Edit Item</Title>
      <TitleLabel htmlFor="title">Title</TitleLabel>
      <Input
        type="text"
        id='title'
        placeholder={postToEdit.title}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        required
      />
      <TitleLabel htmlFor="content">Content</TitleLabel>
      <TextArea
        type="text"
        id='content'
        placeholder={postToEdit.content}
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
        required
      />
      <Button
        tyTextAreape="submit"
        onClick={(ev) => {
          ev.preventDefault()
          upDatePost(postToEdit.id, title, content)
        }}
        style={content.length > 0 && title.length > 0
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
      >SAVE</Button>
    </ContainerModal>
    )
  }
}

export default ModalPostForm
