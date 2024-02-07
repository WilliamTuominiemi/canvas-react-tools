# canvas-react-tools

## Installation

1. `npm install canvas-react-tools`

## Documentation

### Functions

#### setSize

`Canvas.setBackground(canvasRef.current, width, height)` where the first parameter after the canvas reference is the width and the second is height. The parameters are given as a decimal of the whole screen width.

#### setBackground

`Canvas.setBackground(canvasRef.current, color)` where color can be altered to choose a color

#### drawShape

-   Rectangle `const rectangle = new Rectangle(x, y, width, height, rotation, fillColor, strokeColor, lineWidth)`
    -   `Canvas.animate(canvasRef.current, rectangle, movementX, movementY, rotation, speed)`
-   Circle `const circle = new Circle(x, y, radius, fillColor, strokeColor, lineWidth)`
-   Line `const line = new Line(startX, startY, endX, endY, color, lineWidth)`

`Canvas.drawShape(canvasRef.current, shape)` where the shape is an object. Rectangle, circle or line.

These shapes are saved as objects and their data can be easily accessed and used later.

##### removeShape

`Canvas.removeShape(canvasRef.current, shape)`, paints over the shape on the canvas with the background color. The object of the shape still exists but it is removed from the canvas.

#### writeText

Similar to drawShape, the text is an object.

`const text = new Text(text, x, y, color, font, size)`

`Canvas.writeText(canvasRef.current, text)`

##### removeText

`Canvas.removeText(canvasRef.current, shape)`, paints over the text on the canvas with the background color. The object of the text still exists but it is removed from the canvas.

## Demo

page.js in a next.js react project

```
'use client'

import { useEffect, useRef } from 'react'

import { Canvas, Rectangle, Circle, Line, Text } from 'canvas-react-tools'

export default function Home() {
    const canvasRef = useRef(null)

    useEffect(() => {
        Canvas.setSize(canvasRef.current, 0.5, 0.5)
        Canvas.setBackground(canvasRef.current, 'gray')

        const rectangle = new Rectangle(50, 50, 350, 80, 'blue', 'black', 2)
        Canvas.drawShape(canvasRef.current, rectangle)

        const circle = new Circle(100, 300, 30, 'red', 'white', 4)
        Canvas.drawShape(canvasRef.current, circle)

        const line = new Line(200, 200, 400, 400, 'green', 5)
        Canvas.drawShape(canvasRef.current, line)

        const text = new Text('canvas-react', 100, 100, 'white', 'Arial', '30px')
        Canvas.writeText(canvasRef.current, text)
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <canvas ref={canvasRef} />
        </main>
    )
}

```
