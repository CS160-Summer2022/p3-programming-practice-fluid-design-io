import Head from "next/head";
import * as React from "react";
import Header from "./Header";

export default function Layout({
  title,
  header,
  children,
}: {
  title?: string | React.ReactNode;
  header?: JSX.Element;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title={title} header={header} />
      <Head>
        <title>{title ? title : "Project 3 by Oliver Pan"}</title>
      </Head>
      {children}
    </>
  );
}
