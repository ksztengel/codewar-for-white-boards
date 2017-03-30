var total_time = 0;

tasks.forEach(function (task) {
    // The plus sign just coerces
    // task.duration from a String to a Number
    total_time += (+task.duration);
});

var total_time = tasks.reduce(function (previous, current) {
    return previous + current;
}, 0);

// Using arrow functions
var total_time = tasks.reduce((previous, current)=> previous + current );

//under the hood
var reduce = function (array, callback, initial) {
    var accumulator = initial || 0;

    array.forEach(function (element) {
       accumulator = callback(accumulator, array[i]);
    });

    return accumulator;
};
