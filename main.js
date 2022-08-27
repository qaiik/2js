class Sprite {
  constructor(method, arguments) {
    this.method = method;
    this.arguments = arguments;
  }
}
    

class d2GraphicsRenderer {
  constructor(element) {
    this.#fps = 0;
    this.#method = "animation_frame"
    this.tick = function(){}
    if (!element) {
      const cnv = document.createElement("canvas")
      document.body.appendChild(cnv)
    }
    this.element = element ? element : cnv
    this.activeSprites = []
  }
  
  #render() {
    
  }
  init(looop, fps=60, method="animation_frame") {
    if (method == "animation_frame") {
      this.tick = function() {
        loop()
        this.#render()
      }
  }
  
}

two = {
  d2GraphicsRenderer
}
