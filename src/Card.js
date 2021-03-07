import React from 'react'
import { animated, useSpring } from 'react-spring'
import './Card.css'

const calculateValues = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  2,
]

export const Card = () => {
  const [values, setValues] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX, clientY }) =>
        setValues({ xys: calculateValues(clientX, clientY) })
      }
      onMouseLeave={() => setValues({ xys: [0, 0, 1] })}
      style={{
        transform: values.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    />
  )
}
