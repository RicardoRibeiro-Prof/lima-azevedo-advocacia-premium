import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AreaCard({ area, index }) {
  const Icon = area.icon
  return (
    <Link className="area-card" to={`/atuacao/${area.slug}`}>
      <div className="area-card__top">
        <span>0{index + 1}</span>
        <ArrowUpRight size={20} />
      </div>
      <div className="area-card__icon"><Icon size={25} strokeWidth={1.6} /></div>
      <p>{area.eyebrow}</p>
      <h3>{area.title}</h3>
      <span className="area-card__description">{area.description}</span>
    </Link>
  )
}
