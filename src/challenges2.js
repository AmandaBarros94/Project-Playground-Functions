// Desafio 10
  function techList(array, name) {
    if (array.length === 0) {
      return 'Vazio!';
    }
    let finalArray = [];
    array.sort().forEach((tech) => {
      finalArray.push({ tech, name });
    });
    return finalArray;
  }

// Desafio 11
function mostDialedNumbers(numbers) {
  for (let num of numbers) {
    let contador = 0;

    let number = numbers.indexOf(num);
    while (number !== -1) {
      contador += 1;
      number = numbers.indexOf(num, number + 1);
    }
    if (contador >= 3) {
      return false;
    }
  }
  return true;
}
function GenerateNumbers(numbers) {
  if (mostDialedNumbers(numbers) === true) {
    let number = '';
    for (let i = 0; i < numbers.length; i += 1) {
      number += numbers[i];
    }
    return `(${number.substring(0, 2)}) ${number.substring(2, 7)}-${number.substring(7, 11)}`;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return GenerateNumbers(numbers);
}

// Desafio 12
function triangleCheck(measureA, measureB, measureC) {
  if (measureA > measureB + measureC
      || measureB > measureA + measureC
      || measureC > measureA + measureB) {
    return false;
  }
  return true;
}
triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(string) {
  let numbers = string.replace(/[^0-9]/g, '');
  let cup = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    cup += parseInt(numbers[index], 10);
  }
  if (cup > 1) {
    return `${cup} copos de água`;
  }
  return `${cup} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};