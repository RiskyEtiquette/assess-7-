const perf = require('execution-time')();

function doublerAppend(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}

function doublerInsert(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
}

function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// Function to execute the timing tests
function runTimingTests(array, functionName) {
    perf.start(); // Start timer
    functionName(array);
    return perf.stop(); // Stop timer and return results
}

// Run timing tests for each array and function
const resultsTable = {
    'Array Size': ['tinyArray', 'smallArray', 'mediumArray', 'largeArray', 'extraLargeArray'],
    'doublerAppend': [],
    'doublerInsert': []
};

const arrays = [tinyArray, smallArray, mediumArray, largeArray, extraLargeArray];
for (let array of arrays) {
    resultsTable['doublerAppend'].push(runTimingTests(array, doublerAppend).time);
    resultsTable['doublerInsert'].push(runTimingTests(array, doublerInsert).time);
}

// Output the results in a table
console.log('Timing results for different array sizes:');
console.table(resultsTable);

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
