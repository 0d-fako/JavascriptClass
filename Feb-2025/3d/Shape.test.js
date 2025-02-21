const {Shape, Rectangle} = require('./Shape');


test('Test Shape class', () => {
    const shape = new Shape('Shape');
    expect(shape.name).toBe('Shape');
    shape.name = 'New Shape';
    expect(shape.name).toBe('New Shape');
}); 


test('Test Rectangle class', () => {
    const rectangle = new Rectangle('Rectangle', 5, 5);
    expect(rectangle.name).toBe('Rectangle');
    expect(rectangle.side1).toBe(5);
    expect(rectangle.side2).toBe(5);
    expect(rectangle.area()).toBe(25);
    expect(rectangle.perimeter()).toBe(20);
    expect(rectangle.isSquare()).toBe(true);
});