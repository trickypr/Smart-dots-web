import { Graphics } from 'pixi.js'
import { size, brainSize, dotSize } from './constants'
import { dist } from './utils'
import Goal from './goal'
import Vector from './Vector'
import Brain from './Brain'

export default class Dot extends Graphics {
  goal: Goal

  pos = new Vector(size / 2, size - 10)
  vel = new Vector(0, 0)
  acc = new Vector(0, 0)

  dead = false
  reachedGoal = false
  best = false

  fitness = 0

  brain = new Brain(brainSize)

  constructor(goal: Goal) {
    super()

    this.goal = goal

    this.beginFill(0xFFFFFF)
    this.drawEllipse(0, 0, dotSize, dotSize)
    this.endFill()

    const { x, y } = this.pos

    this.x = x
    this.y = y
  }

  update() {
    if (!this.dead && !this.reachedGoal) {
      const border = 5

      this.move()

      if (this.pos.x < border || this.pos.x > size - border || this.pos.y < border || this.pos.y > size - border) this.dead = true

      else if (dist(this.pos.x, this.pos.y, this.goal.x, this.goal.y) < 5) this.reachedGoal = true

      // else if (this.pos.x < 600 && this.pos.y < 310 && this.pos.x > 0 && this.pos.y > 300) this.dead = true
    }
  }

  move() {
    if (this.brain.directions.length > this.brain.step) {
      this.acc = this.brain.directions[this.brain.step]
      this.brain.step++
    }

    this.vel.add(this.acc)
    this.vel.limit(5)
    this.pos.add(this.vel)

    const { x, y } = this.pos
  
    this.x = x
    this.y = y
  }

  calculateFitness() {
    if (this.reachedGoal) {
      this.fitness = 1.0 / 16 + 10000 / (this.brain.step * this.brain.step);
    } else {
      const distanceToGoal = dist(this.pos.x, this.pos.y, this.goal.x, this.goal.y)
      this.fitness = 1.0 / (distanceToGoal * distanceToGoal)
    }
  }

  getBaby() {
    let baby = new Dot(this.goal)
    baby.brain = this.brain.clone()
    return baby;
  }
}