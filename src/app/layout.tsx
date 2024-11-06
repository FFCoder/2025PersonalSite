import type { Metadata } from "next";
import "./globals.css";
import TerminalLayout from "@/components/TerminalLayout";

export const metadata: Metadata = {
  title: "Jonathon's Portfolio",
  description: "Backend Developer specializing in Golang and Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TerminalLayout>
          {children}
        </TerminalLayout>
      </body>
    </html>
  );
}
