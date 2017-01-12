
function map (inputArr, cb) {
  outputArr = [];
  for (var i = 0; i < inputArr.length; i++) {
    outputArr.push(cb(inputArr[i]));
  }
  return outputArr;
}

var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {
  return word.length;
}));