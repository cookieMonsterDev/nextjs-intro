import React from 'react'
import { PostTypes } from '../../utils/types'
import Post from './Post'

interface PostsProps {
  posts: PostTypes[]
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      {posts.map((i, j) => <Post {...i} key={j}/>)}
    </div>
  )
}

export default Posts