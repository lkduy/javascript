// SetInterval
// clearInterval

var i = 0;
var interval = setInterval(function() {
    ++i;
    console.log(i);
    if (i===5) {
        clearInterval(interval);
    }
}, 1000);

// write a function count from 1 to 10
// return a promise

function  countFrom(a, b) {

}

