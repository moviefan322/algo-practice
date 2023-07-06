function findOutlier(integers: number[]) {
  const evens = integers.reduce((acc, cur) => {
    if (cur % 2 === 0 && cur !== 1) {
      console.log(cur);
      acc++;
    }
    return acc;
  }, 0);

  const odds = integers.reduce((acc, cur) => {
    if (cur % 2 !== 0) {
      console.log(cur);
      acc++;
    }
    return acc;
  }, 0);

  if (evens === 1) {
    return integers.filter((num) => num % 2 === 0 && num !== 1)[0];
  } else {
    return integers.filter((num) => num % 2 !== 0)[0];
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(findOutlier(arr));
