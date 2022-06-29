import * as React from "react";
import Header from "./Header";

export default function Layout({
  header,
  children,
}: {
  header?: JSX.Element;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header header={header} />
      {children}
    </>
  );
}
