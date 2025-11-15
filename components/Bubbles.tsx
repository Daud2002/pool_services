import React from 'react'

const bubbles = [
  { size: 28, left: 5, delay: 0, duration: 18, opacity: 0.9 },
  { size: 18, left: 20, delay: 3, duration: 14, opacity: 0.8 },
  { size: 36, left: 35, delay: 6, duration: 20, opacity: 0.7 },
  { size: 22, left: 50, delay: 2, duration: 16, opacity: 0.85 },
  { size: 44, left: 65, delay: 4, duration: 22, opacity: 0.6 },
  { size: 16, left: 78, delay: 1, duration: 12, opacity: 0.95 },
  { size: 30, left: 88, delay: 5, duration: 19, opacity: 0.75 },
]

const Bubbles: React.FC = () => {
  return (
    <div aria-hidden className="bubbles">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default Bubbles
