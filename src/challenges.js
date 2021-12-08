// Desafio 1
function compareTrue(parametro1, parametro2) {
  let resultado = null;
  if (parametro1 === true && parametro2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let formula = (base * height) / 2;
  return formula;
}
calcArea(10, 50);

// Desafio 3
function splitSentence(texto) {
  return texto.split(' ');
}
splitSentence('go trybe');

// Desafio 4
let arrayTeste = ['Lucas', 'Cassiano', 'Feraz', 'Paolillo'];
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  return ultimoNome.concat(', ', primeiroNome);
}
concatName(arrayTeste);

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

footballPoints(14, 8);

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
