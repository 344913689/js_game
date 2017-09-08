class SceneEnd extends GuaScene{
    constructor(game){
        super(game)
        game.registerAction('r', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw(){
        //draw labels
        this.game.context.fillText('按 R 开始游戏 ! ', 150, 150)
    }
}