interface IApp {
  resize: () => void
  animate: (t: string) => void
}
import Wave from './wave'

class App {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  stageWidth: number = 0
  stageHeight: number = 0

  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    document.body.appendChild(this.canvas)
    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()
    requestAnimationFrame(this.animate.bind(this))
  }

  resize() {
    this.stageWidth = document.body.clientWidth
    this.stageHeight = document.body.clientHeight

    this.canvas.width = this.stageWidth * 2
    this.canvas.height = this.stageHeight * 2
    this.ctx.scale(2, 2) // 레티나 디스플레이

    this.ctx.scale(2, 2)
  }

  animate(t: string) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
  }
}

window.onload = () => {
  new App()
}
