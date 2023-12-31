import React from "react";
import { LayoutProps } from "./types";
import { Footer, Header } from "@/shared/components/custom/index";

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
