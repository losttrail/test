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