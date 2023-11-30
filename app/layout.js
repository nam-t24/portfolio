import '../styles/globals.css'

export const metadata = {
  title: 'Nam Truong | Portfolio',
  description: 'A student at the University of Texas at Dallas, Nam Truong is an aspiring software engineer.',
  icon: '/favicon.ico',
  apple: '/favicon.ico',
  authors: ['Nam'],
  keywords: ['Nam Truong', 'Nam', 'Portfolio', 'Nam Truong Portfolio', 'Nam Truong UTD'],
  openGraph: {
    images: '/NT_CrownNew.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}