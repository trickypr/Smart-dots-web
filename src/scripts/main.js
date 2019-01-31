import Population from './class/Population';
import Goal from './class/Goal'

// Constants
const size = 800;

// Variables
let c, ctx, test, goal;

// -----------------------------------------------------------------------------

// Initialise

c = document.getElementById('canvas');
ctx = c.getContext('2d');

// Add Retina Support
if (window.devicePixelRatio) {
  // grab the width and height from canvas
  var height = size
  var width = size
  // reset the canvas width and height with window.devicePixelRatio applied
  canvas.setAttribute('width', Math.round(width * window.devicePixelRatio));
  canvas.setAttribute('height', Math.round(height * window.devicePixelRatio));
  // force the canvas back to the original size using css
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  // set CreateJS to render scaled
  ctx.scaleX = ctx.scaleY = window.devicePixelRatio;
}

goal = new Goal(size / 2, 20);

test = new Population(size, goal.pos, 400);

loop()

// Loop
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  goal.draw(ctx)

  if (test.allDotsDead()) {
    test.calculateFitness()
    test.naturalSelection()
    test.mutate()
  } else {
    test.update()
  }

  test.draw(ctx)

  setTimeout(loop, 0.1)
}