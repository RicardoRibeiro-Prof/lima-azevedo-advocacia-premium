import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import InternalHero from '../components/InternalHero'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { lawyers } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Professionals() {
  usePageMeta('Profissionais | Lima & Azevedo Advocacia', 'Conheça os profissionais da Lima & Azevedo Advocacia.')

  return (
    <>
      <InternalHero eyebrow="Profissionais" title={<>Técnica, escuta e uma atuação <em>verdadeiramente conjunta.</em></>} text="Perfis complementares para uma análise mais ampla e um atendimento mais cuidadoso." number="03" />
      <section className="professionals-page section-space">
        <div className="container professionals-page__intro">
          <Reveal><span className="section-index">Equipe</span></Reveal>
          <Reveal delay={80}><p>O atendimento é conduzido com proximidade e responsabilidade. Quando necessário, os profissionais analisam a demanda de forma conjunta para reunir diferentes perspectivas jurídicas.</p></Reveal>
        </div>
        <div className="container professionals-list">
          {lawyers.map((lawyer, index) => (
            <Reveal key={lawyer.name} delay={index * 100} className={`professional-profile ${index % 2 ? 'professional-profile--reverse' : ''}`}>
              <div className="professional-profile__image"><img src={lawyer.image} alt={lawyer.name} /></div>
              <div className="professional-profile__content">
                <span>{lawyer.role}</span>
                <h2>{lawyer.name}</h2>
                <p className="professional-profile__oab"><BadgeCheck size={17} /> {lawyer.oab}</p>
                <p>{lawyer.bio}</p>
                <div className="professional-profile__areas">{lawyer.areas.map((area) => <span key={area}>{area}</span>)}</div>
                <a className="text-link" href="https://wa.me/5589999990000" target="_blank" rel="noreferrer">Solicitar atendimento <ArrowUpRight size={18} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
