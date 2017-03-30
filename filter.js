var difficult_tasks = [];

tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});


var difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});

// Using ES6
var difficult_tasks = tasks.filter((task) => task.duration >= 120 );


//under the hood
var filter = function (array, callback) {

    var filtered_array = [];

    array.forEach(function (element, index, array) {
        if (callback(element, index, array)) {
            filtered_array.push(element);
        }
    });

    return filtered_array;

};
