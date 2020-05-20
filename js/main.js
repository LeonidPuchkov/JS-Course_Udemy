let money,
  time,
  startBtn = document.getElementById("start"),
  value = document.querySelectorAll(
    ".result-table > div:not(.budget):not(.daybudget):not(.level):not(.expenses):not(.optionalexpenses):not(.income):not(.monthsavings):not(.yearsavingsyearsavings)"
  ),
  expensesItem = document.getElementsByClassName("expenses-item"),
  buttons = document.getElementsByTagName("button"),
  confirmExpenses = buttons[0],
  confirmOptionalExpenses = buttons[1],
  countBudget = buttons[2],
  optionalExpenses = document
    .querySelector(".data")
    .querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector("#income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector("#sum"),
  percentValue = document.querySelector("#percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

function deActiveBtn(arr) {
  for (let key of arr) {
    key.setAttribute("disabled", true);
    key.style.opacity = 0.5;
    key.style.cursor = "no-drop";
  }
}

deActiveBtn(buttons);

startBtn.removeAttribute("disabled");
startBtn.style.opacity = 1;
startBtn.style.cursor = "pointer";

startBtn.addEventListener("click", function() {
  function ActiveBtn(arr) {
    for (let key of arr) {
      key.removeAttribute("disabled");
      key.style.opacity = 1;
      key.style.cursor = "pointer";
    }
  }
  ActiveBtn(buttons);
});

startBtn.addEventListener("click", function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  value[0].textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

confirmExpenses.addEventListener("click", function() {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      console.log("Error");
      i--;
    }
  }
  value[3].textContent = sum;
});

confirmOptionalExpenses.addEventListener("click", function() {
  for (let i = 0; i < optionalExpenses.length; i++) {
    let opt = optionalExpenses[i].value;
    appData.optionalExpenses[i] = opt;
    value[4].textContent += appData.optionalExpenses[i] + " ";
  }
});

countBudget.addEventListener("click", function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (
      (appData.budget - +value[3].textContent) /
      30
    ).toFixed();
    value[1].textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      value[2].textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      value[2].textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      value[2].textContent = "Высокий уровень достатка";
    } else {
      value[2].textContent = "Произошла ошибка";
    }
  } else {
    value[1].textContent = "Произошла ошибка";
  }
});

incomeItem.addEventListener("input", function() {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  value[5].textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    value[6].textContent = appData.monthIncome.toFixed(1);
    value[7].textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener("input", function() {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    value[6].textContent = appData.monthIncome.toFixed(1);
    value[7].textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};
