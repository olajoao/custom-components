import { useState } from 'react'
import './dropdown.css'

interface SelectItemProps {
  id: number | string;
  label: string;
  value: string;
}

const selectItems: SelectItemProps[] = [
  { id: 1, label: 'Apple', value: 'Apple fruit' },
  { id: 2, label: 'Grape', value: 'Grape' },
  { id: 3, label: 'Banana', value: 'Banana fruit' },
]

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<SelectItemProps | null>(null)

  const select = (item: SelectItemProps) => {
    if (!item || item.id === selected?.id) return
    setSelected(item)
    setIsOpen(false)
  }

  return (
    <div className="dropdown__area">
      <h2>Dropdown</h2>
      <div className='dropdown'>
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown__trigger">
          {selected ? selected.label : 'Select an option'}
        </button>
        {isOpen && (
          <ul className="dropdown__content">
            {selectItems.map((item) => (
              <li key={item.id} onClick={() => select(item)} className="dropdown__item">
                {selected?.id === item.id && <span className='dropdown__item--active'></span>}
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
