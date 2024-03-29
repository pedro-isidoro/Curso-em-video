const num = document.getElementById('fnum');
const lista = document.getElementById('flista');
const res = document.getElementById('res')

const numberBtn = document.getElementById('numberInput');
const endBtn = document.getElementById('endInput');

let values = []

function isNumero(number) {
    if(Number(number) >= 1 && Number(number) <= 100) {
        return true
    } else {
        return false
    }
} //Para ver se está entre 1 e 100

function inLista(number, list) {
    if (list.indexOf(Number(number)) != -1) {
        return true
    } else {
        return false
    }
} //Para ver se não repetiu o número

numberBtn.addEventListener('click', () => {
    if(isNumero(num.value) && !inLista(num.value, values)) {
        // window.alert('Tudo Ok.')
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else if(inLista(num.value, values)) {
        window.alert('Já encontrado na Lista!')
    } else {
        window.alert('Valor Inválido!')
    }
    num.value = ''
    num.focus()
}) //Para adicionar o número a select


endBtn.addEventListener('click', () => {
    if(values.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = values.length
        let maior = values[0]
        let menor = values[0]
        let soma = 0
        let media  = 0
        for(let pos in values){
            soma += values[pos]
            if(values[pos] > maior){
                maior = values[pos]
            }
            if(values[pos] < menor){
                menor = values[pos]
            }
        }
        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
})