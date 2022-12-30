import Head from "next/head";
import List from "../../components/Posts/Posts"

const Posts = () => {

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      <br></br>
      <br></br>
      <List />
    </>
  );
};

export default Posts;
