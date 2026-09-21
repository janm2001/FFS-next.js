import "./globals.css";
import Navbar from "./components/Navbar";
import { NotificationProvider } from "./components/NofiticationContext";
import Notification from "./components/Notification";
import AuthSessionProvider from "./components/SessionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <AuthSessionProvider>
          <NotificationProvider>
            <Navbar />
            <Notification />
            {children}
          </NotificationProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
