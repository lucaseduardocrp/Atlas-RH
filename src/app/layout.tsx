import { Poppins } from 'next/font/google'

import '../styles/global.css'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const poppins = Poppins({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'] 
  })

export const metadata = {
  title: 'Atlas - Consultoria de RH',
  description: 'Processos organizados para sua empresa crescer no automático',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
