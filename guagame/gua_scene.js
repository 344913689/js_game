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
        for (var i = 0; i <= this.elements.length - 1; i++) {
            let e = this.elements[i]
            this.game.drawImage(e)
        }
    }

    update(){
        
    }
}

