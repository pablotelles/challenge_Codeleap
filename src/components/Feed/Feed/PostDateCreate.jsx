import React from 'react'
import moment from 'moment'

const PostDateCreate = (item) => {
  const now = new Date()
  const postDate = new Date(item.item.created_datetime)
  const result = moment(postDate).diff(moment(now))
  const humanize = moment.duration(result).humanize()

  return (
    <p>{humanize}</p>
  )
}
export default PostDateCreate
