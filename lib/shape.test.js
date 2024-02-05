import { Square, Circle, Triangle } from './shape';

// tests if square is rendered correctly w/ red color
describe('Square', () => {
  test('passes if renders correctly', () => {
    const shape = new Square();
    let color = ('red')
    shape.renderColor(color);
    expect(shape.render()).toEqual(`<rect x="75" width="200" height="200" fill="${color}"/>`)
  });
});

// tests if circle is rendered correctly w/ purple color
describe('Circle', () => {
  test('passes if renders correctly', () => {
    const shape = new Circle();
    let color = ('purple')
    shape.renderColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`)
  });
});

// test if triangle is rendered correctly w/ blue color
describe('Triangle', () => {
  test('passes if renders correctly', () => {
    const shape = new Triangle();
    let color = ('blue')
    shape.renderColor(color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`)
  });
});