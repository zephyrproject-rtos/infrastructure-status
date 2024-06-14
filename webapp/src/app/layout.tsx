"use client";

import { DataProvider } from "@/api/client";
import { StyledComponentsRegistry } from "@/lib/registry";
import styled from "styled-components";
import { Roboto } from "next/font/google";
import { themes } from "./themes";
import { ThemeProvider } from "./ThemeProvider";

const inter = Roboto({ weight: ["400", "500"], subsets: ["latin"] });

const Box = styled.div`
  max-width: 600px;
  padding: 16px;
  margin: 16px auto;
`;

const Body = styled.body`
  background-color: ${(props) => props.theme.colors.body};
  margin: 0;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
      </head>
      <StyledComponentsRegistry>
        <ThemeProvider>
          <Body className={inter.className}>
            <DataProvider>
              <Box>{children}</Box>
            </DataProvider>
          </Body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
