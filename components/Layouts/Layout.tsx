import Head from "next/head";
import Header from "../Header/Header";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>NextJs</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
