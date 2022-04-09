import api from '../apiBase'

export const getPosts = (setData) => {
  api.get('?format=json')
    .then(({ data }) => {
      setData([...data.results])
    })
    .catch(function (error) {
      console.log(error)
    })
}
