// if (2*2 == 5){
//     console.log("yes!");
// } else {
//     console.log("no!")
// }

let n = 10;
if (n < 9) {
    console.log("< 9!");
} else if (n > 10) {
    console.log("> 10!");
} else {
    console.log("mb 10!");
}

(n == 10) ? console.log("no!"): console.log("yes!");

switch (n) {
    case n < 9:
        console.log("< 9!");
        break;
    case n > 10:
        console.log("> 10!");
        break;
    case 10:
        console.log("10!");
        break;
    default:
        console.log("mb 10!");
        break;   
}

// let n = 10;

// while (n < 20) { //test then do
//     console.log(n);
//     n++;
// }

// do { //do then test
//     console.log(n);
//     n++;
// }
// while (n < 20);

for(let i = 0; i < 10; i++) {
    if (i == 7) {
        // break;
        continue;
    }
    console.log(i);
}

// console.log(calc(3, 3));
// function calc(a,b) {
//     return a + b;
// }

// let calc = function (a,b) {
//     return a + b;
// }
// console.log(calc(3, 3));


calc = (a,b) => (a + b);
console.log(calc(3, 3));

let num = 5;
function anotherNum(num) {
    return 10;
}
num = anotherNum(num);
console.log(num);

let str = "Test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2ffs";
console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));