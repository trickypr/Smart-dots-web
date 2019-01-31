import {
  dist
} from '../utils'

import Vector from './Vectors'
import Brain from './Brain'

export default class Dot {
  constructor(screenSquareSize, goalPos) {
    // Display and goal
    this.displaySize = screenSquareSize
    this.goalPos = goalPos;

    // Position, velosity, accseleration
    this.pos = new Vector(screenSquareSize / 2, screenSquareSize - 10)
    this.vel = new Vector(0, 0)
    this.acc = new Vector(0, 0)

    // Boolean stuff
    this.dead = false
    this.reachedGoal = false
    this.isBest = false;

    // Brain
    this.brain = new Brain(400)

    // Fitness
    this.fitness = 0
  }

  // -----------------------------------------------------------------------------
  // Display
  draw(ctx) {
    if (this.isBest) {
      ctx.fillStyle = '#00ff00'
      ctx.strokeStyle = '#00ff00'
    }

    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()

    if (this.isBest) {
      ctx.fillStyle = '#000000'
      ctx.strokeStyle = '#000000'
    }
  }

  // -----------------------------------------------------------------------------
  // Update
  update() {
    if (!this.dead && !this.reachedGoal) {
      const border = 5;

      this.move()

      if (this.pos.x < border || this.pos.x > this.displaySize - border || this.pos.y < border || this.pos.y > this.displaySize - border) {
        this.dead = true
      } else if (dist(this.pos.x, this.pos.y, this.goalPos.x, this.goalPos.y) < 5) {
        this.reachedGoal = true
      } else if (this.pos.x < 600 && this.pos.y < 310 && this.pos.x > 0 && this.pos.y > 300) {
        this.dead = true;
      }
    }
  }

  // Move
  move() {
    if (this.brain.directions.length > this.brain.step) {
      this.acc = this.brain.directions[this.brain.step]
      this.brain.step++
    }

    this.vel.add(this.acc)
    this.vel.limit(5)
    this.pos.add(this.vel)
  }

  // -----------------------------------------------------------------------------
  // Fitness Function
  calculateFitness() {
    if (this.reachedGoal) {
      this.fitness = 1.0 / 16 + 10000 / (this.brain.step * this.brain.step);
    } else {
      const distanceToGoal = dist(this.pos.x, this.pos.y, this.goalPos.x, this.goalPos.y);
      this.fitness = 1.0 / (distanceToGoal * distanceToGoal);
    }
  }

  // -----------------------------------------------------------------------------
  // Get Baby
  getBaby() {
    let baby = new Dot(this.displaySize, this.goalPos);
    baby.brain = this.brain.clone();
    return baby;
  }
}