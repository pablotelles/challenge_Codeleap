import api from '../apiBase'

export const upDatePost = (item, title, content) => api.patch(item + '/', {
  title: title,
  content: content
})
  .then(function (response) {
    console.log('update', response)
    window.location.reload()
  })
  .catch(function (error) {
    console.log(error)
  })
