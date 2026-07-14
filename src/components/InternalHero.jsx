import Reveal from './Reveal'

export default function InternalHero({ eyebrow, title, text, number = '01' }) {
  return (
    <section className="internal-hero">
      <div className="internal-hero__grid" aria-hidden="true" />
      <div className="container internal-hero__inner">
        <Reveal className="internal-hero__copy">
          <span className="internal-hero__eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {text && <p>{text}</p>}
        </Reveal>
        <Reveal delay={160} className="internal-hero__number" aria-hidden="true">{number}</Reveal>
      </div>
    </section>
  )
}
