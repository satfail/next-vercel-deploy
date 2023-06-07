import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />);
}
