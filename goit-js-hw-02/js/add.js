const formatString = function(string) {
  let numberOfSymbols = 0;
  string = string.split(' ');

  for (let i = 0; i < string.length; i += 1) {
    numberOfSymbols += 1;
  }

  if (numberOfSymbols > 40) {
    string.splice(40, 0, '...');
  }
  string = string.join(' ');
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
