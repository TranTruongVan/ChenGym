"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "@web/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@web/components";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
      >
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}
