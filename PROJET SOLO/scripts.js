const canvasWidth = 400;
const canvasHeight = 700;
const devicePixelRatio = 0;

const initialBallSpeed = 220 ;       // px / s
const ballRadius = 8;
const paddleWidth = 100;
const paddleHeight = 12;
const paddleSpeed = 400;             // px / s
const maxBounceAngle = 60; 

// ========== ETAT GLOBAL ==========
let gameState = "ready"  ;   // "ready" | "running" | "gameover"
let startTime = null;        // timestamp de début (ms)
let lastFrameTime = null;    // timestamp de la dernière frame (ms)
let elapsedTime = 0;   