import { useState } from 'react'
import './dropdown.css'

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="dropdown__area">
      <h2>Dropdown</h2>
      <div className='dropdown'>
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown__trigger">
          Select an option
        </button>
        {isOpen && (
          <ul className="dropdown__content">
            <li className="dropdown__item">Item 1</li>
            <li className="dropdown__item">Item 2</li>
            <li className="dropdown__item">Item 3</li>
          </ul>
        )}
      </div>
    </div>
  )
}
