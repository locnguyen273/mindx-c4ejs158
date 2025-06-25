const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = array.filter((item, index) => {
  array.indexOf(item) === index
  console.log("first", array.indexOf(item), index)
});

console.log(uniqueArray); // [1, 2, 3, 4, 5]


function countUnique(array) {
  const result = {};
  for(let item of array) {
    if(result[item]) {
      result[item] += 1;
    } else result[item] = 1;
  }
  return result;
}

console.log(countUnique(['a', 'b', 'a', 'c', 'b', 'a', 'd'])); // 5