const myBalance = document.getElementById("balance");
const myIncome = document.getElementById("money-income");
const myExpenses = document.getElementById("money-expense");
const historyList = document.getElementById("list");
const addNewText = document.getElementById("name-of-new");
const addNewAmount = document.getElementById("amount");
const formButton = document.getElementById("transaction-btn");
const form = document.getElementById("form");
const deletebtn = document.getElementsByClassName("delete-btn");


function randomId() {
  return Math.floor(Math.random() * 100000);
}

function addListItem(obj) {
  const sign = obj.amount < 0 ? "-" : "+";
  const domElement = document.createElement("li");
  domElement.innerHTML = `${obj.text}<span>${sign}${Math.abs(
    obj.amount
  )}</span><button class = "delete-btn" onclick="removeListItem(${
    obj.id
  })">X</button>`;
  if (sign == "-") {
    domElement.classList.add("minus");
  } else {
    domElement.classList.add("plus");
  }

  domElement.setAttribute("id", `${obj.id}`);
  historyList.appendChild(domElement);
  addNewText.value = "";
  addNewAmount.value = "";
}

function updateValues(arr) {
  let mappedAmounts = arr.map(function(obj) {
    return obj.amount;
  });
  let incomeTotal = "0";
  let incomeArr = mappedAmounts.filter(function(element) {
    if (element > 0) {
      return element;
    }
  });

  for (let i = 0; i < incomeArr.length; i++) {
    incomeTotal = incomeTotal - -incomeArr[i];
  }

  let expenseTotal = 0;
  let expenseArr = mappedAmounts.filter(function(element) {
    if (element < 0) {
      return element;
    }
  });

  for (let i = 0; i < expenseArr.length; i++) {
    expenseTotal = expenseTotal - expenseArr[i];
  }
  let balance = incomeTotal - expenseTotal;
  myIncome.innerText = `$ +${incomeTotal}`;
  myExpenses.innerText = `$ -${expenseTotal}`;
  myBalance.innerText = `$ ${balance}`;
}

let transactions = [];

function addTransaction() {
  if (addNewText.value.trim() == "" || addNewAmount.value.trim() == "") {
  } else {
    const transaction = {
      id: randomId(),
      text: addNewText.value,
      amount: addNewAmount.value
    };

    transactions.push(transaction);
    console.log(transaction);
    console.log(transactions);
    addListItem(transaction);
    updateValues(transactions);
  }
}
function removeListItem(id) {
  transactions = transactions.filter(item => item.id !== id);
  document.getElementById(`${id}`).remove();
  init();
  if (historyList.children.length === 0) {
    console.log("empty");
    myIncome.innerText = "$0.00";
    myExpenses.innerText = "$0.00";
    myBalance.innerText = "$0.00";
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTransaction();
});

function init() {
  updateValues(transactions);
}
