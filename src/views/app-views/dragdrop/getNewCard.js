export const getNewCard = (element, cardList) => {
  const id =
    cardList
      .map((el) => el.id)
      .sort((a, b) => a - b)
      .at(-1) + 1 || 1

  const card = { id, x: 0, y: 0, size: element }

  switch (element) {
    case 'small':
      return { ...card, width: 125, height: 75 }

    case 'medium':
      return { ...card, width: 120, height: 110 }

    case 'large':
      return { ...card, width: 160, height: 125 }

    default:
      break
  }
}
