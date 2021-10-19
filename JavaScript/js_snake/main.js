let canvas = document.querySelector('#canvas')

let ctx = canvas.getContext("2d")

const CELL_SIZE = 20

let Xbound = canvas.width / CELL_SIZE
let Ybound = canvas.height / CELL_SIZE

const LEFTCODE = 37
const RIGHTCODE = 39
const UPCODE = 38
const DOWNCODE = 40

let currentCode = RIGHTCODE

function changeKeyCode(e) {
   currentCode = e.keyCode
}


window.addEventListener('keydown', changeKeyCode);

class Point {
   constructor(a, b) {
      this.x = a
      this.y = b
   }
}

function clear() {
   ctx.fillStyle = "white"
   ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawPoint(point, color) {
   ctx.fillStyle = color
   ctx.strokeStyle = "black"

   let x = CELL_SIZE * point.x;
   let y = CELL_SIZE * point.y;

   ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE)
   ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE)
}

const LEFT = new Point(-1, 0)
const RIGHT = new Point(1, 0)
const UP = new Point(0, -1)
const DOWN = new Point(0, 1)

class Snake {

   constructor() {
      this.initSize = 5
      this.headColor = "green"
      this.bodyColor = "yellow"
      this.startOffset = new Point(5, 5);
      this.body = []
      this.direction = RIGHT
      for (let i = 0; i < this.initSize; i++) {
         let x = this.startOffset.x + this.initSize - i - 1
         let y = this.startOffset.y
         this.body.push(new Point(x, y))
      }
   }

   get head() {
      return this.body[0]
   }

   selfCollided() {
      for (let p of this.body.slice(1, this.body.length)) {
         if (p.x ===this.head.x && p.y === this.head.y) {
            return true
         }
      }
      return false
   }

   render() {
      drawPoint(this.head, this.headColor)
      for (let p of this.body) {   
         if(p.x == this.head.x && p.y ==  this.head.y) continue      
         drawPoint(p, this.bodyColor)
      }
   }

   grow() {
      let xx = (this.head.x + this.direction.x)
      let yy = (this.head.y + this.direction.y)
      let x = xx % Xbound
      let y = yy % Ybound
      let reqX = (x < 0) ? x + Xbound : x
      let reqY = (y < 0) ? y + Ybound : y
      this.body = [new Point(reqX, reqY), ...this.body]
   }

   changeDirectionIfRequired() {
      if (currentCode === LEFTCODE && this.direction != RIGHT) {
         this.direction = LEFT
      }
      if (currentCode === RIGHTCODE && this.direction != LEFT) {
         this.direction = RIGHT
      }
      if (currentCode === UPCODE && this.direction != DOWN) {
         this.direction = UP
      }
      if (currentCode === DOWNCODE && this.direction != UP) {
         this.direction = DOWN
      }
   }

   hitBoundary() {
      return (this.head.x <= -1 || this.head.x >= Xbound || this.head.y <= -1 || this.head.y >= Ybound)
   }

   move() {
      this.grow()
      this.body.pop();
   }

   update() {
      this.changeDirectionIfRequired()
      this.move()
      this.render()
   }

   bodyContains(point) {
      for (var p in this.body) {
         if (p.x == point.x && p.y == point.y) {
            return true;
         }
      }
      return false
   }
}


class Game {
   constructor() {
      this.init()
   }

   init() {
      this.snake = new Snake()
      this.food = this.generateFood()
      this.lastUpdated = 0
      this.speed = 100
   }

   generateRandomPoint() {
      let x = Math.floor(Math.random() * Xbound)
      let y = Math.floor(Math.random() * Ybound)

      return new Point(x, y)
   }

   generateFood() {

      let tobefood = this.generateRandomPoint()

      while (this.snake.bodyContains(tobefood)) {
         tobefood = this.generateRandomPoint()
      }

      return tobefood
   }

   run() {
      window.requestAnimationFrame((delta) => this.update(delta))
   }

   checkCollision() {
      console.log(this.snake.head)
      console.log(this.food)
      let x = (this.snake.head.x == this.food.x)
      let y = (this.snake.head.y == this.food.y)      
      if (x&& y) {
         this.snake.grow()
         this.food = this.generateFood()
         console.log("here")
      }
      if (this.snake.selfCollided() || this.snake.hitBoundary()) {
         this.init()
      }
   }

   update(delta) {
      let diff = delta - this.lastUpdated
      if (diff > this.speed) {
         // console.log(diff) 
         this.lastUpdated = delta
         clear()
         drawPoint(this.food, "red")
         this.snake.update()
         this.checkCollision()
      }
      this.run()
   }
}

clear()

let game = new Game()

// game.food = new Point(10, 10)

// game.snake.body[0]  = new Point(9, 10)

// game.snake.grow()
// game.checkCollision()

game.run()