import Link from "next/link";
import React from "react";
import { PostTypes } from "../../src/utils/types";
import style from "../../styles/Posts.module.scss";

const Post = ({ id, body, title }: PostTypes) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className={style.post}>
        <span>{id}:</span>
        <span>{title.charAt(0).toLocaleUpperCase() + title.slice(1)}</span>
        <span>{body.charAt(0).toLocaleUpperCase() + body.slice(1)}</span>
      </div>
    </Link>
  );
};

export default Post;
