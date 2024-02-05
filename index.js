'use client'

// import { useEffect, useState, useRef } from 'react'

const Canvas = {
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
