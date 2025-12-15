// Exercício que verifica a hora e diz bom dia, tarde ou boa noite.

//Pega a hora do usuário. Depende se está rodando no servidor ou cliente

var agora = new Date()
var agora= agora.getHours

if (agora < 12) {
    console.log(`Olá, bom dia! Agora são exatamente ${agora} horas`)
} else if (agora >=18){
    console.log(`Olá, boa tarde! Agora é exatamente ${agora} horas`)
} else {
    console.log(`Olá, Boa noite! Agora é exatamente ${agora} horas`)
}
