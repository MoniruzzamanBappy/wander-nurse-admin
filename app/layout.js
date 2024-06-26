import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
// import Providers from "./Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Wander Nurse Admin",
  description: "Generated by Dark Tech",
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta property="og:title" content="Wander Nurse Admin" key="title" />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.14.1/react-datepicker.min.css"
        />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#0CC2AA"
          startPosition={0.3}
          stopDelayMs={300}
          height={2}
          showOnShallow={true}
          options={{ showSpinner: true }}
          shallowRouting
        />
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}
