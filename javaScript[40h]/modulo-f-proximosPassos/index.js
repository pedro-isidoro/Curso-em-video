let amigo = {
	nome: 'José', // Atributo: valor,
	sexo: 'M',
	peso: 85.4,
	engordar(p=0){
		console.log('Engordou')
		this.peso += p
	}
}
console.log(typeof amigo + '\n')
console.log(amigo)
console.log(`\n${amigo.nome} pesa ${amigo.peso}kg`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)