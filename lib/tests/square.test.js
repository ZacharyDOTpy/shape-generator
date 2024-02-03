const shapeGen = require('../data/shape');
const Shape = shapeGen.Shape;
const Square = shapeGen.Square;

describe ('Square', () => {

  describe ('Instance of Square', () => {
    it ('passes if new instance of square is created' , () => {
      const shapeInst = new Square

      expect (shapeInst).toBeIntanceOf(Square)
    })
  })

  describe ('Square shapeColor', () => {
    it ('passes if shapeColor is correctly passed', () => {
      const squareColor = 'Blue'
      const blueSquare = new Circle(squareColor)

      expect (blueSquare.shapeColor).toBe(squareColor)
    })
  })

  describe ('Square text', () => {
    it ('passes if text matches user input', () => {
      const squareText = 'RTR'
      const rtrSquareText = new Shape('Red', squareText)

      expect (rtrSquareText.text).toBe(squareText)
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