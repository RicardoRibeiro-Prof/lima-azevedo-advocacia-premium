import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  ['Início', '/'],
  ['O escritório', '/escritorio'],
  ['Atuação', '/atuacao'],
  ['Profissionais', '/profissionais'],
  ['Contato', '/contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>
            ))}
          </nav>
          <Link className="header-cta" to="/contato">
            Agendar atendimento <ArrowUpRight size={17} />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-panel__glow" />
        <nav aria-label="Navegação móvel">
          {links.map(([label, path], index) => (
            <NavLink key={path} to={path} end={path === '/'} style={{ '--item-delay': `${index * 55}ms` }}>
              <span>0{index + 1}</span>{label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-panel__footer">
          <p>Atendimento presencial e on-line</p>
          <Link to="/contato">Fale com o escritório <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </>
  )
}
