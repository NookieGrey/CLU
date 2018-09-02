// deprecated instead use
// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin
// });
//
// rl.on('line', function(line){
//     process.stdout.write(line);
// });

process.stdin.setEncoding('utf8');

process.stdout.write('start index.js\n');

process.stdin.on('readable', function () {
    readLine((line) => {
        process.stdout.write(line);
    })
});

let offset = 0;
function readLine(callback) {
    let buf = process.stdin.read();
    if (!buf) return;
    for (; offset < buf.length; offset++) {
        if (buf[offset] === "\n") {
            callback(buf.slice(0, offset).toString() + "\n");
            buf = buf.slice(offset + 1);
            offset = 0;
            process.stdin.unshift(buf);
            return;
        }
    }
    process.stdin.unshift(buf);
}

process.stdin.on('end', () => {
    process.stdout.write('stdin end');
});