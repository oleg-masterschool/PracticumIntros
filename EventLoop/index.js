// Stack visualization
// Stack animation
// https://www.cs.usfca.edu/~galles/visualization/StackArray.html

// Error stack
function originalFunction() {
    throw new Error('I have a bug!');
}

function callsOriginal() {
    originalFunction();
}

function mainExecutionThread() {
    callsOriginal();
}

mainExecutionThread();

// Blowing up the stack

function runsForever() {
    runsForever();
}

function callsRuns() {
    runsForever();
}

function mainExecutionThread() {
    callsRuns();
}

mainExecutionThread();

// slow functions

function verySlow(run) {
    const t0 = performance.now();
    console.log(`Starting ${run}....`);
    let heavyComputation;
    for (let i = 0; i < 100000000; ++i) {
        heavyComputation = Math.sqrt(heavyComputation * i) * Math.pow(heavyComputation, i);
    }
    const t1 = performance.now();
    console.log(`Ended ${run}! Took ${(t1 - t0).toFixed(2)} milliseconds`)
}

function mainExecutionThread() {
    console.log('starting execution');
    verySlow('first');
    console.log('in the middle of execution');
    verySlow('second');
    console.log('ending callsSlowFuncs');
}

// Optimize calls to slow function

function stillSlow(run) {
    const t0 = performance.now();
    console.log(`Starting ${run}....`);
    let heavyComputation;
    for (let i = 0; i < 100000000; ++i) {
        heavyComputation = Math.sqrt(heavyComputation * i) * Math.pow(heavyComputation, i);
    }
    const t1 = performance.now();
    console.log(`Ended ${run}! Took ${(t1 - t0).toFixed(2)} milliseconds`)
}

function mainExecutionThread() {
    console.log('starting execution');
    setTimeout(() => stillSlow('first'), 0);
    console.log('in the middle of execution');
    setTimeout(() => stillSlow('second'), 0);
    console.log('ending callsSlowFuncs');
}

// Investigate with debugger

function stillSlow(run) {
    const t0 = performance.now();
    console.log(`Starting ${run}....`);
    debugger;
    let heavyComputation;
    for (let i = 0; i < 100000000; ++i) {
        heavyComputation = Math.sqrt(heavyComputation * i) * Math.pow(heavyComputation, i);
    }
    const t1 = performance.now();
    console.log(`Ended ${run}! Took ${(t1 - t0).toFixed(2)} milliseconds`)
}

function mainExecutionThread() {
    console.log('starting execution');
    setTimeout(() => stillSlow('first'), 0);
    debugger;
    console.log('in the middle of execution');
    setTimeout(() => stillSlow('second'), 0);
    console.log('ending callsSlowFuncs');
    debugger;
}

// Queue animation
// https://www.cs.usfca.edu/~galles/visualization/QueueArray.html

// Event Loop

function mainExecutionThread() {
    console.log('starting execution');
    setTimeout(() => stillSlow('first'), 0);
    console.log('in the middle of execution');
    setTimeout(() => stillSlow('second'), 0);
    console.log('ending callsSlowFuncs');
}

