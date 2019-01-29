import Vector from './class/Vectors'

export function vectorFromAngle(angle) {
  return new Vector(Math.cos(angle), Math.sin(angle), 0)
}