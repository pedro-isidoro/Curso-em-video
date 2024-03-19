let button = document.getElementById('startOfTheScan');

button.addEventListener('click', ()=>{
    const result = document.getElementById('res');
    let i = 1;
    result.innerHTML += `<br><br>Pares: `
    while(i<=20){
        if(i%2 == 0){
            result.innerHTML += `<mark>${i}</mark> 👉🏼 `
        }else{
            result.innerHTML += `${i} 👉🏼 `
        }
        i++
    }
    result.innerHTML += `🏁`
})