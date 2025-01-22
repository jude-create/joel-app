import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "JOELMGBIKEH",
  description: "My Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className="font-anta"
      >
        {children}
      </body>
    </html>
  );
}
