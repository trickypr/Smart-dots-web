import Dot from './Dot'

export default class Population {
  constructor(screenSquareSize, goalPos, size) {
    this.dots = []

    this.fitnessSum = 0
    this.bestDot = 0
    this.gen = 1

    for (var i = 0; i < size; i++) {
      this.dots[i] = new Dot(screenSquareSize, goalPos)
    }
  }

  update() {
    const dotsLength = this.dots.length

    for (var i = 0; i < dotsLength; i++) {
      this.dots[i].update()
    }
  }

  draw(ctx) {
    const dotsLength = this.dots.length

    ctx.fillStyle = '#000000'
    ctx.strokeStyle = '#000000'

    for (var i = 0; i < dotsLength; i++) {
      this.dots[i].draw(ctx)
    }
  }

  calculateFitness() {
    const dotsLength = this.dots.length

    for (var i = 0; i < dotsLength; i++) {
      this.dots[i].calculateFitness()

      this.fitnessSum = this.dots[i].fitness
    }
  }

  allDotsDead() {
    const dotsLength = this.dots.length;

    for (let i = 0; i < dotsLength; i++) {
      if (!this.dots[i].dead && !this.dots[i].reachedGoal) {
        return false;
      }
    }

    return true;
  }

  // ---------------------------------------------------------------------------
  naturalSelection() {
    let newDots = []
    this.setBestDot();

    newDots[0] = this.dots[this.bestDot].getBaby();
    newDots[0].isBest = true;
    for (let i = 1; i < this.dots.length; i++) {
      // select patent relative to fitness
      let parent = this.selectParent();

      // Get baby
      newDots[i] = parent.getBaby()
    }

    newDots.reverse()
    this.dots = newDots

    this.gen++;
  }

  // ---------------------------------------------------------------------------
  mutate() {
    for (let i = 1; i < this.dots.length; i++) {
      this.dots[i].brain.mutate();
    }
  }

  // ---------------------------------------------------------------------------
  setBestDot() {
    let max = 0;
    let maxIndex = 0;

    for (let i = 0; i < this.dots.length; i++) {
      if (this.dots[i].fitness > max) {
        maxIndex = i;
        max = this.dots[i].fitness;
      }
    }

    this.bestDot = maxIndex;
  }

  // ---------------------------------------------------------------------------
  selectParent() {
    let rand = Math.random() * this.fitnessSum;

    let runningSum = 0;

    for (let i = 0; i < this.dots.length; i++) {
      runningSum += this.dots[i].fitness;
      if (runningSum > rand) {
        return this.dots[i];
      }
    }

    return this.dots[this.dots.length - 1];
  }
}