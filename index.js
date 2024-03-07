//Questão 2
function verificaFibonacci(numero) {
  let n1 = 0;
  let n2 = 1;
  let proximoTermo;

  if (numero === n1 || numero === n2) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
    return;
  }

  proximoTermo = n1 + n2;

  while (proximoTermo <= numero) {
    if (proximoTermo === numero) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
      return;
    }
    n1 = n2;
    n2 = proximoTermo;
    proximoTermo = n1 + n2;
  }

  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

//Questão 3
const dadosFaturamentoJson = `
[
  {
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]
`;

const dadosFaturamento = JSON.parse(dadosFaturamentoJson);

let menorValor = Number.MAX_VALUE;
let maiorValor = Number.MIN_VALUE;
let somaFaturamento = 0;

let diasAcimaDaMedia = 0;

for (let i = 0; i < dadosFaturamento.length; i++) {
  const dia = dadosFaturamento[i];

  if (dia.valor > 0) {
    menorValor = Math.min(menorValor, dia.valor);
    maiorValor = Math.max(maiorValor, dia.valor);

    somaFaturamento += dia.valor;

    if (dia.valor > somaFaturamento / dadosFaturamento.length) {
      diasAcimaDaMedia++;
    }
  }
}

const mediaFaturamento = somaFaturamento / dadosFaturamento.length;

console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);
console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);

//Questão 4
const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularValorTotalMensal(faturamento) {
  return Object.values(faturamento).reduce((total, valor) => total + valor, 0);
}

const valorTotalMensal = calcularValorTotalMensal(faturamentoPorEstado);

function calcularPercentual(valor, total) {
  return (valor / total) * 100;
}

console.log("Percentual de representação por estado:");
for (const estado of Object.keys(faturamentoPorEstado)) {
  const valorEstado = faturamentoPorEstado[estado];
  const percentual = calcularPercentual(valorEstado, valorTotalMensal).toFixed(
    2
  );
}

// Questao numero 5

function inverterString(myString) {
  let stringInvertida = "";

  for (let i = myString.length - 1; i >= 0; i--) {
    stringInvertida += myString[i];
  }

  return stringInvertida;
}
