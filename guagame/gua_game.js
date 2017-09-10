class GuaGame{
    constructor(fps, images, runCallback){
        window.fps = fps
        this.images = images
        this.runcallback = runCallback
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        //events
        var self = this
        window.addEventListener('keydown', event => {
            this.keydowns[event.key] = true
         })
        window.addEventListener('keyup', function(event){
            self.keydowns[event.key] = false
         })

        this.init()
    }

    static instace(fps, images, runCallback){
        this.i = this.i || new this(fps, images, runCallback)
        return this.i
    }

    drawImage(guaImg){
        this.context.drawImage(guaImg.texture.image, guaImg.x, guaImg.y)
    }

    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    
    update(){
        this.scene.update()
    }

    draw(){
        this.scene.draw()
    }

    registerAction(key, callback){
        this.actions[key] = callback
    }
    
    runloop(){
        //events
        let g = this
        var actions = Object.keys(g.actions)
        for (var i = actions.length - 1; i >= 0; i--) {
            var key = actions[i]
            if (g.keydowns[key]){
                //如果key被按下 就调用注册函数
                g.actions[key]()
            }
        }
        //update
        g.update()
        //clear
        g.clear()
        //draw
        g.draw()

        //next runloop
        setTimeout(function(){
            g.runloop()
        }, 1000/window.fps)
    }

    textureByName(name){
        let g = this
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }

    runWithScene(scene){
        let g = this
        g.scene = scene
        setTimeout(function(){
            g.runloop()
        }, 1000/fps)
    }

    replaceScene(scene){
        this.scene = scene
    }

    run(scene){
        this.runcallback(this)
    }

    init(){
        let g = this
        var loads = []
        var names = Object.keys(g.images)
        //预先载入图片
        for (var i = names.length - 1; i >= 0; i--) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function(){
                //存入 g.images 中
                g.images[name] = img
                //所有图片载入后调用run
                loads.push(1)
                if (loads.length == names.length) {
                    g.run()
                }
            }
        }
    }
}
