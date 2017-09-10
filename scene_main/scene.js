class Scene extends GuaScene{
    constructor(game){
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup(){
        let game = this.game
        let s = this
        s.n = 1
        s.bg = GuaImage.new(game, 'sky')
        s.paddle = Paddle.new(game, 'paddle')
        s.ball = Ball.new(game, 'ball')

        s.addElement(s.bg)
        s.addElement(s.paddle)
        s.addElement(s.ball)        
        this.addBlocks(3)
        
    }

    addBlocks(n){
        let b = this
        if (n > 5) {
            n = 5
        }
        let p = levels[n - 1]
        let es = []
        for (var i = 0; i < p.length; i++) {
            let type = p[i][2] || 1
            let name = 'block' + type
            b.block = Block.new(b.game, name)
            b.block.x = p[i][0]
            b.block.y = p[i][1]
            b.block.lives = p[i][2] || 1
            es.push(b.block)
            log(b.block.alive)
            if (b.block.alive) {
                b.addElement(b.block)
            }
        }
        b.blocks = es 
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

        g.registerAction(' ', function(){
            s.ball.fire()
        })

    }

    update(){
        let s = this
        s.ball.move()
        //判断底板相撞
        if (s.ball.collide(s.paddle)) {
            s.ball.fanTan()
        }

        //判断砖块相撞
        for (var i = 0; i < s.blocks.length; i++) {
            if (s.block.alive) {
                if (s.ball.collide(s.blocks[i])) {
                    s.ball.fanTan()
                    s.block.kill()
                    log(s.blocks[i])
                    this.draw()
                }
            }
            
        }
        
    }

}


