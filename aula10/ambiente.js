let valores = [9, 8, 1, 5, 6]

console.log(`Voce tem ${valores.length} elementos no seu vetor!`)
console.log(`O seu vetor Originalmente é ${valores}`)
console.log(`O seu vetor de forma ordenada é ${valores.sort()}`)
valores.push(7)
console.log(`Seu vetor teve ${valores[5]} adicionado e agora é ${valores}`)
console.log(`Aqui esta seu vetor ordenado apos sua alteração ${valores.sort()}`)
console.log(`O valor 1 esta na chave ${valores.indexOf(1)}`)
