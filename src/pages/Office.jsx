import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import InternalHero from '../components/InternalHero'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { usePageMeta } from '../hooks/usePageMeta'

const values = [
  ['Ética', 'Conduta responsável, respeito às normas profissionais e compromisso com uma atuação íntegra.'],
  ['Clareza', 'Informações objetivas para que cada cliente compreenda as etapas, os documentos e as possibilidades.'],
  ['Proximidade', 'Atendimento acessível, escuta atenta e comunicação cuidadosa ao longo de cada demanda.'],
  ['Atualização', 'Estudo contínuo e atenção às mudanças que impactam a prática jurídica e a vida das pessoas.'],
]

export default function Office() {
  usePageMeta('O Escritório | Lima & Azevedo Advocacia', 'Conheça a proposta, os valores e a forma de atendimento da Lima & Azevedo Advocacia.')

  return (
    <>
      <InternalHero
        eyebrow="O escritório"
        title={<>Uma advocacia construída para ser <em>mais clara e mais próxima.</em></>}
        text="Estrutura contemporânea, atendimento responsável e comunicação acessível em São Raimundo Nonato e região."
        number="01"
      />

      <section className="office-story section-space">
        <div className="container office-story__grid">
          <Reveal className="office-story__media">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=88" alt="Interior moderno do escritório" />
            <div className="office-story__caption"><span>São Raimundo Nonato–PI</span><strong>Atendimento presencial e on-line</strong></div>
          </Reveal>
          <Reveal delay={120} className="office-story__content">
            <span className="section-index">Nossa proposta</span>
            <h2>Conhecimento técnico sem distanciamento.</h2>
            <p>A Lima & Azevedo Advocacia nasceu com uma proposta simples: oferecer orientação jurídica de qualidade sem transformar a experiência do cliente em algo frio, confuso ou excessivamente formal.</p>
            <p>O trabalho é desenvolvido a partir de uma compreensão cuidadosa dos fatos. Documentos são organizados, riscos são avaliados e as possibilidades são apresentadas com transparência.</p>
            <Link className="text-link" to="/contato">Fale com o escritório <ArrowUpRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="values-section section-space section-tint">
        <div className="container">
          <Reveal className="values-section__heading">
            <span className="section-index">Princípios</span>
            <h2>O que orienta cada atendimento.</h2>
          </Reveal>
          <div className="values-grid">
            {values.map(([title, text], index) => (
              <Reveal key={title} delay={index * 70} className="value-card">
                <span>0{index + 1}</span>
                <CheckCircle2 size={24} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="method-section section-space">
        <div className="container method-section__grid">
          <Reveal className="method-section__copy">
            <span className="section-index">Como funciona</span>
            <h2>Uma jornada de atendimento organizada e transparente.</h2>
            <p>Cada demanda possui particularidades, mas o fluxo de atendimento segue etapas que ajudam a tornar o processo mais compreensível.</p>
          </Reveal>
          <div className="method-list">
            {[
              ['01', 'Escuta e contexto', 'Compreensão inicial da situação, das pessoas envolvidas e do objetivo apresentado.'],
              ['02', 'Documentos e análise', 'Verificação dos registros disponíveis e identificação de informações que ainda precisam ser reunidas.'],
              ['03', 'Orientação e estratégia', 'Apresentação das possibilidades, riscos e próximos passos de forma clara.'],
              ['04', 'Acompanhamento', 'Comunicação durante o desenvolvimento do trabalho e atualização sobre etapas relevantes.'],
            ].map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 70} className="method-item">
                <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
