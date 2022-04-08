import api from '../apiBase'

export const addPost = (titlePost, content, userName) =>
  api.post('/', {
    username: userName,
    title: titlePost,
    content: content
  })
    .then(function (response) {
      console.log(response)
      window.location.reload()
    })
    .catch(function (error) {
      console.log(error)
    })
