import Point from './Point'

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
  constructor() {
    this.stageWidth = 0
    this.stageHeight = 0
    this.centerX = 0
    this.centerY = 0
    this.point = new Point(0, 0)
  }

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth
    this.stageHeight = stageHeight

    this.centerX = stageWidth / 2
    this.centerY = stageHeight / 2

    this.init()
  }

  init() {
    this.point = new Point(this.centerX, this.centerY)
  }

  draw(ctx: any) {
    ctx.beginPath()
    ctx.fillStyle = '#ff0000'

    this.point.update()
    ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI)
    ctx.fill()
  }
}
