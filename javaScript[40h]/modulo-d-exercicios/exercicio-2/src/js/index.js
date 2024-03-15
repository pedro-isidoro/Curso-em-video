const verify = document.getElementById('verify')

/*verify.addEventListener('click', () => {
    var data = new Date()
    var yearData = data.getFullYear()
    var Inputyear = document.getElementById('year')
    var result = document.querySelector('div#res')

    if(Inputyear.value.length == 0 || Inputyear.value > yearData){
        window.alert('[ERRO] Verifique os dados e tente novamente!!!')
    }else{
        window.alert('tudo ok')
    }
})*/
verify.addEventListener('click', () => {
    var data = new Date()
    var yearData = data.getFullYear()
    var Inputyear = document.getElementById('year')
    var result = document.querySelector('div#res')

    if(Inputyear.value.length == 0 || Number(Inputyear.value) > yearData){
        window.alert('[ERRO] Verifique os dados e tente novamente!!!')
    }else{
        var sex = document.getElementsByName('sex')
        var age = yearData - Number(Inputyear.value)
        // result.innerHTML = `Idade calculada: ${age}`// Teste
        var gender = '' //genêro
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')

        if(sex[0].checked){
            gender = 'Homem'
            if(age >= 0 && age< 10){
                //Kid
                img.setAttribute('src','src/img/boy.jpg')
            }else if(age < 21){
                //young
                img.setAttribute('src','src/img/young-man.jpg')
            }else if(age < 50){
                //adult
                img.setAttribute('src','src/img/man.jpg')
            }else{
                //old
                img.setAttribute('src','src/img/old-man.jpg')
            }
        } else{
            gender = 'Mulher'
            if(age >= 0 && age< 10){
                //Kid
                img.setAttribute('src','src/img/girl.jpg')
            }else if(age < 21){
                //young
                img.setAttribute('src','src/img/young-woman.jpg')
            }else if(age < 50){
                //adult
                img.setAttribute('src','src/img/woman.jpg')
            }else{
                //old
                img.setAttribute('src','src/img/old-woman.jpg')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos ${gender} com ${age} anos.`
        result.appendChild(img)
    }
})