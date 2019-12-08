export default class Vector {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  add(vector) {
    this.x += vector.x
    this.y += vector.y
  }

  limit(limit) {
    if (this.x > limit) {
      this.x = limit
    }

    if (this.y > limit) {
      this.y = limit
    }
  }

  copy() {
    return new Vector(this.x, this.y)
  }
}