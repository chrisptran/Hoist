// console.log(hello);
// var hello = 'world';

// //undefined

// var needle = "haystack";
// test();
// function test() {
//     var needle = "magnet";
//     console.log(needle);
// }

// // magnet

// var brendan = "super cool";
// function print() {
//     brendan = "only ok";
//     console.log(brendan);
// }
// console.log(brendan);

// // super cool

// var food = "chicken";
// console.log(food);
// eat();
// function eat() {
//     food = "half chicken";
//     console.log(food);
//     var food = "gone";
// }

// // chicken, half chicken

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// // type error; mean is not a function

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }

// console.log(genre);

// // undefined, rock, r&b, disco

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// // san jose, seattle, burbank, san jose

console.log(makeDojo("chicago", 65));
console.log(makeDojo("berkeley", 0));

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;

    if(dojo.students > 50) {
        dojo.hiring = true;
    }
    else if(dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// true, type error. assignment to constant variable

