import Vector from './Vectors'
import Brain from './Brain'

export default class Dot {
  constructor(screenSquareSize) {
    this.displaySize = screenSquareSize

    // Position, velosity, accseleration
    this.pos = new Vector(screenSquareSize / 2, screenSquareSize / 2);
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);

    // Boolean stuff
    this.dead = false;

    // Brain
    this.brain = new Brain(400);
  }

  // -----------------------------------------------------------------------------
  // Display
  draw(ctx) {
    ctx.fillStyle = '#000000'
    ctx.strokeStyle = '#000000'

    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }

  // -----------------------------------------------------------------------------
  // Update
  update() {
    if (!this.dead) {
      const border = 5;

      this.move()

      if (this.pos.x < border || this.pos.x > this.displaySize - border || this.pos.y < border || this.pos.y > this.displaySize - border) {
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
}