let button = document.getElementById('startOfTheScan');

button.addEventListener('click', ()=>{
    const result = document.getElementById('res');
    console.log(result.value)
    let chosenNumber = Number(document.getElementById('chosenNumber').value)

    let i = 0
    result.innerHTML = `<strong>Tabuada de ${chosenNumber}</strong><br><br>`
    while(i <= 10){
        result.innerHTML += `${chosenNumber} x ${i} = <strong>${chosenNumber*i}</strong><br>`
        i++
    }
})