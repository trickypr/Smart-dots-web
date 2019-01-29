// Classes
import Dot from './class/Dot';

// Constants
const size = 800;

// Variables
let c, ctx, test;

// -----------------------------------------------------------------------------

// Initialise
function setup() {
  c = document.getElementById('canvas');
  ctx = c.getContext('2d');

  test = new Dot(size);

  window.requestAnimationFrame(loop);
}

// Loop
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  test.update();
  test.draw(ctx);

  window.requestAnimationFrame(loop);
}

setup()