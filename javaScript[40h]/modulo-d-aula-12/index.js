var idade = 66
console.log(`Você tem ${idade} anos.`)
/*
if (idade < 16){
    console.log(`Não Pode Votar`)
} else{
    if(idade >= 16 && idade < 18){
        console.log(`Voto Opcional`)
    }else{
        console.log(`Pode votar`)
    }
}
*/
/*
if (idade < 16){
    console.log(`Não Pode Votar`)
} else{
    if(idade < 18){
        console.log(`Voto Opcional`)
    }
}
*/
/*
if (idade < 16){
    console.log(`Não Pode Votar`)
} else if(idade < 18){
    console.log(`Voto Opcional`)
} else if(idade >= 18){
    console.log(`Voto Obrigatório`)

}
*/
/*
if (idade < 16){
    console.log(`Não Pode Votar`)
} else if(idade < 18){
    console.log(`Voto Opcional`)
} else{
    console.log(`Voto Obrigatório`)

}
 */
if (idade < 16){
    console.log(`Não Pode Votar`)
} else if(idade < 18 || idade > 65){
    console.log(`Voto Opcional`)
} else{
    console.log(`Voto Obrigatório`)

}