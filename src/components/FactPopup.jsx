import { useState, useRef } from "react"

export default function FactPopup({ fact, poseName, onClose }) {
  const [position, setPosition] = useState({ x: window.innerWidth - 320, y: 80 })
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  if (!fact) return null

  function handleMouseDown(e) {
    dragging.current = true
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  function handleMouseMove(e) {
    if (!dragging.current) return
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y
    })
  }

  function handleMouseUp() {
    dragging.current = false
    window.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("mouseup", handleMouseUp)
  }

  return (
    <div
      className="fixed z-50 w-72"
      style={{ left: position.x, top: position.y }}>
      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
        
        {/* Drag handle */}
        <div
          onMouseDown={handleMouseDown}
          className="cursor-grab active:cursor-grabbing w-full flex justify-center mb-3">
          <div className="w-8 h-1 bg-pink-200 rounded-full" />
        </div>

        <p className="text-pink-300 tracking-widest uppercase text-xs mb-3"
          style={{fontFamily: "Montserrat, sans-serif"}}>
          Did you know?
        </p>
        <h3 className="text-2xl text-pink-400 mb-4"
          style={{fontFamily: "Cormorant Garamond, serif"}}>
          {poseName}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6"
          style={{fontFamily: "Montserrat, sans-serif", fontWeight: 300}}>
          {fact}
        </p>
        <button
          onClick={onClose}
          className="px-8 py-2 border border-pink-300 text-pink-400 text-xs tracking-widest uppercase hover:bg-pink-50 transition-all"
          style={{fontFamily: "Montserrat, sans-serif"}}>
          Close
        </button>
      </div>
    </div>
  )
}