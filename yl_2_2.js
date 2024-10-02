const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta Perekonnanimi: ', perenimi => {
    if (perenimi.slice(-2) == "ne"){
        console.log('On abielus') 
    } else if(perenimi.slice(-2) == "te"){
        console.log('On Vallaline')
        
    } else if(perenimi.slice(-2) == "e"){
        console.log('Ei tea')
    
        
    } else{
        console.log('Pole leedu perekonnanimi')
    }   

    rl.close()
})

