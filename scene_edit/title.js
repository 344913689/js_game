class SceneTitle extends GuaScene{
    constructor(game){
        super(game)
        game.registerAction('k', function(){
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }

    draw(){
        //draw labels
        this.game.context.fillText('按 K 开始游戏 ! ', 150, 150)
    }
}