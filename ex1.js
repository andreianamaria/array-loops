const prompt = require("prompt-sync")({ sigint: true });

const printEvenNumbers = function (n) {
  let sir = `Numerele pare de la 0 la ${n} sunt: `;
  for (let i = 0; i <= n; i += 2) {
    sir += i + ', ';
  }
  return sir.slice(0, -2);
}
n = prompt("Te rog sa introduci un numar: ");
console.log(printEvenNumbers(n));