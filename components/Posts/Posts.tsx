import { useState, useEffect } from "react";
import { PostTypes } from "../../utils/types";
import Post from "./Post";

const List = () => {
  const [posts, setPosts] = useState<PostTypes[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      ).then((response) => response.json());

      setPosts(data);
    };

    fetchData();
  }, []);

  return <div>{posts && posts.map((i, j) => <Post {...i} key={j} />)}</div>;
};

export default List;
