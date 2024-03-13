let countInput = document.getElementById('count')

countInput.addEventListener('click', ()=>{
    let startInput = document.getElementById('start')
    let endInput = document.getElementById('end')
    let stepInput = document.getElementById('step')
    let result = document.getElementById('res')

    if(startInput.value.length == 0 || endInput.value.length == 0 || stepInput.value.length == 0){
        // window.alert('[ERRO] Faltam Dados!')
        result.innerHTML = 'Impossível Contar!!'
    } else {
        result.innerHTML = `Contando:<br>`
        let i = Number(startInput.value)
        let f = Number(endInput.value)
        let p = Number(stepInput.value)

        if(p <= 0){
            window.alert('Passo Inválido! Considerando Passo como 1')
            p = 1
            result.innerHTML = `(Passo igual a 1) Contando:<br>` 
        }
        if(i<f){
            //Contagem Crescente
            for(let c = i; c <= f; c+=p){
                result.innerHTML += `${c} 😶‍🌫️ `
            }
        }else{
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                result.innerHTML += `${c} 😶‍🌫️ `
            }
        }
        result.innerHTML += `\u{1f3c1}`
    }
})