let button = document.getElementById('startOfTheScan');

button.addEventListener('click', ()=>{
    let number1 = Number(prompt('Digite o primeiro Valor!'))
    let number2 = Number(prompt('Digite o segundo Valor!'))
    let option = Number(prompt(`Valores informados: ${number1} e ${number2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    
    const result = document.getElementById('res');
    result.innerHTML = `<h2>Calculando...</h2>`
    switch(option){
        case 1:
            result.innerHTML += `<p>A soma de ${number1} + ${number2} = <strong>${number1+number2}</strong></p>`
            break
        case 2:
            result.innerHTML += `<p>A soma de ${number1} - ${number2} = <strong>${number1-number2}</strong></p>`
            break
        case 3:
            result.innerHTML += `<p>A soma de ${number1} * ${number2} = <strong>${number1*number2}</strong></p>`
            break
        case 4:
            result.innerHTML += `<p>A soma de ${number1} / ${number2} = <strong>${(number1/number2).toLocaleString('pt-BR')}</strong></p>`
            break
        default:
            result.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${number1} e ${number2}, mas não sei o que fazer com eles. </p>`
            break
    }
})