import Head from "next/head";
import Header from "../Header/Header";

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Some page</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
