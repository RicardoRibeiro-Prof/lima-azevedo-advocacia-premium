import { ArrowUpRight, Camera, Network, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { contactInfo, practiceAreas } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__orb" />
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__intro">
            <Logo light />
            <p>Atendimento jurídico responsável, claro e próximo para pessoas, famílias e empresas.</p>
            <div className="social-links">
              <a href="#instagram" aria-label="Instagram"><Camera size={18} /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Network size={18} /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Navegação</h3>
            <Link to="/escritorio">O escritório</Link>
            <Link to="/atuacao">Áreas de atuação</Link>
            <Link to="/profissionais">Profissionais</Link>
            <Link to="/contato">Contato</Link>
          </div>

          <div className="footer-column">
            <h3>Atuação</h3>
            {practiceAreas.slice(0, 4).map((area) => (
              <Link key={area.slug} to={`/atuacao/${area.slug}`}>{area.title}</Link>
            ))}
          </div>

          <div className="footer-column footer-column--contact">
            <h3>Contato</h3>
            <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}><Phone size={16} /> {contactInfo.phone}</a>
            <a href={`mailto:${contactInfo.email}`}><Mail size={16} /> {contactInfo.email}</a>
            <span><MapPin size={16} /> {contactInfo.address}</span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Lima & Azevedo Advocacia. Informações e registros demonstrativos.</p>
          <Link to="/politica-de-privacidade">Política de privacidade <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </footer>
  )
}
