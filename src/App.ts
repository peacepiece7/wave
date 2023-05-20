interface IApp {
  resize: () => void
  animate: (t: string) => void
}
import WaveGroup from './waveGroup.js'

class App {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  stageWidth: number = 0
  stageHeight: number = 0
  waveGroup: WaveGroup

  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    document.body.appendChild(this.canvas)

    this.waveGroup = new WaveGroup()

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

    this.waveGroup.resize(this.stageWidth, this.stageHeight)
  }

  animate<T>(t: T) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

    this.waveGroup.draw(this.ctx)

    requestAnimationFrame(this.animate.bind(this))
  }
}

window.onload = () => {
  new App()
}
