var i = 1;
while(i <= 10){
    //console.log(i);
    ++i;
}
/**
 * Sử dụng vòng lặp while in ra màn hình các số chẵn nhỏ hơn 100 theo thứ tự giảm dần
 */

var i = 99;
while(i >= 1 ){
    if(i % 2 === 0){
        //console.log(i);
    }
    --i;
 }

 /**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */

var i = 0;
while(i <= 100){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
    ++i;
}

 
