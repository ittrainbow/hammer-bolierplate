import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Card } from './Card'

export const useCards = () => {
  const { cardList, fieldWidth, fieldHeight } = useSelector((store) => store.dragdrop)

  useEffect(() => {
    cardList.length
      ? localStorage.setItem('dragdropchart', JSON.stringify(cardList))
      : localStorage.removeItem('dragdropchart')
  }, [cardList])

  const cards = (
    <div className="field" id="field" style={{ width: fieldWidth, height: fieldHeight }}>
      {cardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  )

  const thumbs = [
    {
      src: '/img/chairs/small.png',
      text: 'Add small',
      element: 'small'
    },
    {
      src: '/img/chairs/medium.png',
      text: 'Add medium',
      element: 'medium'
    },
    {
      src: '/img/chairs/large.png',
      text: 'Add large',
      element: 'large'
    }
  ]

  return { cards, thumbs }
}
