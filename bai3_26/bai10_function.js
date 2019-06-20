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

function getBoxVolume(w, h, l){
    return w * h * l;
}

console.log(getBoxVolume(10, 20, 30));
console.log(getBoxVolume(4 , 5, 6));

