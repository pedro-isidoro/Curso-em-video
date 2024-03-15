let button = document.getElementById('startOfTheScan');
const result = document.getElementById('res');

button.addEventListener('click', ()=>{
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    let data = new Date()
    let day = data.getDate()
    let month = data.getMonth()
    let year = data.getFullYear()
    let weekDay = data.getDay()
    let hour = data.getHours()
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()
    let milliseconds = data.getMilliseconds()

    result.innerHTML =  `<p>Dia: <mark>${day}</mark> <br></p>`
    result.innerHTML += `<p>Mês: <mark>${months[month]}</mark> <br></p>`
    result.innerHTML += `<p>Ano: <mark>${year}</mark> <br></p>`
    result.innerHTML += `<p>Dia da Semana: <mark>${weekDays[weekDay]}</mark> <br></p>`
    result.innerHTML += `<p>Hora: <mark>${hour}</mark> <br></p>`
    result.innerHTML += `<p>Minutos: <mark>${minutes}</mark> <br></p>`
    result.innerHTML += `<p>Segundos: <mark>${seconds}</mark> <br></p>`
    result.innerHTML += `<p>Milisegundos: <mark>${milliseconds}</mark></p>`
})