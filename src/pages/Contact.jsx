import { useState } from 'react'
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import InternalHero from '../components/InternalHero'
import Reveal from '../components/Reveal'
import { contactInfo, practiceAreas } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const initialForm = { name: '', phone: '', email: '', area: '', message: '', privacy: false }

export default function Contact() {
  usePageMeta('Contato | Lima & Azevedo Advocacia', 'Entre em contato com a Lima & Azevedo Advocacia em São Raimundo Nonato–PI.')
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function update(event) {
    const { name, value, type, checked } = event.target
    let next = value
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 11)
      next = digits.length > 10
        ? digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
        : digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
    }
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : next }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSuccess(false)
  }

  function submit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (form.name.trim().length < 3) nextErrors.name = 'Informe seu nome completo.'
    if (form.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Informe um telefone válido.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Informe um e-mail válido.'
    if (!form.area) nextErrors.area = 'Selecione uma área.'
    if (form.message.trim().length < 15) nextErrors.message = 'Conte um pouco mais sobre o assunto.'
    if (!form.privacy) nextErrors.privacy = 'É necessário aceitar a política de privacidade.'
    setErrors(nextErrors)
    if (!Object.keys(nextErrors).length) {
      setSuccess(true)
      setForm(initialForm)
    }
  }

  return (
    <>
      <InternalHero eyebrow="Contato" title={<>Vamos conversar com <em>clareza e tranquilidade.</em></>} text="Envie uma mensagem ou escolha o canal mais conveniente para obter informações sobre o atendimento." number="04" />
      <section className="contact-page section-space">
        <div className="container contact-page__grid">
          <Reveal className="contact-info-panel">
            <span className="section-index">Canais de atendimento</span>
            <h2>Estamos em São Raimundo Nonato e também atendemos on-line.</h2>
            <div className="contact-info-list">
              <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WhatsApp</small><strong>{contactInfo.phone}</strong></span><ArrowUpRight /></a>
              <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}><Phone /><span><small>Telefone</small><strong>{contactInfo.phone}</strong></span><ArrowUpRight /></a>
              <a href={`mailto:${contactInfo.email}`}><Mail /><span><small>E-mail</small><strong>{contactInfo.email}</strong></span><ArrowUpRight /></a>
              <div><MapPin /><span><small>Endereço</small><strong>{contactInfo.address}</strong></span></div>
              <div><Clock3 /><span><small>Horário</small><strong>{contactInfo.hours}</strong></span></div>
            </div>
          </Reveal>

          <Reveal delay={100} className="contact-form-card">
            <span>Formulário de contato</span>
            <h2>Apresente sua situação.</h2>
            <p>Não envie documentos sigilosos ou dados sensíveis neste primeiro contato.</p>
            <form onSubmit={submit} noValidate>
              <div className="form-row">
                <label>Nome completo<input name="name" value={form.name} onChange={update} placeholder="Seu nome" />{errors.name && <small>{errors.name}</small>}</label>
                <label>Telefone<input name="phone" value={form.phone} onChange={update} placeholder="(00) 00000-0000" />{errors.phone && <small>{errors.phone}</small>}</label>
              </div>
              <label>E-mail<input name="email" type="email" value={form.email} onChange={update} placeholder="voce@email.com" />{errors.email && <small>{errors.email}</small>}</label>
              <label>Área relacionada<select name="area" value={form.area} onChange={update}><option value="">Selecione</option>{practiceAreas.map((area) => <option key={area.slug}>{area.title}</option>)}<option>Outro assunto</option></select>{errors.area && <small>{errors.area}</small>}</label>
              <label>Mensagem<textarea name="message" rows="5" value={form.message} onChange={update} placeholder="Conte, de forma resumida, como podemos orientar você." />{errors.message && <small>{errors.message}</small>}</label>
              <label className="checkbox-field"><input type="checkbox" name="privacy" checked={form.privacy} onChange={update} /><span>Li e aceito a política de privacidade.</span></label>
              {errors.privacy && <small className="form-error">{errors.privacy}</small>}
              <button className="button button--primary" type="submit">Preparar mensagem <ArrowUpRight size={18} /></button>
              {success && <div className="form-success">Mensagem preparada com sucesso. Em um projeto real, o formulário seria integrado ao serviço de atendimento.</div>}
            </form>
          </Reveal>
        </div>
      </section>
      <section className="map-section"><iframe title="Mapa de São Raimundo Nonato" src={contactInfo.mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
    </>
  )
}
