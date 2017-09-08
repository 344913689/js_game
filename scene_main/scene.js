class Scene extends GuaScene{
    constructor(game){
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup(){
        let game = this.game
        let s = this
        s.bg = GuaImage.new(game, 'sky')
        s.paddle = Paddle1.new(game, 'paddle')
        s.ball = GuaImage.new(game, 'ball')
        s.block = GuaImage.new(game, 'block1')

        s.addElement(s.bg)
        s.addElement(s.paddle)
        s.addElement(s.ball)
        s.addElement(s.block)
    }
    
    setupInputs(){
        let g = this.game
        let s = this

        g.registerAction('ArrowLeft', function(event){
            s.paddle.moveLeft()
        })

        g.registerAction('ArrowRight', function(event){
            s.paddle.moveRight()
        })

        /*g.registerAction(' ', function(event){
            s.ball.fire()
        })*/

    }

    update(){
        
    }

}


class Paddle1 extends GuaImage{
    constructor(game, name){
        super(game, name)
        let p = this
        p.x = 100
        p.y = 251
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
        if (p.x < 0 ) {
            p.x = 0
        }
    }
}