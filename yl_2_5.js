const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Kirja suurus ', Suurus => {
    rl.question('Kas kirjal on pealkiri: ', Pealkiri => {
        rl.question('Kas kiri sisaldab manust ', Fail => {


            if (Suurus < 1){
                if (Pealkiri == 'Y')
                    if(Fail == 'Y') 
                        console.log('Kiri ei ole spamm')
            } else {
                console.log('Kiri on spamm')
            
            }

            rl.close()
        })
    })
})