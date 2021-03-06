class Ball extends GuaImage{
    constructor(game, name){
        super(game, name)
        this.x = 180
        this.y = 260
        this.speedX = 5
        this.speedY = 5
        this.fired = false
    }

    fire(){
        this.fired = true
    }

    move(){
        if (!this.fired) {
            return
        }

        //检测边界
        if (this.x < 0 || this.x > (400 - this.texture.w) ) {
            this.speedX = -this.speedX
        }
        if (this.y < 0 || this.y > (300 - this.texture.h)) {
            this.speedY = -this.speedY
        }
        this.x += this.speedX
        this.y -= this.speedY

    }

    collide(b){
        let a = this
        let x = rectangle(a.x, b.x, a.y, b.y, a.texture.w, b.texture.w, a.texture.h, b.texture.h)
        let y = rectangle(b.x, a.x, b.y, a.y, b.texture.w, a.texture.w, b.texture.h, a.texture.h)
        return x || y
    }

    fanTan(){
        this.speedY = -this.speedY
    }

}