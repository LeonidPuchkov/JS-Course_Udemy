/* let money = prompt("Ваш бюджет на месяц ?", "Введите сумму");
let time = prompt("Введите дату в формате YYYY - MM - DD");

let nameExpenses = prompt("Введите обязательную статью расходов в этом месяце");
let amountExpenses = prompt("Во сколько обойдется?");

let expenses = {};
expenses[nameExpenses] = amountExpenses;

let appData = {
  moneyData: money,
  timeData: time,
  expenses: expenses,
  optionalExpenses: {},
  income: [],
  savings: false
};

var budgetPerDay =
  (Number(appData.moneyData) - Number(appData.expenses[nameExpenses])) / 30;

alert(budgetPerDay);
 */

let money = prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

/* for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = +prompt("Во сколько обойдется?", "");
  if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    console.log("Error");
    i--;
  }
} */

let i = 0;
do {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = +prompt("Во сколько обойдется?", "");
  if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    console.log("Error");
    i--;
  }
  i++;
} while (i < 2);


/* let i = 0;

while (i < 2) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = +prompt("Во сколько обойдется?", "");
  if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    i++;
    appData.expenses[a] = b;
  } else {
    console.log("Error");
  }
} */

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}