import { PostTypes } from "../../src/utils/types";
import Post from "./Post";
import style from "../../styles/Posts.module.scss";

const List = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <div className={style.list}>
      {posts && posts.map((i, j) => <Post {...i} key={j} />)}
    </div>
  );
};

export default List;
