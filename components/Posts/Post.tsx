import React from 'react'
import { PostTypes } from '../../utils/types'
import style from './Posts.module.scss'

const Post = ({userId, id, body, title}: PostTypes) => {
  return (
    <div className={style.post}>
      <span>{id}</span>
      <span>{userId}</span>
      <span>{body}</span>
      <span>{title}</span>
    </div>
  )
}

export default Post