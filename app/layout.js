import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  title: 'Nam Truong | Portfolio',
  description: 'A student at the University of Texas at Dallas, Nam Truong is an aspiring software engineer.',
  authors: ['Nam'],
  keywords: ['Nam Truong', 'Nam', 'Portfolio', 'Nam Truong Portfolio', 'Nam Truong UTD'],
  openGraph: {
    images: '/NT_CrownNew.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}