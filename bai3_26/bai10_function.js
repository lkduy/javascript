// Function (hàm) in Javascript:

function calculateTriangleSquare(a, h) {
    return (a * h)/ 2;
}
// Tính dien tich tam giác có chiều cao = 5 và đáy = 10
console.log(calculateTriangleSquare(10,5));

//tính dien tich hinh tròn
function calculateCircleArea(r) {
    return r * r * 3.14;
}
console.log(calculateCircleArea(10));


// Bài tập: Viết hàm tính thể tích khối hộp.
// Nhận vào các tham số như dưới, trả về thể tích của khối hộp.

/**
 * Tính thể tích khối hộp
 * https://www.wikihow.com/Calculate-Volume-of-a-Box
 * @param {Number} w Chiều rộng
 * @param {Number} h Chiều cao
 * @param {Number} l Chiều dài
 * @returns {Number} Diện tích
 */
function getBoxVolume(l, w, h) {
    return l * w * h;
}
  
  console.log(getBoxVolume(10, 20, 30)); // 6000
  console.log(getBoxVolume(4, 5, 6)); // 120