
exports.min = function min (array) {
  array.reduce(function(a,b){
    if (a<b){
    return a
  }
    else {
      return b
    };
  })
}
}

exports.max = function max (array) {
  array.reduce(function(a,b){
    if (a>b){
    return a
  }
    else {
      return b
    };
  })
}

exports.avg = function avg (array) {

  }
