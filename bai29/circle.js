/**
 *  1. Tạo module `circle.js` export 1 constructor function tên là Circle
 *  2. Circle có 3 property là x, y, radius (toạ độ x, y và bán kính)
 *  3. Circle có 1 method là isOverlapped (overlap là chồng lấn, đè lên nhau), trả về -1 nếu 2 hình tròn này đè lên nhau, trả về 1 nếu 2 hình tròn không đụng nhau, trả về 0 nếu 2 hình tròn tiếp xúc nhau.
 *  4. Test thử
 */

var Circle = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.isOverlapped = function(circle){
    var d = Math.sqrt(Math.pow(this.x - circle.x, 2)+Math.pow(this.y - circle.y, 2));
    if(d > this.r + circle.r)
    {
        return 1;
    }
    if(d < this.r + circle.r){
        return -1;
    }
    return 0;
}


module.exports = Circle;