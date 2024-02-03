const shapeGen = require('../data/shape');
const Shape = shape.Shape;
const Circle = shape.Circle;

describe ('Circle', () => {

  describe ('Instance of Circle', () => {
    it ('passes if new instance of circle is created' , () => {
      const shapeInst = new Circle

      expect (shapeInst).toBeIntanceOf(Circle)
    })
  })

  describe ('Circle shapeColor', () => {
    it ('passes if shapeColor is correctly passed', () => {
      const circleColor = 'Blue'
      const blueCircle = new Circle(circleColor)

      expect (blueCircle.shapeColor).toBe(circleColor)
    })
  })

  describe ('Circle text', () => {
    it ('passes if text matches user input', () => {
      const circleText = 'RTR'
      const rtrCircleText = new Shape('Red', circleText)

      expect (rtrCircleText.text).toBe(circleText)
    })
  })

  describe ('Circle textColor', () => {
    it ('passes if textColor is correctly passed', () => {
      const textColor = 'White'
      const whiteTextColor = new Shape('Red', 'RTR', textColor)

      expect (whiteTextColor.textColor).toBe(textColor)
    })
  })

  describe ('svgProperties()', () => {
    it ('passes if outputs data correctly', () => {
      const testCircle = new Circle('Red', 'RTR', 'White')
  
      expect (testCircle.svgProperties()).toBe(`<circle cx="150" cy="100" r="80" fill="${testCircle.shapeColor}" />`)
    })
  })
  
})