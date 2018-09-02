const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

let result = 0;

rl.on('line', function (line) {
    if (/fil(e|es) changed/.test(line)) {
        const words = line.split(" ");
        result += +words[4];
    }
});

rl.on('close', function () {
    process.stdout.write(`total lines of code: ${result}\n`);
});