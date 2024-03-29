import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        enableSystem={false}
        defaultTheme="light"
        attribute="class"
      >
        <NextNProgress
          color="#78716c"
          options={{ showSpinner: false, easing: "ease" }}
        />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
