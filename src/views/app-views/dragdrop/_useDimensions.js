export const useDimensions = () => {
  const getDimensions = (elem, dim) => {
    switch (elem) {
      case 'delta':
        switch (dim) {
          case 'small':
            return [66, 43]
          case 'medium':
            return [64, 61]
          case 'large':
            return [84, 68]
          default:
            break
        }

        break

      case 'padding':
        switch (dim) {
          case 'small':
            return [16, 16]
          case 'medium':
            return [1, 1]
          case 'large':
            return [9, 9]
          default:
            break
        }

        break

      default:
        break
    }
  }

  return getDimensions
}
