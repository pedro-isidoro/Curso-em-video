let num = [5, 8, 2, 9, 3]

// num.push(1)
num.sort()

// console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do Vetor ${num[0]}`)

/* //!Para quando não arruma-lo antes
?    console.log(`O vetor em ordem crescente ${num.sort()}`)
?    console.log(`O primeiro valor do Vetor ${num[0]}`)
*/
/*let i = 0
while(i<num.length){
    console.log(`Elemento ${i} vale ${num[i]}`)
    i++
}*/
/*for(let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}*/
/*for(let pos in num){ //Quer dizer: Para cada posição no array num faça. E Só funciona para arrays e objetos
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
let pos = num.indexOf(3)
console.log(pos)
// console.log(num.indexOf(7)) // Retornará -1
// pos = num.indexOf(7)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}