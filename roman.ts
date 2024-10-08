function solution(roman: string) {
  let integer = 0;
  for (let i = 0; i < roman.length; i++) {
    console.log(integer);
    if (roman[i] == "M") {
      integer += 1000;
    }
    if (roman[i] == "D") {
      integer += 500;
    }
    if (roman[i] == "C") {
      if (roman.slice(i).includes("M") || roman.slice(i).includes("D")) {
        integer -= 100;
      } else {
        integer += 100;
      }
    }
    if (roman[i] == "L") {
      integer += 50;
    }
    if (roman[i] == "X") {
      if (roman.slice(i).includes("L") || roman.slice(i).includes("C")) {
        integer -= 10;
      } else {
        integer += 10;
      }
    }
    if (roman[i] == "V") {
      integer += 5;
    }
    if (roman[i] == "I") {
      console.log(roman.slice(i));
      if (roman.slice(i).includes("V") || roman.slice(i).includes("X")) {
        integer -= 1;
      } else {
        integer += 1;
      }
    }
    console.log(integer);
  }
  return integer;
}

console.log(solution("XXI"));

// const example = "MCMXC";

// console.log(example.indexOf("C"))
