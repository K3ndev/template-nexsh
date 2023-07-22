import React from "react";
import { GenericPanelProps } from "./types";

export function GenericPanel({ children, className = "" }: GenericPanelProps) {
  return (
    <section
      className={`mx-auto w-full max-w-5xl px-5 py-5 md:py-7 ${className}`}
    >
      {children}
    </section>
  );
}
