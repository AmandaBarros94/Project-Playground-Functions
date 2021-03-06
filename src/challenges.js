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
function highestCount(array) {
  let maiorNumero = Math.max(...array);
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero === array[index]) {
      contador += 1;
    }
  }
  return contador;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoDoGato1 = Math.abs(cat1 - mouse);
  let posicaoDoGato2 = Math.abs(cat2 - mouse);
  let vencedor = null;
  if (posicaoDoGato1 < posicaoDoGato2) {
    vencedor = 'cat1';
  } else if (posicaoDoGato2 < posicaoDoGato1) {
    vencedor = 'cat2';
  } else {
    vencedor = 'os gatos trombam e o rato foge';
  }
  return vencedor;
}
catAndMouse(0, 3, 2);

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      resultado.push('bug!');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    }
  }
  return resultado;
}

fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(text) {
  let encodedText = text
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return encodedText;
}

function decode(text) {
  let decodedText = text
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return decodedText;
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
