import api from '../../api/apiBase'

export const deletePost = (item) => {
  console.log(item)
  const deletePost = confirm('Are you sure you want to delete this item?')
  if (deletePost === true) {
    api.delete(item.item.id + '/', {})
      .then(function (response) {
        console.log('post deletado', response)
        window.location.reload()
      })
      .catch(function (error) {
        console.log('post deletado', error)
      })
  }
}
