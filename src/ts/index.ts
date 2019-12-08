import { Application } from 'pixi.js'
import { size } from './constants'
import Goal from './classes/Goal'
import Population from './classes/Population'

let app = new Application({
  resolution: 4,
  width: size,
  height: size
})

const c = app.view

c.style.width = `${size}px`
c.style.height = `${size}px`

document.body.appendChild(c)

const goal = new Goal(5, size / 2, 20)
const population = new Population(goal)

app.stage.addChild(goal)
app.stage.addChild(population)

const tick = () => {
  if (population.allDotsDead()) {
    population.calculateFitness()
    population.naturalSelection()
    population.mutate()

    population.addAll(app)
  } else population.update()
  
  setTimeout(tick, 0)
}

setTimeout(tick, 1)