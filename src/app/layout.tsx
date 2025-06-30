import Provider from './Provider';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageProvider';
import NavBar from '@/shared-components/navigation-components/Header/NavBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="container">
      <body>
        <Provider>
          <LanguageProvider>
            <header>
              <link rel="icon" href="/DanLogo.png" />
              <NavBar />
            </header>
            {children}
          </LanguageProvider>
        </Provider>
      </body>
    </html>
  );
}
