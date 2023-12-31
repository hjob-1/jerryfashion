"use client";
import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
