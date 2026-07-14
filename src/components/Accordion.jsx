import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function Accordion({ items }) {
  const [active, setActive] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const open = active === index
        return (
          <article className={`accordion__item ${open ? 'is-open' : ''}`} key={item.question}>
            <button type="button" onClick={() => setActive(open ? -1 : index)} aria-expanded={open}>
              <span>{item.question}</span>
              <Plus size={20} />
            </button>
            <div className="accordion__content" aria-hidden={!open}>
              <div><p>{item.answer}</p></div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
