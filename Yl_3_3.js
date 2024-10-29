const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Mitu Taringut kasutatakse', taringud =>{
    let ounad = 14
    for(let taring =1; taring <= taringud; taring++){
        let tulemus = Math.floor( Math.random() * 6 )
        console.log(tulemus)
    }
    rl.close()
})



