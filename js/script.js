let money = prompt("Ваш бюджет на месяц ?", "Введите сумму");
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
