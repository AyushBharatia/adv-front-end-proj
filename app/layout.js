import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { TripProvider } from '@/context/TripContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Travel Ease - Your Travel Planning Companion',
  description: 'Plan your trips, manage itineraries, and track budgets all in one place',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TripProvider>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </TripProvider>
      </body>
    </html>
  )
}
