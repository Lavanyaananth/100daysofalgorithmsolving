const pigit = (str) => {
  let split = str.split(" ");
  let pigLatin = [];
  split.map((word) =>
    /([a-zA-Z])/.test(word)
      ? pigLatin.push(word.substr(1) + word[0] + "ay")
      : pigLatin.push(word)
  );
  return pigLatin.join(" ");
};
console.log(pigit("Hello world !"));
console.log(pigit("s12!"));
