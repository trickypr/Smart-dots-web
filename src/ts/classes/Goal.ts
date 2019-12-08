import { Graphics } from 'pixi.js'

export default class Goal extends Graphics {
  constructor(size: number, x: number, y: number) {
    super()

    this.beginFill(0xFFFF00)
    this.drawEllipse(0, 0, size, size)
    this.endFill()
    this.x = x
    this.y = y
  }
}