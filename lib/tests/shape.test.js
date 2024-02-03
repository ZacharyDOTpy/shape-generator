const shapeGen = require('../data/shape')
const Shape = shapeGen.Shape

describe ('Shape', () => {

  describe ('Instance', () => {
    it ('will pass if instance of shape is created', () => {
      const shapeInstance = new Shape

      expect(shapeInstance).toBeInstanceOf(Shape)
    })
  })

  describe ('Shape color', () => {
    it ('will pass if shapeColor is passed correctly', () => {
      const shapeColor = 'Red'
      const redShape = new Shape(shapeColor)

      expect(redShape.shapeColor).toBe(shapeColor)
    })
  })

  describe ('Text input', () => {
    it ('will pass if text input is passed correctly', () => {
      const text = 'RTR'
      const rtrTextColor = new Shape('Blue', text)

      expect(rtrTextColor.text).toBe(text)
    })
  })

  describe ('Text color', () => {
    it ('will pass if textColor is passed correctly', () => {
      const textColor = 'White'
      const whiteTextColor = new Shape('Blue', 'RTR', textColor)

      expect(whiteTextColor.textColor).toBe(textColor)
    })
  })
  
})