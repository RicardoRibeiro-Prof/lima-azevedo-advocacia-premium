import { ArrowLeft, ArrowRight, FileText, MessageSquareText } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import InternalHero from '../components/InternalHero'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import Accordion from '../components/Accordion'
import { practiceAreas } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export default function PracticeDetail() {
  const { slug } = useParams()
  const area = practiceAreas.find((item) => item.slug === slug)

  usePageMeta(area ? `${area.title} | Lima & Azevedo Advocacia` : 'Área não encontrada', area?.description || '')

  if (!area) return <Navigate to="/pagina-nao-encontrada" replace />
  const Icon = area.icon

  const faqs = [
    { question: `Como funciona o atendimento em ${area.title}?`, answer: 'O atendimento começa com a compreensão da situação e a análise dos documentos disponíveis. Depois, são apresentadas as possibilidades e os próximos passos adequados ao caso.' },
    { question: 'Quais documentos podem ser necessários?', answer: 'Os documentos dependem do assunto. Em geral, documentos pessoais, contratos, comprovantes, mensagens, protocolos e outros registros relacionados ajudam na análise inicial.' },
    { question: 'O atendimento pode ser on-line?', answer: 'Sim. Quando a natureza da demanda permite, o atendimento pode ser realizado on-line, com envio organizado de documentos e reuniões por vídeo.' },
  ]

  return (
    <>
      <InternalHero eyebrow={area.eyebrow} title={area.title} text={area.description} number="03" />
      <section className="detail-section section-space">
        <div className="container detail-section__grid">
          <Reveal className="detail-section__side">
            <div className="detail-icon"><Icon size={34} strokeWidth={1.4} /></div>
            <span>Atuação relacionada</span>
            <ul>{area.items.map((item) => <li key={item}><ArrowRight size={15} /> {item}</li>)}</ul>
            <Link className="text-link" to="/atuacao"><ArrowLeft size={18} /> Ver todas as áreas</Link>
          </Reveal>
          <Reveal delay={100} className="detail-section__content">
            <span className="section-index">Atendimento individualizado</span>
            <h2>Entender o contexto é essencial antes de definir qualquer caminho.</h2>
            <p>Questões jurídicas raramente podem ser avaliadas apenas por uma descrição breve. Datas, documentos, relações entre as partes e objetivos precisam ser considerados em conjunto.</p>
            <p>O escritório conduz a análise de forma técnica e responsável, explicando o que pode ser feito, quais registros são importantes e quais riscos devem ser observados.</p>
            <div className="detail-feature-grid">
              <div><FileText size={23} /><h3>Organização documental</h3><p>Identificação dos documentos que podem contribuir para a análise.</p></div>
              <div><MessageSquareText size={23} /><h3>Comunicação clara</h3><p>Explicação acessível sobre etapas, possibilidades e limitações.</p></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="detail-faq section-space section-tint">
        <div className="container detail-faq__grid">
          <Reveal><span className="section-index">Dúvidas iniciais</span><h2>Perguntas frequentes sobre o atendimento.</h2></Reveal>
          <Reveal delay={100}><Accordion items={faqs} /></Reveal>
        </div>
      </section>
      <CTASection />
    </>
  )
}
