import { Poppins } from 'next/font/google'

import '../styles/global.css'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Head from 'next/head'

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Frontend, Desenvolvedor Front-end, Freelancer, UI Designer, Developer" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Lucas Eduardo Crespo de Carvalho" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io" />
        <meta property="og:title" content="Atlas - Consultoria de RH" />
        <meta property="og:description" content="Processos organizados para sua empresa crescer no automático" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io" />
        <meta property="twitter:title" content="Atlas - Consultoria de RH" />
        <meta property="twitter:description" content="Processos organizados para sua empresa crescer no automático" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
      </Head>
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
