import Vector from './Vectors'

export default class Goal {
  constructor(x, y) {
    this.pos = new Vector(x, y)
  }

  draw(ctx) {
    ctx.fillStyle = '#ff0000'
    ctx.strokeStyle = '#ff0000'

    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
  }
}