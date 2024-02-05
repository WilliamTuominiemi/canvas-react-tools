'use client'

import { useEffect, useState, useRef } from 'react'

function Canvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = 'blue'
        context.fillRect(0, 0, canvas.width, canvas.height)
    }, [])

    return <canvas ref={canvasRef} />
}

export default Canvas
