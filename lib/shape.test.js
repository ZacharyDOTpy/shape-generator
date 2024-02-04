const {Square, Circle, Triangle} = require('./shape');

// tests if square is rendered correctly w/ blue color
test('render blue square', () => {
  const shape = new Square();
  shape.setColor('blue');
  expect(shape.render()).toBe('<rect x="75px" y="50px" width="150px" height="150px" fill="blue" />');
});

// tests if circle is rendered correctly w/ green color
test('render green circle', () => {
  const shape = new Circle();
  shapes.setColor('green');
  expect(shape.render()).toBe('<circle cx="150px" cy="120px" r="75px" fill="green" />');
});

// tests if triangle is rendered correctly w/ red color
test('render red triangle', () => {
  const shape = new Triangle();
  shape.setColor('red');
  expect(shape.setColor()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
});