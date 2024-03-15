var agora = new Date()
// var hora = 13
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} h.`)
if(hora > 4 && hora <= 12){
    console.log('Bom dia!')
}else if(hora > 12 && hora <= 18){
    console.log('Boa Tarde!')
}else if(hora > 18 && hora <= 24){
    console.log('Boa Noite!')
}else if(hora >= 1 && hora <= 4){
    console.log('Boa Madrugada!')
}