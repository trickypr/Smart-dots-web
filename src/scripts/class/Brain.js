import {
  vectorFromAngle
} from '../utils'

export default class Brain {
  constructor(size) {
    this.step = 0;
    this.size = size;

    this.directions = []

    this.randomize()
  }

  randomize() {
    for (let i = 0; i < this.size; i++) {
      this.directions[i] = vectorFromAngle(Math.random() * (2 * Math.PI))
    }
  }

  // ---------------------------------------------------------------------------
  mutate() {
    let mutationRate = 0.01;

    for (let i = 0; i < this.directions.length; i++) {
      let rand = Math.random() * 1;

      if (rand < mutationRate) {
        this.directions[i] = vectorFromAngle(Math.random() * (2 * Math.PI))
      }
    }
  }

  // ---------------------------------------------------------------------------
  clone() {
    let clone = new Brain(this.directions.length);

    for (let i = 0; i < this.directions.length; i++) {
      clone.directions[i] = this.directions[i].copy();
    }

    return clone;
  }
}