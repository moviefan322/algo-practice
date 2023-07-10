function toCamelCase(str: any) {
  const split = str.split(/[-_]/);
  
  const camelCase = split.map((word: string, index: number) => {
    if (index === 0) {
      return word;
    }
    return word[0].toUpperCase() + word.slice(1);
  });

  return camelCase.join("");
}

console.log(toCamelCase("TheCat_Is-Savage"));
