/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    let value = arr[0]
    for(var i=0;i<arr.length;i++){
        if(value < arr[i]){
            value = arr[i];
        }
    }
    return value
}
console.log(max([32, 6, 11, 9, 12, 1, 3, 20]))