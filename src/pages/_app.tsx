import type { AppProps } from "next/app";
import { IBM_Plex_Mono } from "@next/font/google";

import "@/styles/globals.css";

const IBM = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={IBM.className}>
      <Component {...pageProps} />
    </main>
  );
}
