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

export async function getServerSideProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => response.json());

  return {
    props: {
      post: data,
    },
  };
}

export default Post;
