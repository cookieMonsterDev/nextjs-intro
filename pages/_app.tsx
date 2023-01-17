import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layouts/Layout";
import { AppStore, StoreProvider } from "../src/store";

const store = new AppStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </StoreProvider>
  );
}
