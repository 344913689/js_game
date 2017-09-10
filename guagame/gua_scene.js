class   GuaScene{
    constructor(game){
        this.game = game
        this.elements = []
    }

    static new(game){
        let i = new this(game)
        return i
    }

    addElement(img){
        this.elements.push(img)
    }

    draw(){
        for (let e of this.elements) {
            this.game.drawImage(e)
        }
    }

}

