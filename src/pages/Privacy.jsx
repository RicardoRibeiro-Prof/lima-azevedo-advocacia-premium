import InternalHero from '../components/InternalHero'
import Reveal from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Privacy() {
  usePageMeta('Política de Privacidade | Lima & Azevedo Advocacia', 'Informações gerais sobre privacidade e tratamento de dados no site demonstrativo.')
  return (
    <>
      <InternalHero eyebrow="Privacidade" title="Política de privacidade" text="Texto demonstrativo baseado em princípios gerais de proteção de dados e sujeito a revisão jurídica antes da publicação definitiva." number="05" />
      <section className="legal-page section-space"><div className="container legal-page__grid"><Reveal><span className="section-index">Última atualização: julho de 2026</span></Reveal><Reveal delay={80} className="legal-content">
        <h2>1. Informações coletadas</h2><p>O formulário pode solicitar nome, telefone, e-mail, área de interesse e uma mensagem inicial. Recomenda-se que o visitante não envie documentos sigilosos ou dados sensíveis pelo formulário.</p>
        <h2>2. Finalidade</h2><p>As informações são utilizadas exclusivamente para responder ao contato e fornecer informações sobre o atendimento do escritório.</p>
        <h2>3. Proteção e armazenamento</h2><p>Em uma versão definitiva, devem ser adotadas medidas técnicas e administrativas adequadas para proteger os dados contra acesso não autorizado, perda ou alteração.</p>
        <h2>4. Compartilhamento</h2><p>Os dados não devem ser comercializados. O compartilhamento poderá ocorrer apenas quando necessário para a operação do serviço, cumprimento de obrigação legal ou mediante autorização.</p>
        <h2>5. Direitos do titular</h2><p>O titular poderá solicitar confirmação, acesso, correção, atualização ou exclusão de seus dados, observados os limites legais aplicáveis.</p>
        <h2>6. Cookies</h2><p>O site poderá utilizar cookies estritamente necessários ao funcionamento. Ferramentas de análise ou marketing devem ser informadas e configuradas adequadamente.</p>
        <h2>7. Revisão necessária</h2><p>Este texto é demonstrativo e não representa uma política jurídica definitiva. Antes da publicação real, deve ser revisado conforme as operações e ferramentas efetivamente utilizadas.</p>
      </Reveal></div></section>
    </>
  )
}
