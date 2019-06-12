// Obkect methods
// Các phương thức của Object

// var myDog = {
//     weight: 5,
//     name: 'Đần',
//     age: 1,
//     bark: function() {
//         console.log('meo meo, my name is : ', this.name);  // This chính là Object mà Method này thuộc về
//     },
//     eat: function(bone) {
//         this.weight = this.weight + bone.weight;
//         return this;
//     }

// };

// var bone = { weight: 0.5};

// function bark() {
//     console.log('meo meo, my name is : ', this.name)  // This.name = undefied
// };

// console.log('before eat :', myDog.weight);

// myDog.eat(bone);
// console.log('after eating : ', myDog.weight);


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
     width: 20,
     height: 40,
     getWidth: function() {
         return this.width;
     },
     getHeight: function() {
         return this.height;
     },
     getArea: function() {
         return this.width * this.height;
     }
 };

 console.log('chiều rộng:', rectangle.getWidth());
 console.log('chiều cao:', rectangle.getHeight())
 console.log('diện tích là:', rectangle.getArea());