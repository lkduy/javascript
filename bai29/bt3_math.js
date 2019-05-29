var math = {
    add: function(a, b) {
      return a + b;
    },
    sum: function(arr) {
        var value = 0;
        arr.map(function(item){
            value += item;
        });
        return value;
    }
  };
  
  module.exports = math;