import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { TripProvider } from '../contexts/TripContext';
import { ItineraryProvider } from '../contexts/ItineraryContext';
import { BudgetProvider } from '../contexts/BudgetContext';
import { defaultMetadata } from './metadata';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TripProvider>
          <ItineraryProvider>
            <BudgetProvider>
              <Navbar />
              {children}
              <Footer />
            </BudgetProvider>
          </ItineraryProvider>
        </TripProvider>
      </body>
    </html>
  );
}
