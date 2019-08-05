const formatString = function(string) {
  let numberOfSymbols;
  string.langth < 40 ? string : (numberOfSymbols = `${string.slice(0, 39)}...`);
  return numberOfSymbols;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
