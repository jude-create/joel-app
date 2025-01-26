import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "JOELMGBIKEH",
  description: "My Portfolio Website",
  icons: {
    icon: [
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg' },
    ],
  },
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
