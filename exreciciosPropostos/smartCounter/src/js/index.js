let clickInput = document.getElementById('startOfTheScan')
const res = document.getElementById('res')

clickInput.addEventListener('click', ()=>{
    let startNumberValue = Number(document.getElementById('startNumber').value)
    console.log(startNumberValue)
    
    let finalNumberValue = Number(document.getElementById('finalNumber').value)
    console.log(finalNumberValue)

    res.innerHTML += `<h2>Contando de ${startNumberValue} até ${finalNumberValue} </h2>`
    if(startNumberValue < finalNumberValue){
        for(let i = startNumberValue; i <= finalNumberValue; i++){
            res.innerHTML += `${i} 👉🏼 `
        }
        res.innerHTML += `🏁 <br><br>`
    }else if(startNumberValue > finalNumberValue){
        for(let i = startNumberValue; i >= finalNumberValue; i--){
            res.innerHTML += `${i} 👉🏼 `
        }
        res.innerHTML += `🏁 <br><br>`
    }else{
        res.innerHTML += `Valor INVÁLIDO!! 🏁 <br><br>`
    }
})