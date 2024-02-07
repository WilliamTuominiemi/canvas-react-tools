'use client'

let backgroundColor = 'white'

class Rectangle {
    constructor(x, y, width, height, fillColor, strokeColor, lineWidth) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.lineWidth = lineWidth
    }

    draw(context) {
        context.fillStyle = this.fillColor
        context.strokeStyle = this.strokeColor
        context.lineWidth = this.lineWidth

        context.fillRect(this.x, this.y, this.width, this.height)
        context.strokeRect(this.x, this.y, this.width, this.height)
    }

    remove(context) {
        context.fillStyle = backgroundColor
        context.strokeStyle = backgroundColor
        context.lineWidth = this.lineWidth

        context.fillRect(this.x, this.y, this.width, this.height)
        context.strokeRect(this.x, this.y, this.width, this.height)
    }
}

class Circle {
    constructor(x, y, radius, fillColor, strokeColor, lineWidth) {
        this.x = x
        this.y = y
        this.radius = radius
        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.lineWidth = lineWidth
    }

    draw(context) {
        context.fillStyle = this.fillColor
        context.strokeStyle = this.strokeColor
        context.lineWidth = this.lineWidth

        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        context.fill()
        context.stroke()
    }

    remove(context) {
        context.fillStyle = backgroundColor
        context.strokeStyle = backgroundColor
        context.lineWidth = this.lineWidth * 2

        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        context.fill()
        context.stroke()
    }
}

class Line {
    constructor(startX, startY, endX, endY, color, lineWidth) {
        this.startX = startX
        this.startY = startY
        this.endX = endX
        this.endY = endY
        this.color = color
        this.lineWidth = lineWidth
    }

    draw(context) {
        context.beginPath()
        context.moveTo(this.startX, this.startY)
        context.lineTo(this.endX, this.endY)
        context.strokeStyle = this.color
        context.lineWidth = this.lineWidth
        context.stroke()
        context.closePath()
    }

    remove(context) {
        context.beginPath()
        context.moveTo(this.startX, this.startY)
        context.lineTo(this.endX, this.endY)
        context.strokeStyle = backgroundColor
        context.lineWidth = this.lineWidth * 2
        context.stroke()
        context.closePath()
    }
}

class Text {
    constructor(text, x, y, color, font, size) {
        this.text = text
        this.x = x
        this.y = y
        this.color = color
        this.font = font
        this.size = size
    }

    write(context) {
        context.font = `${this.size} ${this.font}`
        context.fillStyle = this.color
        context.fillText(this.text, this.x, this.y)
    }

    remove(context) {
        context.font = `${this.size} ${this.font}`
        context.fillStyle = backgroundColor
        context.fillText(this.text, this.x, this.y)
    }
}

const Canvas = {
    setSize: (canvas, newWidth, newHeight) => {
        try {
            if (!canvas) {
                throw new Error('Invalid canvas reference')
            }

            const screenWidth = window.innerWidth * newWidth
            const screenHeight = window.innerHeight * newHeight

            const pixelRatio = window.devicePixelRatio || 1

            canvas.width = screenWidth * pixelRatio
            canvas.height = screenHeight * pixelRatio

            canvas.style.width = `${screenWidth}px`
            canvas.style.height = `${screenHeight}px`
        } catch (error) {
            console.error(error.message)
        }
    },

    setBackground: (canvas, color) => {
        try {
            if (!canvas) {
                throw new Error('Invalid canvas reference')
            }

            const context = canvas.getContext('2d')
            context.fillStyle = color
            context.fillRect(0, 0, canvas.width, canvas.height)
            backgroundColor = color
        } catch (error) {
            console.error(error.message)
        }
    },

    drawShape: (canvas, shape) => {
        try {
            if (!canvas) {
                throw new Error('Invalid canvas reference')
            }

            const context = canvas.getContext('2d')

            shape.draw(context)
        } catch (error) {
            console.error(error.message)
        }
    },

    removeShape: (canvas, shape) => {
        try {
            if (!canvas) {
                throw new Error('Invalid canvas reference')
            }

            const context = canvas.getContext('2d')

            shape.remove(context)
        } catch (error) {
            console.error(error.message)
        }
    },

    writeText: (canvas, text) => {
        try {
            if (!canvas) {
                throw new Error('Invalid canvas reference')
            }

            const context = canvas.getContext('2d')

            text.write(context)
        } catch (error) {
            console.error(error.message)
        }
    },

    removeText: (canvas, text) => {
        try {
            if (!canvas) {
                throw new Error('Invalid canvas reference')
            }

            const context = canvas.getContext('2d')

            text.remove(context)
        } catch (error) {
            console.error(error.message)
        }
    },
}

export { Canvas, Rectangle, Circle, Line, Text }
