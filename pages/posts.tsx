import Head from "next/head";


const Posts = ({posts}: any) => {

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>Posts</h1>
      <br></br>
      <br></br>
      <Posts posts={posts}/>
    </>
  );
};

export const getStaticProps = async () =>{
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())

  return {
    props: {
      posts: data
    }
  }
}

export default Posts;
