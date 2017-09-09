
let log = console.log.bind(console)

/*var e = sel => document.querySelector(sel)
var log = function(s){
    e('#id-text-log').value += '\n' + s
}*/

const imageFromPath = function(path){
    var img = new Image()
    img.src = path
    return img
}

const rectangle = function(ax, bx, ay, by, aw, bw, ah, bh) {
    // 检测矩形相交
    if (((ax + aw) > bx) && ((ax + aw) < (bx + bw))) {
        if (((ay + ah) > by) && ((ay + ah) < (by + bh))) {
            return true
        }
    }
    if (((ax + aw) > bx) && ((ax + aw) < (bx + bw))) {
        if ((ay > by) && (ay  < (by + bh))) {
            return true
        }
    }
    if ((ax > bx) && (ax < (bx + bw))) {
        if (((ay + ah) > by) && ((ay + ah) < (by + bh))) {
            return true
        }
    }
    if ((ax > bx) && (ax < (bx + bw))) {
        if ((ay > by) && (ay < (by + bh))) {
            return true
        }
    }
    return false
}

const inside = function(x, o, r, u, l){
    if (x > o && x < u) {
        if (x > l && x < r) {
            return true
        }
    }
    return false
}
