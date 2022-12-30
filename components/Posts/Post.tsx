import Link from 'next/link'
import React from 'react'
import { PostTypes } from '../../utils/types'
import style from './Posts.module.scss'

const Post = ({userId, id, body, title}: PostTypes) => {
  return (
    <Link href={`/posts/${id}`}>
    <div className={style.post}>
      <span>{id}</span>
      <span>{userId}</span>
      <span>{body}</span>
      <span>{title}</span>
    </div>
    </Link>
  )
}

export default Post