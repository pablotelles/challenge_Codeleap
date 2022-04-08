import React from 'react'
import iconDelete from '../../../assets/icons/delete.png'
import iconUpdate from '../../../assets/icons/update.png'
import { deletePost } from '../../../api/CRUD/deletePost'
import { userStore } from '../../../redux/store'
import { editPostActions } from '../../../redux/actions/postEditActions'
import { postEditStore } from '../../../redux/store/postEditStore'

export const PostIcons = (item) => {
  const userName = userStore.getState().name

  function editPost (item) {
    postEditStore.dispatch(editPostActions(item))
  }
  if (userName === item.item.username) {
    return (
      <>
        <img
        src={iconDelete}
        alt="icon delete"
        onClick={() => deletePost(item) }
        />
        <img
        src={iconUpdate}
        alt="icon update"
        onClick={() => editPost(item.item)}
        />
      </>
    )
  }
}
