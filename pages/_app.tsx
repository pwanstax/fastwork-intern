import "../styles/globals.scss";
import Head from "next/head";
import type {AppProps} from "next/app";
import Layout from "../components/layout/layout";
import {config} from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
