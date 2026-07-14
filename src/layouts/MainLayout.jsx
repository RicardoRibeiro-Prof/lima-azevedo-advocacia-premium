import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import ScrollProgress from '../components/ScrollProgress'
import PageTransition from '../components/PageTransition'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <PageTransition><Outlet /></PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
