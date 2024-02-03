const shapeGen = require('../data/shape');
const Shape = shape.Shape;
const Triangle = shape.Triangle;

describe ('Triangle', () => {

  describe ('Instance of Triangle', () => {
    it ('passes if new instance of Triangle is created' , () => {
      const shapeInst = new Triangle

      expect (shapeInst).toBeIntanceOf(Triangle)
    })
  })

  describe ('Triangle shapeColor', () => {
    it ('passes if shapeColor is correctly passed', () => {
      const TriangleColor = 'Blue'
      const blueTriangle = new Triangle(TriangleColor)

      expect (blueTriangle.shapeColor).toBe(TriangleColor)
    })
  })

  describe ('Triangle text', () => {
    it ('passes if text matches user input', () => {
      const TriangleText = 'RTR'
      const rtrTriangleText = new Shape('Red', TriangleText)

      expect (rtrTriangleText.text).toBe(TriangleText)
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