class Paddle extends GuaImage{
    constructor(game, name){
        super(game, name)
        let p = this
        p.x = 150
        p.y = 270
        p.speed = 10
    }

    moveLeft(){
        let p = this
        p.x -= p.speed
        if (p.x < 0 ) {
            p.x = 0
        }
    }

    moveRight(){
        let p = this
        p.x += p.speed
        if (p.x > (400 - this.texture.w)) {
            p.x = 400 - this.texture.w
        }
    }
}