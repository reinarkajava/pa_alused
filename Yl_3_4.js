const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Mitu pöialpoissi tahab õunu ', poialpoisid =>{
    let ounad = 14
    for(let poialpoiss =1; poialpoiss <= poialpoisid; poialpoiss++){
        let ounadpoialpoisile = Math.ceil(Math.random() * 2)
        console.log(ounadpoialpoisile)
        ounad = ounad - ounadpoialpoisile
   }
   console.log(`Lumivalgekesele jäi ${ounad}`)
   rl.close()




})