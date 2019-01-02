'use strict';

// p2
let money = +prompt("Ваш бюджет на месяц?", "38000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");

// p3 мой, нехороший, вариант
// let a1 = prompt("Введите обязательную статью расходов в этом месяце", "dinner");
// let a2 = +prompt("Во сколько обойдется?", "10000");
// let a3 = prompt("Введите обязательную статью расходов в этом месяце", "transit");
// let a4 = +prompt("Во сколько обойдется?", "1500");

let appData = {
    budget: money,
    timeData: time,
    // expenses: { [answer1] : +prompt("Во сколько обойдется?", "10000"), мой, нехороший, вариант
    //             [answer2] : +prompt("Во сколько обойдется?", "1500")},
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "dinner");
    let b = +prompt("Во сколько обойдется?", "10000");
    
    if ( typeof(a) != null && typeof(b) != null && a != "" && b != 0 && a.length < 50 ) {
        appData.expenses[a] = b;
        console.log("done");
    } else {
        i--;
    }
   
}

// let i = 0
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "dinner");
//     let b = +prompt("Во сколько обойдется?", "10000");
    
//     if ( typeof(a) != null && typeof(b) != null && a != "" && b != 0 && a.length < 50 ) {
//         appData.expenses[a] = b;
//         console.log("done");
//         i++;
//     }
// }

// let i = 0
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "dinner");
//     let b = +prompt("Во сколько обойдется?", "10000");
    
//     if ( typeof(a) != null && typeof(b) != null && a != "" && b != 0 && a.length < 50 ) {
//         appData.expenses[a] = b;
//         console.log("done");
//         i++;
//     }
// } while (i < 2);

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

console.log(appData.expenses);

// appData.moneyPerDay = +((appData.budget - appData.expenses["a1"] - appData.expenses["a3"]) / 30).toFixed(2);
appData.moneyPerDay = (appData.budget / 30).toFixed(2);

alert("Ваш бюджет на день: " + appData.moneyPerDay);
if (appData.moneyPerDay < 200) {
    console.log("minimal");
} else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 2000) {
    console.log("middle");
} else if (appData.moneyPerDay > 2000) {
    console.log("high");
} else {
    console.log("something goes wrong");
}
console.log(appData);