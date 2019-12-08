import Dot from './Dot'
import Goal from './goal'
import { Container } from 'pixi.js'
import { populationSize } from './constants'

export default class Population extends Container {
  dots: Dot[] = []

  fitnessSum = 0
  bestDot = 0
  gen = 1
  
  constructor(goal: Goal) {
    super()

    for (let i = 0; i < populationSize; i++) this.dots.push(new Dot(goal))
    
    this.dots.forEach(dot => this.addChild(dot))
  }

  update() {
    this.dots.forEach(dot => dot.update())
  }

  calculateFitness() {
    const dotsLength = this.dots.length

    for (var i = 0; i < dotsLength; i++) {
      this.dots[i].calculateFitness()
      this.fitnessSum += this.dots[i].fitness
    }
  }

  allDotsDead() {
    let isDead = true

    this.dots.forEach(d => {
      if (isDead && !d.dead && !d.reachedGoal) isDead = false
    })

    return isDead
  }

  naturalSelection() {
    let newDots = []
    this.setBestDot()

    this.dots.forEach((d, i) => {
      const parent = this.selectParent()
      newDots[i] = parent.getBaby()
    })

    newDots[0] = this.dots[this.bestDot].getBaby()
    newDots[0].isBest = true

    this.dots.forEach(dot => dot.destroy())

    newDots.reverse()
    this.dots = newDots

    this.gen++
  }

  mutate() {
    for (let i = 1; i < this.dots.length; i++) this.dots[i].brain.mutate()
  }

  setBestDot() {
    let max = 0,
      maxIndex = 0

    this.dots.forEach((d, i) => {
      if (d.fitness > max) {
        maxIndex = i
        max = d.fitness
      }
    })

    this.bestDot = maxIndex
  }

  selectParent() {
    const rand = Math.random() * this.fitnessSum

    let runningSum = 0,
      parent: Dot = this.dots[this.dots.length - 1]

    this.dots.forEach(d => {
      runningSum += d.fitness
      if (runningSum > rand) parent = d
    })

    return parent
  }

  addAll(app) {
    this.dots.forEach(dot => app.stage.addChild(dot))
  }
}