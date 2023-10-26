import React, { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetch('/api/auth').then((res) => {
      res.text().then(text => {
        zE("messenger", "loginUser", function (callback: (jwt: string) => void) {
          callback(text.replace('"', '').replace('"', ''));
        });
      })
    });
  }, []);
  return (
    <>
      <Head>
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=16c6b231-cc69-4adf-8d80-c879a94eb9e3"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
