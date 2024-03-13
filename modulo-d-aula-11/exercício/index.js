var txtvel = document.getElementById('txtvel')
var btn = document.getElementById('verificar')
var res = document.getElementById('res')

/*function calcular(){
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}*/
btn.addEventListener("click", ()=>{
    var vel = Number(txtvel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`
    if(vel > 60){
        res.innerHTML += `<p>Você será MULTADO por excesso de velocidade!!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
})