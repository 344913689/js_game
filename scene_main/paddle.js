var Paddle = function(game){
    var o = game.imageByName('paddle')
    /*var o = {
        image: image,
        x: 100,
        y: 251,
        speed: 10, 
    }*/
    
    o.x = 100
    o.y = 251
    o.speed = 10
    o.moveLeft = function(){
        o.x -= o.speed
        if (o.x < 0 ) {
            o.x = 0
        }
    }

    o.moveRight = function(){
        o.x += o.speed
        if (o.x > 400 - o.w){
            o.x = 400 - o.w
        }
    }

    var aInB = function(x, x1, x2){
        return x >= x1 && x <= x2
    }

    o.collide = function(ball){
        var a = o
        var b = ball
        if (aInB(a.x, b.x, (b.x + b.w)) || aInB(b.x, a.x, a.x + a.w)) {
            if (aInB(a.y, b.y, (b.y + b.h)) || aInB(b.y, a.y, a.y + a.h)) {
                return true
            } 
        }
        return false

        //return aInb(o, ball) || aInb(ball, o)
    }

    return o
}