var Scene = function(game){
    var s = {
        game: game,

    }
    //初始化
    var paddle = Paddle(game)
    var ball = Ball(game)
    s.score = 0
    blocks = loadLevel(game, 1)
    
    window.paused = false
    enableDebugMod(game, true)

    game.registerAction('ArrowLeft', function(){
        paddle.moveLeft()
    })

    game.registerAction('ArrowRight', function(){
        paddle.moveRight()
    })

    game.registerAction(' ', function(){
        ball.fire()
    })

    s.draw = function(){
        game.drawImage(paddle)
        game.drawImage(ball)
        for (var i = blocks.length - 1; i >= 0; i--) {
            var block = blocks[i]
            if (block.alive) {
            game.drawImage(block)
            }
        }

        //draw lables
        game.context.fillText('分数: ' + s.score, 10, 280)
    }

    s.update = function(){
        if (window.paused) {
            return
        }

        ball.move()
        //判断游戏结束
        if (ball.y > paddle.y) {
            //跳转到游戏结束场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
            return 
        }
        if (paddle.collide(ball)) {
            ball.fanTan()
        }

        //判断砖块相撞
        for (var i = blocks.length - 1; i >= 0; i--){
            var block = blocks[i]
            if (block.collide(ball)) {
                //log('相撞')
                block.kill()
                ball.fanTan()

                //更新分数
                s.score += 10
            }
        }
    }

    var enableDrag = false
    //mouse event
    game.canvas.addEventListener('mousedown', function(event){
        var x = event.offsetX
        var y = event.offsetY
        //检查是否点钟 ball
        if (ball.hasPoint(x, y)) {
            //设置拖拽状态
            enableDrag = true
        }
    })

    game.canvas.addEventListener('mousemove', function(event){
        var x = event.offsetX
        var y = event.offsetY
        if (enableDrag) {
            ball.x = x
            ball.y = y
        }

    })

    game.canvas.addEventListener('mouseup', function(event){
        var x = event.offsetX
        var y = event.offsetY
        enableDrag = false
    })

    return s
}