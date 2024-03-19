let clickInput = document.getElementById('startOfTheScan')
const res = document.getElementById('res')

clickInput.addEventListener('click', ()=>{
    let numberInput = document.getElementById('positiveNumber')
    let numberValue = Number(numberInput.value)
    console.log(numberValue)
    
    if(numberValue > 0){
        res.innerHTML += `Contando de 0 até ${numberValue} <br><br>`
        for(let i = 0; i<=numberValue; i++){
            res.innerHTML += `${i} 👉🏼 `
        }
        res.innerHTML += `🏁 <br><br>`
    }else{
        res.innerHTML += `Valor INVÁLIDO!! 🏁 <br><br>`
    }
})