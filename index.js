function average(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
  }
  console.log(average([1, 2, 3, 4, 5])); // 3
  