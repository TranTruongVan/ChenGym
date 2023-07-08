import { Footer, Header } from "@web/components";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@web/components/ThemeProvider";
import { TailwindIndicator } from "@web/components/TailwindIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChenGym",
  description: "This is ChenGym greeting page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>
            {children}
            <TailwindIndicator />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
