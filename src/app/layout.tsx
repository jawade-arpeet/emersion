import React from "react";
import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";

import "@/globals.css";
import cn from "../utils/cn";

export const metadata: Metadata = {
  title: "Emersion",
  description:
    "Uncover the depths of coding with our immersive learning experience.",
};

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased bg-background text-foreground",
          hostGrotesk.className
        )}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
