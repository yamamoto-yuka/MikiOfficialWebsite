var unit = 100,
  canvasArray,
  info = {},
  colorArray;

// Initialize and execute
let init = () => {
  info.seconds = 0;
  info.t = 0;
  canvasArray = [];
  colorArray = [];

  canvasArray.push(document.getElementById("mainwaveCanvas"));
  colorArray.push(["#fff"]);

  for (let index in canvasArray) {
    let canvas = canvasArray[index];
    canvas.width = document.documentElement.clientWidth;
    canvas.height = 100;
    canvas.contextCache = canvas.getContext("2d");
  }
  update();
};

// loop
let update = () => {
  for (let index in canvasArray) {
    let canvas = canvasArray[index];
    draw(canvas, colorArray[index]);
  }
  info.seconds = info.seconds + 0.014;
  console.log(info.seconds);
  info.t = info.seconds * Math.PI;
  console.log(info.t);
  setTimeout(update, 50);
};

// Secify color, alpha, zoom, dalay
let draw = (canvas, color) => {
  let context = canvas.contextCache;
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawWave(canvas, color[0], 1, 1.5, 0);
};

// Create wave path
let drawWave = (canvas, color, alpha, zoom, delay) => {
  let context = canvas.contextCache;
  context.fillStyle = color;
  context.globalAlpha = alpha;
  context.beginPath();
  // wavelength = velocity / frequency
  drawSine(canvas, info.t / 0.5, zoom, delay);
  // lineTo(x,y)
  // Changes
  context.lineTo(canvas.width + 10, -canvas.height);
  context.lineTo(0, -canvas.height);
  context.closePath();
  context.fill();
};

// Create Sine
let drawSine = (canvas, t, zoom, delay) => {
  let xAxis = Math.floor(canvas.height / 2);
  let yAxis = 0;
  let context = canvas.contextCache;
  // Set the initial x and y, starting at 0,0 and translating to the origin on
  let x = t;
  let y = Math.sin(x) / zoom;
  context.moveTo(yAxis, unit * y + xAxis);
  for (i = yAxis; i <= canvas.width + 10; i += 10) {
    x = t + (yAxis + i) / unit / zoom;
    y = Math.sin(x - delay) / 3;
    context.lineTo(i, unit * y + xAxis);
  }
};

init();
