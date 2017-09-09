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
        s.paddle = Paddle.new(game, 'paddle')
        s.ball = Ball.new(game, 'ball')
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

        // g.registerAction(' ', function(){
        //     ball.fire()
        // })

    }

    update(){
        
    }

}


