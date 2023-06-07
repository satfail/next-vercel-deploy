import React from "react";
import styles from "./MainLayout.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Navbar } from "../Navbar";
const inter = Inter({ subsets: ["latin"] });

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
};
