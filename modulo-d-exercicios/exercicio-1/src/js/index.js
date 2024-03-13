function load(){
    var msg = document.getElementById('msg')
    var image = document.getElementById('image')
    var data = new Date()
    var hour = data.getHours() //pega o horário
    msg.innerHTML = `Agora são exatamente ${hour} Horas`
    // var hour = 20
    if(hour >= 0 && hour <= 12){
        //Bom Dia!
        image.src = 'src/images/manha.jpg'
        document.body.style.background = '#E1C883'
    }else if(hour >= 12 && hour <= 18){
        //Boa Tarde!
        image.src = 'src/images/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //Boa Noite!
        image.src = 'src/images/noite.jpg'
        document.body.style.background = '#09315D'
    }
}
const body = document.getElementsByTagName('body')
body.addEventListener('load', load()) //Irá aparecer na tela, assim que carregado.