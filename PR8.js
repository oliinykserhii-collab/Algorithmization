'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    const counts = {};

for (const bird of arr) {
    counts[bird] = (counts[bird] || 0) + 1;
}

let maxCount = 0;
let result = Infinity;

for (const id in counts) {
    if (
        counts[id] > maxCount ||
        (counts[id] === maxCount && Number(id) < result)
    ) {
        maxCount = counts[id];
        result = Number(id);
    }
}

return result;

}

function main() {
    const ws = process.stdout;

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    //ws.end();
}