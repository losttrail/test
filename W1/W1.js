'use strict';

// p2
let money = +prompt("Ваш бюджет на месяц?", "38000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");

// p3
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "dinner");
let answer2 = prompt("Введите обязательную статью расходов в этом месяце", "transit");

let appData = {
    budget: money,
    timeData: time,
    expenses: { [answer1] : +prompt("Во сколько обойдется?", "10000"),
                [answer2] : +prompt("Во сколько обойдется?", "1500")},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);

console.log(appData.expenses[answer1]);
console.log(appData.expenses[answer2]);

let onedaybudget = +((appData.budget - appData.expenses[answer1] - appData.expenses[answer2])/30).toFixed(2);
alert(onedaybudget);
console.log(onedaybudget);