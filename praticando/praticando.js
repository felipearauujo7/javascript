/* 
let sudeste = ['SP', 'RJ', 'MG', 'ES']
let tot = sudeste.length

console.log('AS CIDADES DA REGIAO SUDESTE:')

for (let cont = tot-1; cont >= 0; cont--) {
        console.log(sudeste[cont])

} 
*/
 

/* 
let felipe = ["04248258137", 'Felipe Araujo', 27, 'M'];

console.log('CPF: ', felipe[0]);
console.log(`NOME COMPLETO: ${felipe[1]}`);
console.log('IDADE: ', felipe[2]);
console.log(`SEXO: ${felipe[3]}`); 
*/ 

/*
let numeros = [ 12, 22, 15, 88]
let soma = numeros[0] + numeros[2]
console.log(`A soma do elemento 1(${numeros[0]}) com o elemento 3(${numeros[2]}) é ${soma} `) 
*/

/* var matrizes = [[3, 4, 6], [9, 5, 1], [2, 3, 8]]
        for (let lin = 0; lin < 3; lin++) {
                let linha = ''
                for (let col = 0; col < 3; col++) { 
                        linha += matrizes[lin][col]
                }
                console.log(linha)
        }
*/ 

var notasjoao = [4.5, 6.5, 8.7]
var tot = notasjoao[0] + notasjoao[1] + notasjoao[2]
var media = tot / notasjoao.length

console.log(`A media das notas de joao é: ${media}`)

