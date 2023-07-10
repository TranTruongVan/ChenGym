import {
  Footer,
  Header,
  LoadingScreen,
  TailwindIndicator,
} from "@web/components";
import "./globals.css";
import { Inter } from "next/font/google";
import { getCurrentUser } from "./_actions/auth";
import Providers from "../components/HOC/Providers";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return {
      title: "ChenGym",
      description: "This is ChenGym greeting page",
    };
  } else {
    return {
      title: `ChenGym-${currentUser.username}`,
      description: `Welcome  ${currentUser.username}`,
    };
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers>
          <LoadingScreen />
          <Header />
          <main>
            {children}
            <TailwindIndicator />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
