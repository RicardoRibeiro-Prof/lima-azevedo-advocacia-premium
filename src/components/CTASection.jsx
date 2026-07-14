import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="cta-section section-space">
      <div className="container">
        <Reveal className="cta-card">
          <div className="cta-card__glow" />
          <div>
            <span>Atendimento responsável</span>
            <h2>Uma conversa clara pode ser o primeiro passo.</h2>
            <p>Apresente sua situação para que o escritório informe como funciona o atendimento e quais documentos podem ser necessários.</p>
          </div>
          <div className="cta-card__actions">
            <Link className="button button--light" to="/contato">Enviar mensagem <ArrowRight size={18} /></Link>
            <a className="button button--ghost-light" href="https://wa.me/5589999990000" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
