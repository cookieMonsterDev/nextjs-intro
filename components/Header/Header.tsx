import Link from "next/link";
import style from "./Header.module.scss";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Posts",
    link: "/posts",
  },
  {
    name: "Articles",
    link: "/articles",
  },
  {
    name: "Content",
    link: "/content",
  }
];

const Header = () => {
  return (
    <header>
        <ul className={style.navigation}>
          {pages &&
            pages.map((i, j) => (
              <li key={j}>
                <Link href={i.link}>{i.name}</Link>
              </li>
            ))}
        </ul>
    </header>
  );
};

export default Header;
