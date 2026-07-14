import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Página não encontrada | Lima & Azevedo Advocacia', 'A página solicitada não foi encontrada.')
  return <section className="not-found"><div className="not-found__grid" /><div className="container not-found__inner"><span>404</span><h1>Esta página não está por aqui.</h1><p>O endereço pode ter sido alterado ou digitado incorretamente.</p><Link className="button button--primary" to="/"><ArrowLeft size={18} /> Voltar ao início</Link></div></section>
}
