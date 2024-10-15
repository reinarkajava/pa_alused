const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta enda vanus: ', vanus => {
    rl.question('Sisesta enda sugu (M voi m, N voi n): ', sugu => {
        rl.question('Sisesta treeningtyyp (1, 2, voi 3): ', treening => {
            let pulss
            let maxPulss
            let minPulss

            if (sugu == 'M' || sugu == 'm'){
                pulss = 220 - vanus
            } else if (sugu == 'N' || sugu == 'n'){
                pulss = 206 - vanus * 0.88
            
            }

            if (treening == 1) {
                minPulss = pulss * 0.5
                maxPulss = pulss * 0.7
            } else if (treening == 2) {
                minPulss = pulss * 0.7
                maxPulss = pulss * 0.8
            } else if (treening == 3) {
                minPulss = pulss * 0.8
                maxPulss = pulss * 0.87
            }
            
            console.log(`Pulsisagedus peab olema vahemikus ${Math.round(minPulss) } kuni ${Math.round(maxPulss)}`)

            rl.close()
        })
    })
})