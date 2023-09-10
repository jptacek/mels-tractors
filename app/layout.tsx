import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {  Footer, NavBar} from "@/components";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mel\'s Tractors',
    template: '%s | Mel\'s Tractors',
},
description: 'A Great Place to Buy Tractors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  >
      <body className='bg-orange-50 flex flex-col px-8 py-2 min-h-screen'>
        <header>
            <NavBar />
        </header>
        <main className='grow py-3'>
            {children}
        </main>
        <footer className='border-t py-3 text-center text-slate-500 text-sm'>
            <Footer />
        </footer>
    </body>
    </html>  
    )
}
