import Vector from './Vector'

export function vectorFromAngle(angle) {
  return new Vector(Math.cos(angle), Math.sin(angle))
}

export function mag(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c)
}

export function dist(x1, y1, x2, y2) {
  return Math.sqrt(sq(x2 - x1) + sq(y2 - y1))
}

function sq(x) {
  return x * x
}