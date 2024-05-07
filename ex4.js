const countVowels = function (prop) {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < prop.length; i++) {
    let letter  = prop.charAt(i);
    if (vowels.includes(letter.toLowerCase())) {
      counter += 1;
    }
  }
  return counter;
}

const prop = 'string de test';
const prop1 = 'Ana are mere';
console.log(`Numarul de vocale din "${prop}" este: `, countVowels(prop));
console.log(`Numarul de vocale din "${prop1}" este: `, countVowels(prop1));


