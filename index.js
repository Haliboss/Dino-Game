const map = document.querySelector(".map");
const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const bird = document.querySelector(".bird");
const scoreText = document.querySelector(".score");
const startButton = document.querySelector(".start_button");

let gameInterval;
let isJumping = false;
let position = 50;
let score = 0;
let speed = 10;
let obstacles = ["cactus", "bird"];
let obstaclePosition = obstacles[Math.floor(Math.random() * obstacles.length)];

function handleKeyDown(event) {
  if ((event.code = "space")) {
    if (!isJumping) {
      isJumping = true;

      let upInterval = setInterval(() => {
        if ((position) => 200) {
          clearInterval(upInterval);

          let downInterval = setInterval(() => {
            if(position <= 50) {
              clearInterval(downInterval);
              isJumping = false;
            }
          })

        } else {
          position += 10;
          dino.style.bottom = position + "px";
        }
      }, 20);
    }
  }
}

function updateObstaclePosition() {
  obstaclePosition -= speed;
  if(nextObstacle === 'cactus') {
    cactus.style.right = 550 - obstaclePosition + 'px';
  } else if (nextObstacle === 'bird') {
    bird.style.right = 550 - obstaclePosition + 'px';
  }
}

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  console.log('click')
  document.addEventListener("keydown", handleKeyDown);
});
