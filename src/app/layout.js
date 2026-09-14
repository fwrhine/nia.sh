import { Provider } from "@/components/ui/provider";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "nia.sh",
  description: "Welcome back.",
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
