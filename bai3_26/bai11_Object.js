var myDog = {
    name: "đần",
    weight: 20,
    age: 1,
    bark: function(){
        console.log("my name is: ", this.name);
    },
    eat: function(bone){
        return this.weight = this.weight + bone.weight;
    }
};

var bone = {
    weight: 5
};

//console.log(myDog.eat(bone));

/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */

var rectangle = {
    width: 10,
    height: 20,
    getWidth: function(){
        return this.width;
    },
    getHeight: function(){
        return this.height;
    },
    getArea: function(){
        return this.height * this.width;
    }
};

console.log(rectangle.getArea());
console.log(rectangle.getHeight());
console.log(rectangle.getWidth());