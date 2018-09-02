process.stdout.write('start index.js\n');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', function(line){
    process.stdout.write(line + "\n");
});

rl.on('close', function(){
    process.stdout.write("readline close");
});