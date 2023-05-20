export default class Point {
  x: number
  y: number
  fixedY: number
  speed: number
  cur: number
  max: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.fixedY = y
    this.speed = 0.1
    this.cur = 0
    this.max = Math.random() * 100 + 150
  }
  update() {
    this.cur += this.speed
    this.y = this.fixedY + Math.sin(this.cur) * this.max
  }
}
