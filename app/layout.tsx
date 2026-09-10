import Navbar from "./components/Navbar";
import AuthSessionProvider from "./components/SessionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthSessionProvider>
        <Navbar />
        <body>{children}</body>
      </AuthSessionProvider>
    </html>
  );
}
