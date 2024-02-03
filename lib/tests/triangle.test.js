const shapeGen = require('../data/shape');
const Shape = shapeGen.Shape;
const Triangle = shapeGen.Triangle;

describe ('Triangle', () => {

  describe ('Instance of Triangle', () => {
    it ('passes if new instance of triangle is created' , () => {
      const shapeInst = new Triangle

      expect (shapeInst).toBeIntanceOf(Triangle)
    })
  })

  describe ('Triangle shapeColor', () => {
    it ('passes if shapeColor is correctly passed', () => {
      const triangleColor = 'Blue'
      const blueTriangle = new Triangle(triangleColor)

      expect (blueTriangle.shapeColor).toBe(triangleColor)
    })
  })

  describe ('Triangle text', () => {
    it ('passes if text matches user input', () => {
      const triangleText = 'RTR'
      const rtrTriangleText = new Shape('Red', triangleText)

      expect (rtrTriangleText.text).toBe(triangleText)
    })
  })

  describe ('Triangle textColor', () => {
    it ('passes if textColor is correctly passed', () => {
      const textColor = 'White'
      const whiteTextColor = new Shape('Red', 'RTR', textColor)

      expect (whiteTextColor.textColor).toBe(textColor)
    })
  })

  describe ('svgProperties()', () => {
    it ('passes if outputs data correctly', () => {
      const testTriangle = new Triangle('Red', 'RTR', 'White')
  
      expect (testTriangle.svgProperties()).toBe(`<polygon points="150,0 302,200 5,200"  fill="${testTriangle.shapeColor}" />`)
    })
  })
  
})