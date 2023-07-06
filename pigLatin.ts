function pigIt(str: string) {
  let arr = str.split(" ");

  let newArr = arr
    .map((word) => {
      if (word === "!" || word === "?") return word;
      let firstLetter = word[0];
      let restOfWord = word.slice(1);
      return restOfWord + firstLetter + "ay";
    })
    .join(" ");

  return newArr;
}

console.log(pigIt("Pig latin is cool"));
