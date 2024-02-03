const shapeGen = require('../data/shape');
const Shape = shape.Shape;
const Square = shape.Square;

describe ('Square', () => {

  describe ('Instance of Square', () => {
    it ('passes if new instance of Square is created' , () => {
      const shapeInst = new Square

      expect (shapeInst).toBeIntanceOf(Square)
    })
  })

  describe ('Square shapeColor', () => {
    it ('passes if shapeColor is correctly passed', () => {
      const SquareColor = 'Blue'
      const blueSquare = new Square(SquareColor)

      expect (blueSquare.shapeColor).toBe(SquareColor)
    })
  })

  describe ('Square text', () => {
    it ('passes if text matches user input', () => {
      const SquareText = 'RTR'
      const rtrSquareText = new Shape('Red', SquareText)

      expect (rtrSquareText.text).toBe(SquareText)
    })
  })

  describe ('Square textColor', () => {
    it ('passes if textColor is correctly passed', () => {
      const textColor = 'White'
      const whiteTextColor = new Shape('Red', 'RTR', textColor)

      expect (whiteTextColor.textColor).toBe(textColor)
    })
  })

  describe ('svgProperties()', () => {
    it ('passes if outputs data correctly', () => {
      const testSquare = new Square('Red', 'RTR', 'White')
  
      expect (testSquare.svgProperties()).toBe(`<rect width="300" height="200" fill="${testSquare.shapeColor}" />`)
    })
  })
  
})