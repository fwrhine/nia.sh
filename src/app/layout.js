import { Provider } from "@/components/ui/provider";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "𝚗𝚒𝚊.𝚜𝚑",
  description: "Welcome back.",
  appleWebApp: {
    title: "nia.sh",
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${ibmPlexMono.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
