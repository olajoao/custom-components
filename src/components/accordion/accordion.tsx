import { useRef } from 'react'
import './accordion.css'

interface FaqItem {
  id: number;
  title: string;
  content: string;
}

const items: FaqItem[] = [
  {
    id: 1,
    title: 'What is your return policy?',
    content: 'You can request a return within 30 days of receiving your order.'
  },
  {
    id: 2,
    title: 'How long does shipping take?',
    content: 'Shipping usually takes between 3–7 business days depending on your location.'
  },
  {
    id: 3,
    title: 'Do you offer international delivery?',
    content: 'Yes, we ship to most countries. Shipping fees may vary.'
  },
  {
    id: 4,
    title: 'How can I track my order?',
    content: 'After the order is shipped, you will receive a tracking link via email.'
  },
  {
    id: 5,
    title: 'What payment methods do you accept?',
    content: 'We accept credit cards, debit cards, and various digital payment options.'
  },
  {
    id: 6,
    title: 'Can I change my order after placing it?',
    content: 'Orders can be updated within the first 2 hours by contacting support.'
  }
];

function Accordion() {
  const refs = useRef<HTMLElement[]>([])

  const setItemRefs = (itemKey: number, element: HTMLElement | null) => {
    if (element) {
      refs.current[itemKey] = element;
    } else {
      delete refs.current![itemKey]
    }
  }

  function toggle(index: number) {
    refs.current.forEach(item => item.classList.remove('active'))
    refs.current[index].classList.add('active')
  }

  return (
    <div className="accordion">
      <h2>Accordion</h2>
      {items.map((item, index) => (
        <div key={item.id} className="accordion__item">
          <button onClick={() => toggle(item.id)} className="accordion__trigger">{item.title}</button>
          <article ref={(element) => setItemRefs(item.id, element)} className={`accordion__content ${index === 0 ? 'active' : ''}`}>
            {item.content}
          </article>
        </div>
      ))}
    </div>
  )
}

export default Accordion
