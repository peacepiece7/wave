import Wave from './wave.js'

export default class WaveGroup {
  totalWaves: number
  totalPotins: number
  color: string[]
  waves: Wave[]

  constructor() {
    this.totalWaves = 3
    this.totalPotins = 6
    this.color = [
      'rgba(0,199,235,0.4)',
      'rgba(0,146,199,0.4)',
      'rgba(0,87,158,0.4)',
    ]
    this.waves = []

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPotins, this.color[i])
      this.waves[i] = wave
    }
  }

  resize(stageWidth: number, stageHeight: number) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i]
      wave.resize(stageWidth, stageHeight)
    }
  }

  draw(ctx: any) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i]
      wave.draw(ctx)
    }
  }
}
