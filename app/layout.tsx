import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './providers/theme-provider';
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
          <main className='mx-auto max-w-5xl p-3 md:p-0'>
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
