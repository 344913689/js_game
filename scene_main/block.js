class Block extends GuaImage{
    constructor(game, name){        
        super(game, name)
        this.game = game
        this.alive = true
    }

    kill(){
        this.lives --
        if (this.lives < 1){
            this.alive = false
        }
    }

}