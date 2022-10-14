size = window.innerWidth / 3;
if (window.innerHeight < window.innerWidth) {
  size = window.innerHeight / 3;
}

spinBefore = Math.PI * 1.5;

function draw() {
  context.beginPath();
  context.arc(
    window.innerWidth / 2,
    window.innerHeight / 2,
    size,
    0,
    2 * Math.PI,
    false
  );
  context.fillStyle = "pink";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#e68394";
  context.stroke();
  context.lineWidth = 0.1;
  context.strokeStyle = "#e68394";
  for (i = 0; i < Math.PI * 2; i += (Math.PI * 2) / 5) {
    for (a = 0; a < Math.PI * 2; a += Math.PI / 600) {
      let spin = spinBefore + i;
      drawLine(
        Math.cos(a + spin) * size + window.innerWidth / 2,
        Math.sin(a + spin) * size + window.innerHeight / 2,
        Math.cos(a * 2 + spin) * size + window.innerWidth / 2,
        Math.sin(a * 2 + spin) * size + window.innerHeight / 2
      );
    }
  }
}
function update() {
  //spinBefore+=Math.PI/5
}

function keyup(key) {
  console.log(key);
}
