# react-canvas

## Documentation

### Functions

#### setSize

`Canvas.setBackground(canvasRef.current, 0.8, 0.5)` where the first parameter after the canvas reference is the width and the second is height. The parameters are given as a decimal of the whole screen width.

#### setBackground

`Canvas.setBackground(canvasRef.current, 'red')` where "red" can be altered to choose a color

#### drawShape

`Canvas.drawShape(canvasRef.current, shape)` where the shape is an object. Rectangle, circle or line.

-   Rectangle `const rectangle = new Rectangle(x, y, width, height, fillColor, strokeColor, lineWidth)`
-   Circle `const circle = new Circle(x, y, radius, fillColor, strokeColor, lineWidth)`
-   Line `const line = new Line(startX, startY, endX, endY, color, lineWidth)`

These shapes are saved as objects and their data can be easily accessed and used later.
