class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  limit(limit) {
    if (this.x > limit) {
      this.x = limit
    }

    if (this.y > limit) {
      this.y = limit
    }
  }
}

export default Vector;