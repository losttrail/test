'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "38000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");

    if (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "38000");
    }
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "dinner");
        let b = +prompt("Во сколько обойдется?", "10000");

        if (typeof (a) != null && typeof (b) != null && a != "" && b != 0 && a.length < 50) {
            appData.expenses[a] = b;
            console.log("done");
        } else {
            i--;
        }
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    // expenses: { [answer1] : +prompt("Во сколько обойдется?", "10000"), мой, нехороший, вариант
    //             [answer2] : +prompt("Во сколько обойдется?", "1500")},
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

chooseExpenses();

// p3 мой, нехороший, вариант
// let a1 = prompt("Введите обязательную статью расходов в этом месяце", "dinner");
// let a2 = +prompt("Во сколько обойдется?", "10000");
// let a3 = prompt("Введите обязательную статью расходов в этом месяце", "transit");
// let a4 = +prompt("Во сколько обойдется?", "1500");



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

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?", "50000"),
            percent = +prompt("Под какой процент?", "12");

        appData.monthIncome = save / 100 / 12 * percent;
        alert(appData.monthIncome);
    }
}

function detectDayBudget() {
    // appData.moneyPerDay = +((appData.budget - appData.expenses["a1"] - appData.expenses["a3"]) / 30).toFixed(2);
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ваш бюджет на день: " + appData.moneyPerDay);

    detectLevel();
}

function detectLevel() {
    if (appData.moneyPerDay < 200) {
        console.log("minimal");
    } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 2000) {
        console.log("middle");
    } else if (appData.moneyPerDay > 2000) {
        console.log("high");
    } else {
        console.log("something goes wrong");
    }
}

function chooseOptExpenses() {
    let i = 1;
    while (i < 4) {
        appData.optionalExpenses["" + i] = prompt("Статья необязательных расходов?") ;
        if ( appData.optionalExpenses["" + i] != "" && appData.optionalExpenses["" + i] != null ){
            i++;    
        }  
    }
}

checkSavings();
detectDayBudget();
chooseOptExpenses()

console.log(appData);