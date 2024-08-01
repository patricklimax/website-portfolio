import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './components/theme-provider';
import { manropeFont } from './helpers/fonts';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: "patricklimax",
  description: "Website Porfolio from PATRICKLIMAX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${manropeFont.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main className='mx-auto max-w-5xl'>
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
