import { WebGLRenderer, Scene, PerspectiveCamera } from "three"

export class Demo {
    renderer: WebGLRenderer
    scene: Scene
    camera: PerspectiveCamera
    canvas: any
    
    constructor() {
        this.canvas = document.getElementById('next-three-context')

        this.init()

        this.render()
    }

    windowResize = () => {
        const w = window.innerWidth
        const h = window.innerHeight

        this.camera.aspect = w/h
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(w, h)
    }

    init() {
        this.renderer = new WebGLRenderer({ canvas: this.canvas })
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        this.scene = new Scene()

        this.camera = new PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000)
        this.camera.position.set(0, 0, 0)

        window.addEventListener('resize', this.windowResize)
    }

    render = () => {
        requestAnimationFrame(this.render)

        this.renderer.render(this.scene, this.camera)
    }
}