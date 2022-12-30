import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from "next";
import { PostTypes } from "../../utils/types";

const Post = ({ post }: { post: PostTypes }) => {
  return <div>{post.body}</div>;
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
    fallback: false
  };
};

export default Post;
