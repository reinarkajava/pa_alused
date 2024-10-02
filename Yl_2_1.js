const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta Temperatuur: ', Temperatuur => {
    if (Temperatuur > 4){
        console.log('Ei ole jäätumisohtu') 
    } else{
        console.log('On jäätumisoht')
    } 

    rl.close()
})


