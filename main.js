
var blocks =[]
var enableDebugMod = function(game, enable){
    if (!enable) {
        return
    }

    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        //log(k)
        if (k == 'p') {
            //暂停
            paused = !paused

        }else if ('123456789'.includes(k)) {
            //临时载入关卡功能
            blocks = loadLevel(game, Number(k))     
        }
    })

    document.querySelector('#id-input-speed').addEventListener('input', function(event){
        var input = event.target
        //log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function(){

    var images = {
        sky: 'img/sky.png',
        paddle: 'img/pandou.png',
        ball: 'img/ball.png',
        block0: 'img/block1.png',
        block1: 'img/block2.png',
        block2: 'img/block3.png',
        block3: 'img/block4.png',
        block4: 'img/block5.png',
    }
    
    var game = GuaGame.instace(30, images, function(g){
        //var scene = SceneTitle.new(g)
        var scene = Scene.new(g)
        g.runWithScene(scene)
    })

}


__main()