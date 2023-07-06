const mergeAlternately = (word1: string, word2: string) => {
  let newStr: string[] = [];
  if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {
      newStr.push(word1[i]);
      newStr.push(word2[i]);
    }
    return newStr.join("");
  }
  if (word1.length > word2.length) {
    for (let i = 0; i < word2.length; i++) {
      newStr.push(word1[i]);
      newStr.push(word2[i]);
    }
    newStr.push(word1.slice(word2.length));
    return newStr.join("");
  }
  if (word2.length > word1.length) {
    for (let i = 0; i < word1.length; i++) {
      newStr.push(word1[i]);
      newStr.push(word2[i]);
    }
    newStr.push(word2.slice(word1.length));
    return newStr.join("");
  }
};

console.log(mergeAlternately("poo", "butters"));
