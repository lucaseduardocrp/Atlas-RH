import { Poppins } from 'next/font/google'

import '../styles/global.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Consultoria de RH, Atlas, Consultoria, Coach, Negócios, Empresa" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Lucas Eduardo Crespo de Carvalho | Atlas Consultoria de RH" />
      </head>
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
