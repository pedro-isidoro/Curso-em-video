const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    let data = document.getElementById('data')
    let box = document.getElementById('res')
    if(data.value.length == 0){
        window.alert('Inválido! Favor digitar um número')
    } else {
        let n = Number(data.value)
        // console.log(n)
        box.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('Option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            box.appendChild(item)
        }
    }
})