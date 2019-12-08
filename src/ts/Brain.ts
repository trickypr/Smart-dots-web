import {
  vectorFromAngle
} from './utils'
import Vector from './Vector'
import { mutationRate } from './constants'

export default class Brain {
  size: number
  
  step = 0

  directions: Vector[] = []

  constructor(size: number) {
    this.size = size

    this.randomize()
  }

  randomize() {
    for (let i = 0; i < this.size; i++) this.directions[i] = vectorFromAngle(Math.random() * (2 * Math.PI))
  }

  mutate() {
    this.directions.forEach((direction, i) => {
      if (Math.random() * 1 < mutationRate) this.directions[i] = vectorFromAngle(Math.random() * (2 * Math.PI))
    })
  }

  clone() {
    const clone = new Brain(this.directions.length)

    this.directions.forEach((direction, i) => {
      clone.directions[i] = direction.copy()
    })

    return clone
  }
}