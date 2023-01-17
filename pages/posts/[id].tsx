import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from "next";
import { PostTypes } from "../../src/utils/types";
import style from "../../styles/Posts.module.scss";

const Post = ({ post }: { post: PostTypes }) => {
  return (
    <div className={`${style.post} ${style.single}`}>
      <span>{post.id}:</span>
      <span>
        {post.title.charAt(0).toLocaleUpperCase() + post.title.slice(1)}
      </span>
      <span>
        {post.body.charAt(0).toLocaleUpperCase() + post.body.slice(1)}
      </span>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{ post: PostTypes }> = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.id;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post: PostTypes) => {
    return {
      params: { id: `${post.id}` },
    };
  });

  return {
    paths: [...paths],
    fallback: false,
  };
};

export default Post;
