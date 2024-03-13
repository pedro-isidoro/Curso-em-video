var txt = document.getElementById('txt')
var btn = document.getElementById('verificar')
var res = document.getElementById('res')

btn.addEventListener("click", ()=>{
    var name = txt.value
    res.innerHTML = `<p>O país onde você está é o/a <strong>${name}</strong></p>`
    if(name == 'Brasil' || name == 'brasil'){
        res.innerHTML += `<p>Você está no Brazaaaaaa!</p>`
    }else{
        res.innerHTML += `<p>Você está em um país estrangeiro!</p>`
    }
})