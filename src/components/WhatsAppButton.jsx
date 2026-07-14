import { MessageCircle } from 'lucide-react'
import { contactInfo } from '../data/siteData'

export default function WhatsAppButton() {
  const message = encodeURIComponent('Olá! Acessei o site da Lima & Azevedo Advocacia e gostaria de obter informações sobre o atendimento.')
  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${contactInfo.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com o escritório pelo WhatsApp"
    >
      <span className="whatsapp-button__pulse" />
      <MessageCircle size={22} fill="currentColor" />
      <span>WhatsApp</span>
    </a>
  )
}
