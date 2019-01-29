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
      this.directions[i] = vectorFromAngle(Math.random() * (2 * Math.PI));
    }
  }
}