import { ArrowDown, ArrowRight, ArrowUpRight, Check, MessageCircle, MoveRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import AreaCard from '../components/AreaCard'
import Accordion from '../components/Accordion'
import CTASection from '../components/CTASection'
import { faqs, lawyers, practiceAreas } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    'Lima & Azevedo Advocacia | São Raimundo Nonato–PI',
    'Advocacia moderna, responsável e humanizada em São Raimundo Nonato–PI, com atendimento presencial e on-line.',
  )

  return (
    <>
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__ambient hero__ambient--one" aria-hidden="true" />
        <div className="hero__ambient hero__ambient--two" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__eyebrow page-load page-load--1">
              <span /> Advocacia contemporânea · São Raimundo Nonato–PI
            </div>
            <h1 className="page-load page-load--2">
              Clareza para decidir.<br />
              <em>Segurança para seguir.</em>
            </h1>
            <p className="hero__lead page-load page-load--3">
              Orientação jurídica responsável para pessoas, famílias e empresas, com comunicação próxima e análise cuidadosa de cada situação.
            </p>
            <div className="hero__actions page-load page-load--4">
              <Link className="button button--primary" to="/contato">Falar com o escritório <ArrowUpRight size={18} /></Link>
              <Link className="text-link" to="/atuacao">Conhecer áreas de atuação <MoveRight size={19} /></Link>
            </div>
          </div>

          <div className="hero__visual page-load page-load--4">
            <div className="hero__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=90"
                alt="Ambiente moderno e elegante de escritório"
              />
              <div className="hero__image-shade" />
            </div>
            <div className="hero__floating-card">
              <span>Atendimento</span>
              <strong>Presencial & on-line</strong>
              <p>Para São Raimundo Nonato e região</p>
            </div>
            <div className="hero__seal" aria-hidden="true">
              <span>Ética · Clareza · Responsabilidade · </span>
              <b>L&A</b>
            </div>
          </div>
        </div>
        <a href="#apresentacao" className="hero__scroll" aria-label="Ir para a próxima seção">
          <span>Descubra</span><ArrowDown size={18} />
        </a>
      </section>

      <section id="apresentacao" className="manifesto section-space">
        <div className="container manifesto__grid">
          <Reveal>
            <span className="section-index">01 / Essência</span>
          </Reveal>
          <Reveal delay={80} className="manifesto__copy">
            <p className="manifesto__big">
              O direito não precisa parecer distante. Nosso papel é transformar questões complexas em caminhos <em>compreensíveis e seguros.</em>
            </p>
          </Reveal>
          <Reveal delay={160} className="manifesto__aside">
            <p>Escuta atenta, linguagem clara e atuação técnica para que cada pessoa compreenda suas possibilidades antes de tomar uma decisão.</p>
            <Link className="text-link" to="/escritorio">Conheça nossa forma de atuar <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="practice-preview section-space section-tint">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Áreas de atuação"
              title={<>Conhecimento jurídico aplicado<br />à vida real.</>}
              text="Atuação multidisciplinar, com análise individual e orientação adequada às particularidades de cada demanda."
            />
          </Reveal>
          <div className="area-grid">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={(index % 3) * 85}>
                <AreaCard area={area} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section-space">
        <div className="container experience__grid">
          <Reveal className="experience__media">
            <div className="experience__main-image">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=88"
                alt="Profissionais reunidos em atendimento jurídico"
                loading="lazy"
              />
            </div>
            <div className="experience__small-image">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=85"
                alt="Documentos organizados sobre mesa"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="experience__content">
            <span className="section-index">02 / Atendimento</span>
            <h2>Estratégia jurídica com uma experiência mais humana.</h2>
            <p>O atendimento começa pela compreensão do contexto. A partir disso, o escritório organiza as informações, analisa documentos e apresenta os próximos passos de forma objetiva.</p>
            <ul className="check-list">
              <li><Check size={17} /> Comunicação direta e acessível</li>
              <li><Check size={17} /> Análise técnica sem promessas de resultado</li>
              <li><Check size={17} /> Atendimento presencial e digital</li>
              <li><Check size={17} /> Atualização durante as etapas do trabalho</li>
            </ul>
            <Link className="button button--outline" to="/escritorio">Conhecer o escritório <ArrowUpRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="quote-section section-space">
        <div className="container">
          <Reveal className="quote-card">
            <Quote size={42} strokeWidth={1.2} />
            <blockquote>“Responsabilidade também é explicar com honestidade o que pode ser feito, quais são os riscos e qual caminho faz sentido para cada situação.”</blockquote>
            <div className="quote-card__author">
              <span />
              <p><strong>Lima & Azevedo</strong><small>Advocacia responsável e próxima</small></p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="team-preview section-space">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Profissionais"
              title="Pessoas que escutam antes de orientar."
              text="Atuação conjunta, visão multidisciplinar e cuidado com os detalhes que fazem diferença na compreensão de cada demanda."
            />
          </Reveal>
          <div className="team-grid">
            {lawyers.map((lawyer, index) => (
              <Reveal key={lawyer.name} delay={index * 100} className="lawyer-card">
                <div className="lawyer-card__image">
                  <img src={lawyer.image} alt={lawyer.name} loading="lazy" />
                  <Link to="/profissionais" aria-label={`Conhecer ${lawyer.name}`}><ArrowUpRight /></Link>
                </div>
                <div className="lawyer-card__content">
                  <span>{lawyer.role}</span>
                  <h3>{lawyer.name}</h3>
                  <p>{lawyer.oab}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-space section-tint">
        <div className="container faq-section__grid">
          <Reveal>
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Informação clara desde o primeiro contato."
              text="Algumas respostas iniciais sobre o funcionamento do atendimento."
            />
            <Link className="button button--outline" to="/contato">Fazer outra pergunta <MessageCircle size={18} /></Link>
          </Reveal>
          <Reveal delay={110}><Accordion items={faqs} /></Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
