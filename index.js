'use client'

// import { useEffect, useState, useRef } from 'react'

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
        } catch (error) {
            console.error(error.message)
        }
    },
}

export default Canvas
