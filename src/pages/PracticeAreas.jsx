import InternalHero from '../components/InternalHero'
import AreaCard from '../components/AreaCard'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { practiceAreas } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export default function PracticeAreas() {
  usePageMeta('Áreas de Atuação | Lima & Azevedo Advocacia', 'Conheça as áreas de atuação da Lima & Azevedo Advocacia.')

  return (
    <>
      <InternalHero
        eyebrow="Áreas de atuação"
        title={<>Conhecimento jurídico para decisões <em>mais conscientes.</em></>}
        text="Cada situação é única. Por isso, a orientação adequada depende da análise dos fatos, documentos e objetivos envolvidos."
        number="02"
      />
      <section className="practice-page section-space">
        <div className="container">
          <Reveal className="practice-page__intro">
            <span className="section-index">Atuação multidisciplinar</span>
            <p>O escritório atua em áreas que fazem parte da rotina de pessoas, famílias, profissionais e empresas. As informações abaixo possuem caráter institucional e não substituem uma análise individualizada.</p>
          </Reveal>
          <div className="area-grid area-grid--page">
            {practiceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={(index % 3) * 80}><AreaCard area={area} index={index} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
