import Head from "next/head";
import List from "../../components/PostsList/PostsList";
import { PostTypes } from "../../src/utils/types";

const Posts = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <>
      <Head>
        <title>NextJs Posts</title>
      </Head>
      <h1 style={{ textAlign: "center" }}>Posts</h1>
      <List posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (response) => response.json()
  );

  return {
    props: {
      posts: data,
    },
  };
};

export default Posts;
