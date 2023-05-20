import Point from './Point.js'

interface IWave {
  resize: (stageWidth: number, stageHeight: number) => void
  init: () => void
  draw: (ctx: any) => void
}

export default class Wave {
  stageWidth: number = 0
  stageHeight: number = 0
  centerX: number = 0
  centerY: number = 0
  point: Point
  points: Point[] = []
  index: number
  totalPoints: number
  color: string
  pointGap: number = 0
  constructor(index: number, totalPoints: number, color: string) {
    this.index = index
    this.totalPoints = totalPoints
    this.color = color

    this.point = new Point(index, -9999, -9999) // 초기값
  }
  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth
    this.stageHeight = stageHeight

    this.centerX = stageWidth / 2
    this.centerY = stageHeight / 2

    this.pointGap = this.stageWidth / (this.totalPoints - 1)

    this.init()
  }

  init() {
    this.points = []
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(this.index + i, this.pointGap * i, this.centerY)
      this.points[i] = point
    }
  }

  draw(ctx: any) {
    ctx.beginPath()
    ctx.fillStyle = this.color

    let prevX = this.points[0].x
    let prevY = this.points[0].y
    ctx.moveTo(prevX, prevY)

    for (let i = 0; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) {
        this.points[i].update()
      }

      const cx = (prevX + this.points[i].x) / 2
      const cy = (prevY + this.points[i].y) / 2

      ctx.lineTo(cx, cy)

      prevX = this.points[i].x
      prevY = this.points[i].y
    }

    ctx.lineTo(prevX, prevY)
    ctx.lineTo(this.stageWidth, this.stageHeight)
    ctx.lineTo(this.points[0].x, this.stageHeight)
    ctx.fill()
    ctx.closePath()
  }
}
