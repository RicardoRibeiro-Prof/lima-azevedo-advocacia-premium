import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link className={`brand ${light ? 'brand--light' : ''}`} to="/" aria-label="Lima & Azevedo Advocacia — início">
      <span className="brand__monogram" aria-hidden="true">L&A</span>
      <span className="brand__text">
        <strong>Lima & Azevedo</strong>
        <small>Advocacia</small>
      </span>
    </Link>
  )
}
